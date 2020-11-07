namespace CvCreator.Models
{
    public class UsersDocument
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Html { get; set; }
        public string Styles { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}