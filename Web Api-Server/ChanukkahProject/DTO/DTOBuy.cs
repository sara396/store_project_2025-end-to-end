﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOBuy
    {
        public int BuyId { get; set; }
        public int? CustId { get; set; }
        public DateTime? BuyDaty { get; set; }
        public int? BuySum { get; set; }
    }
}
