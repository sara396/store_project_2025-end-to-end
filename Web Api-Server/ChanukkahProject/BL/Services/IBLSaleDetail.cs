using DAL.models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IBLSaleDetail
    {
        //שמירת פרטי קניה

        public bool SaveSaleDetail(List<DTOShoppingBasket> SB, int codeC);

        //פונקציה שמחזירה את כל פרטי קניה של קניה מסוימת 
        //הוספתי אותה בשביל דף פרטיים אישיים
        public List<DTOSaleDetail> GetSaleDetailByCustId(int buyId);
    }
}
