using AutoMapper;
using BL.Services;
using DAL.models;
using DAL.Services;
using DTO;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Clases
{
    public class BLGame : IBLGame
    {
        IDALGame I;
        IMapper iMapper;
        
        //בנאי
        public BLGame(IDALGame I)
        {
            this.I = I;
            var config=new MapperConfiguration (cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        //תוסיף משחק
        public bool AddGame(DTOGame gDTO)
        {
            Game g=iMapper.Map<DTOGame,Game>(gDTO);
            Console.WriteLine("in bl ");
            return I.Add(g);
        }

        //תמחק משחק
        public bool DeleteGame(int id)
        {
            return I.Delete(id);
        }

        //החזרת כל המסמכים לפי קטגוריה מסוימת
        public List<DTOGame> GetGameListByCodeCAtegory(int c)
        {
            List<DTOGame> dTOGames = new List<DTOGame>();
            List<DTOGame> l = iMapper.Map<List<Game>, List<DTOGame>>(I.Get());//שליפת כל המוצרים לסוג DTO
            foreach (var item in l)
            {
                if (item.GameCategory== c)
                    dTOGames.Add(item);
            }
            return dTOGames;
        }

        //קבלת כל המוצרים
        public List<DTOGame> GettAllItems()
        {

            return iMapper.Map<List<Game>, List<DTOGame>>(I.Get());//שליפת כל המוצרים לסוג DTO
        }

        //קבלת המוצר לפי ID מסוים
        public DTOGame GettItemsByGameID(int id)
        {
            List<DTOGame> l = iMapper.Map<List<Game>, List<DTOGame>>(I.Get());//שליפת כל המוצרים לסוג DTO
            foreach (var item in l)
            {
                if(item.GameId==id)
                    return item;
            }
            return null;
        }

        //תעדכן משחק
        public bool UpdateGame(int id, DTOGame ?gDTO)
        {
           Game g=iMapper.Map<DTOGame,Game>(gDTO);
            return I.Update(id, g);
        }




      //  מעדכן כמות לאחר קניה
        public bool saveEmount(List<DTOShoppingBasket> SB)
        {
            try
            {
                foreach (var item in SB)                                             //update all games
                {
                    Game g = new Game();
                    g = iMapper.Map<DTOGame, Game>(GettItemsByGameID(item.GameId));    //get game by id
                    g.GameAmount = g.GameAmount - item.Emount;
                    I.Update(item.GameId, g);
                }
                return true;
            }
            catch
            {
                return false;
            }

        }
    }
}
