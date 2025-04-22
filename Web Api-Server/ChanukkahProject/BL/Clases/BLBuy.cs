using AutoMapper;
using BL.Services;
using DAL.models;
using DAL.Services;
using DTO;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Clases
{
    public class BLBuy : IBLBuy
    {
        IDALBuy I;
        IMapper iMapper;
        public BLBuy(IDALBuy I)
        { 
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }



        //שמירת ביצוע קניה-כמו הדסה
        public int SaveBuyList(List<DTOShoppingBasket> SB, int custId)//DTOShoppingBasket is List of games in DTOShoppingBasket
        {
            try
            {
                Buy b = new Buy();
                b.CustId = custId;             //קןד לקוח
                b.BuyDaty = DateTime.Now;   //תאריך קניה

                int? sum = 0;     //NULL לא הסכים בלי זה למרות שעשיתי את התנאי של ה
                foreach (var item in SB)
                {
                    if (item.TotsalEmount != null)
                        sum += item.TotsalEmount;
                    //sum += item.GamePrice * item.Emount;

                }
                b.BuySum = sum;            //add the sum of the TotsalEmount
                I.Add(b);                   //add to the DB

                return b.BuyId;             //get to react
            }
            catch
            {
    return -1;
}
        }


        //שמירת רשומה-קניה
        //פונקציה שמוסיפה רשומה לטבלת קניות
        public int SaveBuy(DTOBuy sb)
        {
            Buy b=iMapper.Map<DTOBuy,Buy>(sb);
            b.BuyDaty = DateTime.Today;
            I.Add(b); 
            return b.BuyId;
        }

        //פונקציה שמחזירה את כל הקניות של בנ"א מסוים 
        //הוספתי אותה בשביל דף פרטיים אישיים
        public List<DTOBuy> GetBuysByCustId(int custId)
        {
            List<DTOBuy> bReturn = new List<DTOBuy>();
            List<DTOBuy> bb=iMapper.Map<List<Buy>, List<DTOBuy>> (I.Get());
            foreach (var item in bb) { 
                if(item.CustId == custId)
                    bReturn.Add(item);
            }
            return bReturn;
        }

    }
}
