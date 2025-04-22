using BL.Services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChanukkahProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        IBLCustomer I;
        public CustomerController(IBLCustomer I) { this.I = I; }

        //שיניתי שזה יחזיר את הקוד במקום רק נכון או לא נכון 
        //בשביל פונקציה ביצוע קניה
        [HttpGet("HaveThisCustomer/{custName}/{custPassWord}")]   ////  בדיקה האם הלקוח נימצא - מחזיר את הקוד  של הלקוח
        public int HaveThisCustomer(string custName, string custPassWord)
        {
            return I.HaveThisCustomer(custName, custPassWord);
        }
        //אני עשיתי אותו אבל לא השתמשתית בו בכלל

        [HttpGet("Have")]                       ////בדיקה האם הלקוח נימצא - מחזיר את הלקוח

        public DTOCustomer Have([FromQuery] DTOCustomer c)//למה זה עבד רק עם [FromQuery]
        {
            return I.Have(c);
        }

        [HttpPut("addCustomer")]
        public bool add(DTOCustomer c)
        {
            return I.AddCustomer(c);
        }
    }
}
