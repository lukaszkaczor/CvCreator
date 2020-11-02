using System.Runtime.Serialization;

namespace CvCreator.Models.DTOs
{
    [DataContract]
    public class TemplateDTO
    {
        // [DataMember]
        // public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string ImageUrl { get; set; }
        [DataMember]
        public string Html { get; set; }
        [DataMember]
        public string Styles { get; set; }
    }
}
