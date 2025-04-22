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

    public class DALCustomer : IDALCustomer
    {
        GameStoreContext DB=new GameStoreContext();
        public bool Add(Customer obj)
        {
            try
            {
                DB.Customers.Add(obj);
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
                Customer i= DB.Customers.FirstOrDefault(o=>o.CustId==id);
                DB.Customers.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
        }

        public List<Customer> Get()
        {
           return DB.Customers.Include(j => j.Buys).ToList();
        }

        public bool Update(int id, Customer obj)
        {
            try
            {
                //DB.Customers.FirstOrDefault(o=>o.CustId==id).CustName=obj.CustName;
                //DB.Customers.FirstOrDefault(o => o.CustId ==id).CustPassWord=obj.CustPassWord;
                //DB.Customers.FirstOrDefault(o => o.CustId == id).CustPassWord = obj.CustPassWord;

                Customer c = DB.Customers.FirstOrDefault(o => o.CustId == id);
                DB.Entry(c).CurrentValues.SetValues(obj);


                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
        }
    }
}
