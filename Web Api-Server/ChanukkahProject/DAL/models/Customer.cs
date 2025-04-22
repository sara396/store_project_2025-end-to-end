using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Customer
    {
        public Customer()
        {
            Buys = new HashSet<Buy>();
        }

        public int CustId { get; set; }
        public string? CustName { get; set; }
        public string? CustPassWord { get; set; }
        public string? CustCreditDetails { get; set; }

        public virtual ICollection<Buy> Buys { get; set; }
    }
}
