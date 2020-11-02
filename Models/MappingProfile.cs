using AutoMapper;
using CvCreator.Models.DTOs;

namespace CvCreator.Models
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {
            CreateMap<Template, TemplateDTO>();
            CreateMap<TemplateDTO, Template>();
        }

    }
}
