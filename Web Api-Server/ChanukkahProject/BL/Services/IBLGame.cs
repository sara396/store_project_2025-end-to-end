using DAL.models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IBLGame
    {
        //שליפת כל המוצרים
        public List<DTOGame> GettAllItems();
         //שליפת משחק לפי קוד
         public DTOGame GettItemsByGameID(int id);
        //הוספה לרשימה
        public bool AddGame(DTOGame g);
         //עדכון משחק
         public bool UpdateGame(int gamaId, DTOGame ?g);
         //הסרת משחק
         public bool DeleteGame(int id);
         //שליפת משחקים לפי קטגוריה
         public List<DTOGame> GetGameListByCodeCAtegory(int c);


        //מעדכן כמות לאחר קניה 

        public bool saveEmount(List<DTOShoppingBasket> SB);
    }
}
