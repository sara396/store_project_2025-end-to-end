using BL.Services;
using DAL.models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChanukkahProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        IBLCategory I;
        public CategoryController(IBLCategory I) 
        { 
            this.I = I; 
        }

        [HttpGet("GetAllCategorys")]
        public List<DTOCategory> getAll()
        {
            return I.GetAllCategorys();
        }

        [HttpGet("GetCategoryByCategoryId/{id}")]
        public DTOCategory get(int id)
        {
            return I.GetCategoryByCategoryId(id);
        }
        [HttpPost("UpdateCategory/{id}")]
        public bool update(DTOCategory category,int id) {
            return I.UpdateCategory(category,id);
        }
        [HttpDelete("DeleteCategory/{id}")]
        public bool delete(int id)
        {
            return I.RemoveCategory(id);
        }
        [HttpPut("AddCategory")]
        public bool add(DTOCategory category) { 
            return I.AddCategory(category);
        }

        //כשרוצים להוסיף, להוסיף אותו ולמחוק אותו 
          //"categoryId": 0,
          // "categoryName": "ChildrenBooks"
        


    }
}
