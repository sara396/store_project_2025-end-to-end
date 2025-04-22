using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALCustomer
    {
        public List<Customer> Get();
        public bool Add(Customer obj);
        public bool Update(int id, Customer obj);
        public bool Delete(int id);
    }
}
