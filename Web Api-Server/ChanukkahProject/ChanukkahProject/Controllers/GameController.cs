using AutoMapper;
using BL.Services;
using DAL.models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ChanukkahProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IBLGame I;
        public GameController(IBLGame game)
        {
            I= game;
        }

        [HttpGet("getALlGames")]
        public List<DTOGame> getAll()
        {
            return I.GettAllItems();
        }
        [HttpGet("getByGameID/{id}")]
        public DTOGame get(int id)
        {
            return I.GettItemsByGameID(id);
        }

        [HttpGet("GetGameListByCodeCAtegory")]
        public List<DTOGame> GetGamesByCodeCAtegory(int c)
        {
            return I.GetGameListByCodeCAtegory(c);
        }

        [HttpPost("updateGame/{id}")]
        public bool update(int id, DTOGame gDTO)
        {
            return I.UpdateGame(id, gDTO);
        }

        [HttpDelete("deleteGame/{id}")]
        public bool delete(int id)
        {
            return I.DeleteGame(id);
        }
        [HttpPut("addGame")]
        public bool add(DTOGame game)
        {

            Console.WriteLine("in control");
            return I.AddGame(game);
        }

        //עדכון מלאי
        [HttpPost("updateEmount")]
        public bool updateEmountt(List<DTOShoppingBasket> SB)
        {
            return I.saveEmount(SB);
        }


    }
}
