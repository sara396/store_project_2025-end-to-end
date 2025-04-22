import axios from "axios";

const url="https://localhost:7009/api/Buy/";

 //פונקציה שמוסיפה רשומה לטבלת קניות מקבלת קניה להוספה
 // לא השתמשתי העדפתי לקבל סל
 export const saveBuy=(obj)=>{
    return axios.put(`${url}/addBuy`,obj)
 }

  //פונקציה שמוסיפה את כל הסל קניות לטבלת קניות 

  export const saveBuyGetAllSAl=(obj,custId)=>{
   return axios.put(`${url}addBuyListGetSal/${custId}`,obj,custId)
}

   //פונקציה שמחזירה את כל הקניות של בנ"א מסוים 
   //הוספתי אותה בשביל דף פרטיים אישיים
   export const GetBuys=(custId)=>{
      return axios.get(`${url}getBuysByCustId/${custId}`,custId)
   }


