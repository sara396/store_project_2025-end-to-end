using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOGame
    {
        public int GameId { get; set; }
        public string? GameName { get; set; }
        public int? GameCategory { get; set; }
        public int? GamePrice { get; set; }
        public string? GameImg { get; set; }
        public int? GameAmount { get; set; }
    }
}
