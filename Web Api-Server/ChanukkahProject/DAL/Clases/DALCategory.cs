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
    public class DALCategory : IDALCategory
    {


        //הגדרת משתנה מסוג הDB

        GameStoreContext DB =new GameStoreContext();
        public bool Add(Category category)
        {
            try
            {
                DB.Categories.Add(category);   
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
                Category i= DB.Categories.FirstOrDefault(o=>o.CategoryId==id);
                DB.Categories.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
           
        }

        public List<Category> Get()
        {
            //return DB.Categories.Include(j => j.Games).ToList();
            return DB.Categories.ToList();

        }

        public bool Update(int id, Category category)
        {
            try
            {
                //DB.Categories.FirstOrDefault(o=>o.CategoryId==id).CategoryName=category.CategoryName;
                Category c = DB.Categories.FirstOrDefault(o => o.CategoryId == id);
                DB.Entry(c).CurrentValues.SetValues(category);

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
