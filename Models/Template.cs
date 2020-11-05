using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CvCreator.Models
{
    public class Template
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Html { get; set; }
        public string Styles { get; set; }
        public bool IsActive { get; set; }
    }
}
