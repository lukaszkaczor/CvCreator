using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CvCreator.Data;
using CvCreator.Models;
using CvCreator.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;

namespace CvCreator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersDocumentsController : Controller
    {
        private ApplicationDbContext _context;
        private IMapper _mapper;

        public UsersDocumentsController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<UsersDocument>> Get()
        {
            var userId = GetUserId();

            return await _context.UsersDocuments.Where(d => d.ApplicationUserId == userId).ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post(UsersDocument model)
        {
            model.ApplicationUserId = GetUserId();
            if (ModelState.IsValid)
            {
                await _context.UsersDocuments.AddAsync(model);
                await _context.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UsersDocumentDTO model)
        {
            var document = await _context.UsersDocuments.FirstOrDefaultAsync(d => d.Id == id);
            var userId = GetUserId();

            if (document is null)
                return NotFound();

            if (!CheckUserIsValid(document.ApplicationUserId)) return NotFound();

            if (ModelState.IsValid)
            {
                _mapper.Map<UsersDocumentDTO, UsersDocument>(model, document);
                await _context.SaveChangesAsync();

                return Ok(document);
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var document = await _context.UsersDocuments.FirstOrDefaultAsync(d => d.Id == id);

            if (document is null) return NotFound();
            if (!CheckUserIsValid(document.ApplicationUserId)) return NotFound();

            _context.UsersDocuments.Remove(document);
            await _context.SaveChangesAsync();

            return Ok(document);
        }


        private bool CheckUserIsValid(string id)
        {
            return GetUserId() == id;
        }

        private string GetUserId()
        {
            string accessToken = Request.Headers[HeaderNames.Authorization];
            var encoder = new TokenEncoder(accessToken);
            var email = encoder.EncodeEmail();
            return _context.Users.FirstOrDefault(d => d.Email == email)?.Id;
        }
    }
}