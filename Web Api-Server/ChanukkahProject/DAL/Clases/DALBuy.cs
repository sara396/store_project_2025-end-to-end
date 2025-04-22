using DAL.models;
using DAL.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Clases
{
    public class DALBuy : IDALBuy
    {
        GameStoreContext DB=new GameStoreContext();
        public bool Add(Buy obj)
        {
            try
            {
                DB.Buys.Add(obj);
                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                Buy i=DB.Buys.FirstOrDefault(o=>o.BuyId == id);
                DB.Buys.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
        }

        public List<Buy> Get()
        {
            return DB.Buys.Include(j => j.Cust).ToList();
        }

        public bool Update(int id, Buy obj)
        {
            try
            {
                //DB.Buys.FirstOrDefault(o=>o.BuyId==id).CustId= obj.CustId;
                //DB.Buys.FirstOrDefault(o => o.BuyId == id).CustId = obj.CustId;
                //DB.Buys.FirstOrDefault(o => o.BuyId == id).BuyDaty = obj.BuyDaty;
                //DB.Buys.FirstOrDefault(o => o.BuyId == id).BuySum = obj.BuySum;

                Buy b = DB.Buys.FirstOrDefault(o => o.BuyId == id);
                DB.Entry(b).CurrentValues.SetValues(obj);

                DB.SaveChanges ();
                return true;

            }
            catch 
            {
                return false;
            }
        }
    }
}
