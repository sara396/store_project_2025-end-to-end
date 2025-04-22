using DAL.models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IBLCategory
    {
        public List<DTOCategory> GetAllCategorys();
        public DTOCategory GetCategoryByCategoryId(int id);
        public bool AddCategory(DTOCategory category);
        public bool RemoveCategory(int id);
        public bool UpdateCategory(DTOCategory category,int id);
        
    }
}
