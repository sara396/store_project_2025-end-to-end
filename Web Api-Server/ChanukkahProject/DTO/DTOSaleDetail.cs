using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOSaleDetail
    {
        public int SaleCode { get; set; }
        public int? BuyId { get; set; }
        public int? GameId { get; set; }
        public int? SaleAmount { get; set; }

        public int? GamePrice { get; set; }
        public string? GameName { get; set; }
        public string? GameImg { get; set; }


    }
}
