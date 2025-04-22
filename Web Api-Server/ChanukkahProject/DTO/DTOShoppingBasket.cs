using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public partial class DTOShoppingBasket
    {
        public DTOShoppingBasket()
        {
            //TotsalEmount = Emount* GamePrice;
        }


        public virtual int GameId { get; set; }//קוד משחק 
        public virtual string? GameName { get; set; }//שם משחק 

        public int Emount { get; set; }//כמות מהמוצר

        public virtual int GamePrice { get; set; }//מחיר משחק
        public int? TotsalEmount { get; set; }//מחיר סופי

        //public virtual Game? Game { get; set; }//משתנה מסוג משחק  
        //לעשות משנה נסוג משחק או את כל מה שאני עשיתי

    }
}
