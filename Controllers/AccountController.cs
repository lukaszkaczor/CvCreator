using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CvCreator.Data;
using CvCreator.Models;
using CvCreator.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace CvCreator.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class AccountController : ControllerBase
    {
        private ApplicationDbContext _context;
        private UserManager<ApplicationUser> _userManager;

        public AccountController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }


        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] Login creditentials)
        {
            if (creditentials is null) return BadRequest("Invalid client request");
            var user = await FindUserAsync(creditentials.Email);
            if (user is null) return Unauthorized();

            var userRoles =
            (from dbRoles in _context.Roles
             join dbUserRoles in _context.UserRoles on dbRoles.Id equals dbUserRoles.RoleId
             where dbUserRoles.UserId == user.Id
             select dbRoles).ToList();

            var passwordVerificationResult = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, creditentials.Password);

            if (passwordVerificationResult == PasswordVerificationResult.Success)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCreditentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>(){
                    new Claim(ClaimTypes.Email, creditentials.Email),
                };

                foreach (var role in userRoles)
                    claims.Add(new Claim(ClaimTypes.Role, role.Name));

                var tokenOptions = new JwtSecurityToken(
                    issuer: "https//localhost:5001",
                    audience: "https//localhost:5001",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(120), //add autorefresh
                    signingCredentials: signingCreditentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                return Ok(new { Token = tokenString });
            }

            return Unauthorized();
        }


        [HttpPost, Route("register")]
        public async Task<IActionResult> Register(Register creditentials)
        {
            if (creditentials is null) return BadRequest();
            if (!creditentials.PasswordsAreTheSame()) return Forbid("Podane hasła różnią się od siebie.");

            var user = await FindUserAsync(creditentials.Email);

            if (user is null)
            {
                user = new ApplicationUser()
                {
                    Email = creditentials.Email,
                    UserName = creditentials.Email
                };
                await _userManager.CreateAsync(user, creditentials.Password);

                return StatusCode(200);
            }

            return StatusCode(403, "Taki użytkownik już instnieje.");
        }


        private async Task<ApplicationUser> FindUserAsync(string email)
            => await _context.Users.FirstOrDefaultAsync(user => user.Email == email);
    }
}