using AutoMapper;
using BL.Services;
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
    public class BLCustomer : IBLCustomer
    {
        IDALCustomer I;
        IMapper iMapper;
        public BLCustomer(IDALCustomer I)
        {
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool AddCustomer(DTOCustomer customer)
        {
            Customer c=iMapper.Map<DTOCustomer, Customer>(customer);
            return I.Add(c);
        }


        //יצרתי מעצמייייייייייייייייייייייייייי
        //החזרת פרטי הלקוח
        public DTOCustomer Have(DTOCustomer customer)
        {
            List<DTOCustomer> l = iMapper.Map<List<Customer>, List<DTOCustomer>>(I.Get());
            foreach (var item in l)
            {
                //אם השם ופרטי כרטיס אשראי אותו דבר
                if (item.CustName.Equals(customer.CustName)
                    && item.CustPassWord.Equals(customer.CustPassWord))
                    return item;
            }
            return null;
        }



        //-החזרה האם הלקוח נימצא מחזירה קו לקוח
        public int HaveThisCustomer(string custName, string custPassWord)
        {
            //שליפת הנתונים מהDB
            List<DTOCustomer>l= iMapper.Map<List<Customer>, List<DTOCustomer>>(I.Get());
            foreach (var item in l)
            {
                //אם השם וסיסמא אותו דבר
                if (item.CustName.Equals(custName)
                    && item.CustPassWord.Equals(custPassWord))
                    return item.CustId;
            }
            return 0;

        }


    }
}
