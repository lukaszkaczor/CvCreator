using System;
namespace CvCreator.Models.Account
{
    public class Register : Login
    {
        public string ConfirmPassword { get; set; }

        public bool PasswordsAreTheSame() => Password == ConfirmPassword;
    }
}