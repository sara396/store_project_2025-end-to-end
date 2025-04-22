using BL.Services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChanukkahProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyController : ControllerBase
    {
        IBLBuy I;
        public BuyController(IBLBuy i)
        {
            I = i;
        }
        [HttpPut("addBuy")]
        public int SaveBuy(DTOBuy sb)       //מקבל קניה ושומר אותה
        {
            return I.SaveBuy(sb);
        }

        [HttpPut("addBuyListGetSal/{custId}")]       //מקבל את כל הסל קניות ועובר אחד אחד 
        public int addBuyList(List<DTOShoppingBasket> SB, int custId)
        {
            return I.SaveBuyList(SB, custId);
        }


        //פונקציה שמחזירה את כל הקניות של בנ"א מסוים 
        //הוספתי אותה בשביל דף פרטיים אישיים
        [HttpGet("getBuysByCustId/{custId}")]
        public List<DTOBuy> GetBuy(int custId)
        {
            return I.GetBuysByCustId(custId);
        }
    }
}
