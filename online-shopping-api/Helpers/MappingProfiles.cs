﻿using AutoMapper;
using Core.Entities;
using online_shopping_api.Dtos;

namespace online_shopping_api.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles() {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(t => t.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(p => p.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
        }   
    }
}