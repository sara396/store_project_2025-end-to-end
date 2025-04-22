using BL.Services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChanukkahProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleDetailController : ControllerBase
    {
        IBLSaleDetail I;
        public SaleDetailController(IBLSaleDetail I)
        {
            this.I = I;   
        }
        [HttpPut("addSaveSaleDetail/{BuyId}")]
        public bool SaveSaleDetail(List<DTOShoppingBasket> SB, int BuyId)
        {
            return I.SaveSaleDetail(SB, BuyId);
        }

        //פונקציה שמחזירה את כל פרטי קניה של קניה מסוימת 
        //הוספתי אותה בשביל דף פרטיים אישיים
        [HttpGet("GetSaleDetailByCustId/{buyId}")]
        public List<DTOSaleDetail> GetSaleDetailByCustId(int buyId)
        {
            return I.GetSaleDetailByCustId(buyId);
        }
    }
}
