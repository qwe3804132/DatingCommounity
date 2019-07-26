using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User,UserForListDto>().ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p =>p.IsMain).Url);
            });
            CreateMap<User,UserForDetailedDto>().ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p =>p.IsMain).Url);
            });
            CreateMap<Photo,PhotosForDetailedDto>();
            
        }
    }
}