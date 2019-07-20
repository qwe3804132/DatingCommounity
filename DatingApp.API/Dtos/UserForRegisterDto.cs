using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {   [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(20,MinimumLength=4,ErrorMessage="Your must have strong PASSWORD that longer than 4")]
        public string Password { get; set; }
    }
}