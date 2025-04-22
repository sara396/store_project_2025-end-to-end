using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DTO
{
    public class Myprofile:Profile
    {
        public Myprofile() {
            //המרה אוטומטית -כי לא הוספנו שמות
            //(אם נוסיף שמות נצטרך כל אחד להמיר ל2הכיונים)

            //conversion Game
            CreateMap<Game, DTOGame>();
            CreateMap<DTOGame, Game>();

            //conversion Category
            CreateMap<Category,DTOCategory>();
            CreateMap<DTOCategory, Category>();

            //conversion Customer
            CreateMap<Customer,DTOCustomer>();
            CreateMap<DTOCustomer,Customer>();

            //conversion Buy
            CreateMap<Buy, DTOBuy>();
            CreateMap<DTOBuy, Buy>();

            //conversion SaleDetaild
            CreateMap<SaleDetail, DTOSaleDetail>().ForMember(x => x.GameName, y => y.
            MapFrom(v => v.Game.GameName))
                .ForMember(x => x.GamePrice, y => y.
                MapFrom(v => v.Game.GamePrice))
                .ForMember(x => x.GameImg, y => y.
                MapFrom(v => v.Game.GameImg));
            CreateMap<DTOSaleDetail, SaleDetail>();

        }
    }
}
