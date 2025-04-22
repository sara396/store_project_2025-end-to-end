using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALSaleDetail
    {
        public List<SaleDetail> Get();
        public bool Add(SaleDetail obj);
        public bool Update(int id, SaleDetail obj);
        public bool Delete(int id);
    }
}
