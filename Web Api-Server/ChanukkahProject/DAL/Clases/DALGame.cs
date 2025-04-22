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

    public class DALGame : IDALGame
    {
        GameStoreContext DB=new GameStoreContext();
        public bool Add(Game obj)
        {
            try
            {
                DB.Games.Add(obj);
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
                Game obj = DB.Games.FirstOrDefault(o=>o.GameId == id);
                DB.Games.Remove(obj);
                DB.SaveChanges();
                return true;
            }
            catch 
            {
                return false;
            }
        }

        public List<Game> Get()
        {
            //return DB.Games.ToList();
            //למה צריך את זה הוא לא עושה לי שום הבדל!!!
            //לכלול גם את המפתחות הזרים
            //return DB.Games.Include(j => j.GameCategoryNavigation).Include(j=>j.SaleDetails).ToList();
            return DB.Games.Include(j => j.GameCategoryNavigation).ToList();
        }

        public bool Update(int id, Game obj)
        {
            try
            {
                //DB.Games.FirstOrDefault(o=>o.GameId==id).GameName=obj.GameName;
                //DB.Games.FirstOrDefault(o=>o.GameName==obj.GameName).GameCategory=obj.GameCategory;
                //DB.Games.FirstOrDefault(o => o.GameName == obj.GameName).GamePrice = obj.GamePrice;
                //DB.Games.FirstOrDefault(o => o.GameName == obj.GameName).GameImg = obj.GameImg;
                //DB.Games.FirstOrDefault(o => o.GameName == obj.GameName).GameAmount = obj.GameAmount;

                Game g=DB.Games.FirstOrDefault(o=>o.GameId==id);
                DB.Entry(g).CurrentValues.SetValues(obj);

                DB.SaveChanges ();
                return true;
            }
            catch 
            {
                return false;
            }
        }
    }
}
