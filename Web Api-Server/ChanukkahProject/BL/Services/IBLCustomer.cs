using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IBLCustomer
    {
        public int HaveThisCustomer(string custName, string custPassWord);

        public DTOCustomer Have(DTOCustomer customer);//הוספתי מעצמי

        public bool AddCustomer(DTOCustomer customer);
    }
}
