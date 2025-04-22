using AutoMapper;
using BL.Services;
using BL.Clases;
using DAL.models;
using DAL.Services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Clases
{
    public class BLSaleDetail : IBLSaleDetail
    {
        IDALSaleDetail I;
        IMapper iMapper;
        public BLSaleDetail(IDALSaleDetail I) { 
        
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }
        //שומרת פרטי קניה 
        public bool SaveSaleDetail(List<DTOShoppingBasket> SB, int codeK)//DTOShoppingBasket is List of games in DTOShoppingBasket
        {                                                                  //&get codK is code Buy
            try
            {
                //SaleDetail b = new SaleDetail();
                //b.BuyId = codeK;
                foreach (var item in SB)
                {
                    SaleDetail b = new SaleDetail();
                    b.BuyId = codeK;
                    b.GameId = item.GameId;
                    b.SaleAmount = item.Emount;
                    I.Add(b);
                }
                return true;
            }
            catch 
            {

                return false;
            }

        }


        //פונקציה שמחזירה את כל פרטי קניה של קניה מסוימת 
        //הוספתי אותה בשביל דף פרטיים אישיים
        public List<DTOSaleDetail> GetSaleDetailByCustId(int buyId)
        {
            List<DTOSaleDetail> bReturn = new List<DTOSaleDetail>();
            List<DTOSaleDetail> bb = iMapper.Map<List<SaleDetail>, List<DTOSaleDetail>>(I.Get());
            foreach (var item in bb)
            {
                if (item.BuyId == buyId)
                    bReturn.Add(item);
            }
            return bReturn;
        }
    }
}
