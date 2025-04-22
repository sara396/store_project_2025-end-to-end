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

    public class DALSaleDetail : IDALSaleDetail
    {
        GameStoreContext DB=new GameStoreContext();
        public bool Add(SaleDetail obj)
        {
            try
            {
                DB.SaleDetails.Add(obj);
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
                SaleDetail i=DB.SaleDetails.FirstOrDefault(o=>o.SaleCode == id);
                DB.SaleDetails.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<SaleDetail> Get()
        {
            //return DB.SaleDetails.ToList();   
            return DB.SaleDetails.Include(j => j.Buy).Include(j=>j.Game).ToList();
        }

        public bool Update(int id, SaleDetail obj)
        {
            //DB.SaleDetails.FirstOrDefault(o=>o.SaleCode==id).BuyId= obj.BuyId;
            //DB.SaleDetails.FirstOrDefault(o => o.SaleCode == id).GameId = obj.GameId;
            //DB.SaleDetails.FirstOrDefault(o => o.SaleCode == id).SaleAmount = obj.SaleAmount;

            SaleDetail s = DB.SaleDetails.FirstOrDefault(o => o.SaleCode == id);
            DB.Entry(s).CurrentValues.SetValues(obj);


            DB.SaveChanges();
            return true;    

        }
    }
}
