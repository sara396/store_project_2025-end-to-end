import axios from "axios";

const url="https://localhost:7009/api/SaleDetail/";

 // שומרת פרטי קניה מקבלת סל וקוד קניה
 export const saveSaleDetail=(obj,BuyId)=>{
    return axios.put(`${url}addSaveSaleDetail/${BuyId}`,obj,BuyId)

   }
    ////פונקציה שמחזירה את כל פרטי קניה של קניה מסוימת 
   //הוספתי אותה בשביל דף פרטיים אישיים

   export const GetSaleDetailByCustId=(CustId)=>{
      return axios.get(`${url}getSaleDetailByCustId/${CustId}`,CustId);
   
   }