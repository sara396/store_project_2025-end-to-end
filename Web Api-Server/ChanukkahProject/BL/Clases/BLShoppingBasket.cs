using AutoMapper;
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
    public class BLShoppingBasket
    {
        GameStoreContext DB = new GameStoreContext();
        IMapper iMapper;

        //בנאי
        public BLShoppingBasket()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        //שמירת ביצוע קניה
        public int SaveBuy(DTOShoppingBasket SB, int codeC)
        {
            try
            {
                Buy b = new Buy();
                b.CustId = codeC;
                b.BuyDaty = DateTime.Now;
                b.BuySum = SB.TotsalEmount;
                DB.Buys.Add(b);
                DB.SaveChanges();
                return b.BuyId;
            }
            catch
            {
                return -1;
            }
        }

        //שמירה בטבלת פרטי קניה
        public bool saveSaleDetail(DTOShoppingBasket SB, int codeC)
        {
            try
            {
                SaleDetail s = new SaleDetail();
                s.BuyId = SaveBuy(SB, codeC);      //קוד קניה
                s.GameId = SB.GameId;//קוד משחק
                s.SaleAmount = SB.Emount; //כמות משחק
                DB.SaleDetails.Add(s);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

      //  מעדכן כמות לאחר קניה
        //public bool SaveEmount(DTOShoppingBasket SB, int codeC)
        //{
        //    try
        //    {
        //       DB.Games.Ge
        //        g.GameAmount = g.GameAmount - SB.Emount;
        //        UpdateGame(SB.GameId, g);
        //        return true;
        //    }
        //    catch
        //    {
        //        return false;
        //    }
        //}
    }
}
