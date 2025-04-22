import { useContext, useState } from "react";
import MYContex from "../MyContex";

export const End=()=>{
     
 const sal=useContext(MYContex).sal //שליפת סל קניות
 const sum=useContext(MYContex).sum //המשתנה שסכם כמה הקניה עלתה 
                                    //יכלתי לעשות את זה בהעברת הפרמטר - לא היה לי  כח לשנות
    return <div style={{textAlign:"center"}}>
        <br></br>
        <h1>קנייתך בוצע בהצלחה </h1>
        <h2>סכום לקניה:{sum}</h2>
        <h3>תודה שקנית/ה אצלנו מקווים שנהנת/ה</h3>

        
    </div>


}