using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALBuy
    {
        public List<Buy> Get();
        public bool Add(Buy obj);
        public bool Update(int id, Buy obj);
        public bool Delete(int id);
    }
}
