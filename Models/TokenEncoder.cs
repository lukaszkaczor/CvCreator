using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace CvCreator.Models
{
    public class TokenEncoder
    {
        private string _token;

        public TokenEncoder(string token)
        {
            _token = token;
        }

        public string EncodeEmail()
        {
            var token = new JwtSecurityToken(TrimToken());
            return token.Claims.FirstOrDefault(d=>d.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")?.Value;
        }

        private string TrimToken() => _token.Substring(7);
    }
}
