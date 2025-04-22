using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALGame
    {
        public List<Game> Get();
        public bool Add(Game obj);
        public bool Update(int id, Game obj);
        public bool Delete(int id);
    }
}
