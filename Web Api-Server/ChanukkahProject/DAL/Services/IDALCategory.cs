using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALCategory
    {
        public List<Category> Get();
        public bool Add(Category obj);
        public bool Update(int id, Category obj);
        public bool Delete(int id);
    }
}
