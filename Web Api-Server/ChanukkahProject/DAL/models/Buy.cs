using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Buy
    {
        public Buy()
        {
            SaleDetails = new HashSet<SaleDetail>();
        }

        public int BuyId { get; set; }
        public int? CustId { get; set; }
        public DateTime? BuyDaty { get; set; }
        public int? BuySum { get; set; }

        public virtual Customer? Cust { get; set; }
        public virtual ICollection<SaleDetail> SaleDetails { get; set; }
    }
}
