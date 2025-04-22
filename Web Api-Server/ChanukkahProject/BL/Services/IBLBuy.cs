using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IBLBuy
    {
        //שמירת רשומה 
        //-כמו הדסה מקבל קוד לקוח וסל קניות
        public int SaveBuyList(List<DTOShoppingBasket> SB, int custId);

        //שמירת רשומה-לא השתמשתי
        //הסתבכתי איתה מתי להפעיל אותה
        //כל פעם שמכניסים מוצר לסל קניות גם אם לא לחצו עדיין על סיום קניה????י
        public int SaveBuy(DTOBuy sb);

        //פונקציה שמחזירה את כל הקניות של בנ"א מסוים 
        //הוספתי אותה בשביל דף פרטיים אישיים
        public List<DTOBuy> GetBuysByCustId(int custId);
    }
}
