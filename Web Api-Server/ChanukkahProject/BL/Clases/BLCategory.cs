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
    public class BLCategory : IBLCategory
    {
        IDALCategory I;
        IMapper iMapper;
        public BLCategory(IDALCategory I)
        {
            this.I = I;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }
        public bool AddCategory(DTOCategory category)
        {
            Category c = iMapper.Map<DTOCategory, Category>(category);
            return I.Add(c);
        }

        public List<DTOCategory> GetAllCategorys()
        {
            return iMapper.Map< List<Category>,List<DTOCategory>>(I.Get());
        }

        public DTOCategory GetCategoryByCategoryId(int id)
        {
            List < DTOCategory > listDTO= iMapper.Map<List<Category>, List<DTOCategory>>(I.Get());
            foreach (var item in listDTO)
            {
                if(item.CategoryId==id)
                    return item;
            }
            return null;
        }

        public bool RemoveCategory(int id)
        {
            return I.Delete(id);
        }

        public bool UpdateCategory(DTOCategory category, int id)
        {
            Category c =iMapper.Map< DTOCategory,Category >(category);
            return I.Update(id,c);
        }
    }
}
