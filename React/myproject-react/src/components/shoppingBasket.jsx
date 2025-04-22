import { useContext } from "react"
import MYContex from "../MyContex"
import { useNavigate } from "react-router-dom"
import { saveBuyGetAllSAl } from "../axios/Buyaxios"
import { haveThisCustomerReact } from "../axios/Customeraxios"
import { saveSaleDetail } from "../axios/SaleDetailaxios"
import { updateEmount } from "../axios/Gameaxios"

import { Link, Outlet, useLocation } from "react-router-dom";

export const ShoppingBasket = () => {

    const sal = useContext(MYContex).sal
    const setsal = useContext(MYContex).setsal
    const passUser = useContext(MYContex).passUser
    const curentUser = useContext(MYContex).curentUser
    const sum = useContext(MYContex).sum
    const setsum = useContext(MYContex).setsum

    const mynevigate = useNavigate()
    const location = useLocation();

    const pluse = (x) => {
        let s = sal.find(y => y.gameId == x.gameId)
        // alert("עדכון הוספה")
        s.emount = s.emount + 1
        s.totsalEmount = s.totsalEmount + s.gamePrice

        // alert("מתעדכן רק אחרי שעוברים לעמוד אחר ואז חוזרים לאותו עמוד")
        const previousPath = location.pathname; // אחסון נתיב נוכחי
        mynevigate('/');// נווט לדף הבית
        //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
        setTimeout(() => { // אופציונלי לרענן את הדף
            // window.history.back(); // זה יחזיר את המשתמש לדף הקודם
            mynevigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(0)
        }, 0);
    }
    const minuse = (x) => {
        let s = sal.find(y => y.gameId == x.gameId)
        if (s.emount == 1)//delete
        {
            setsal(sal => sal.filter(y => y.gameId !== x.gameId));
        }
        else {
            s.emount = s.emount - 1
            s.totsalEmount = s.totsalEmount - s.gamePrice

            //פונקציה לרענון העמוד
            const previousPath = location.pathname; 
            mynevigate('/');
            setTimeout(() => {
                mynevigate(previousPath); 
            }, 0);
        }
    }

    const isUser = useContext(MYContex).isUser

    //בודקת האם יש לקוח או לא?
    const chekUser = () => {
        if (isUser == false) {
            alert("לא התחברת מועבר לעמוד התחברות")
            mynevigate("/login")   
        }
        else {
            //קריאה להפעלת שלושת הפונקציות לשמירה
            save()
            // בשביל שאני יוכל להדפיס בסוף כמה עלה לו כל הקניה
            let s=0;
            for (let index = 0; index < sal.length; index++) {
                s=s+ (sal[index]).totsalEmount  
            }
            setsum(s);

            mynevigate("/pay") 
        }

    }
    //הפעלת שלושת הפונקציות לשמירה
    const save = async () => {
        debugger
        let custId = (await haveThisCustomerReact(curentUser, passUser)).data
        let y = (await saveBuyGetAllSAl(sal, custId)).data
        if (y)
            {
                let p = (await saveSaleDetail(sal, y))
                let b=(await updateEmount(sal))
            }
        else
            alert("הקניה לא נשמרה")
    }


    // return  <div className="container mt-5">
    //     <div className="card-body">
    //     <table className="table">
    //         <thead>
    //             <tr>
    //                 <th>gameId </th>
    //                 <th> gameName</th>
    //                 <th>pictue</th>
    //                 <th> emount</th>
    //                 <th>gamePrice</th>
    //                 <th> totalPrice</th>
    //                 <th>plus</th>
    //                 <th>minos</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {sal.map((x, i) => <tr key={i}><td>{x.gameId}</td><td>{x.gameName}</td>
    //             <td><img style={{ width: '30px' }} src={`https://localhost:7009/${x.gameImg}.jpg`}  /></td>                
    //             <td>{x.emount}</td><td>{x.gamePrice}</td>
    //                 <td>{x.emount * x.gamePrice}</td>
    //                 <td><button className="btn btn-success btn-sm" onClick={() => pluse(x)}>+</button></td>
    //                 <td><button  className="btn btn-danger btn-sm" onClick={() => minuse(x)}>-</button></td>
    //             </tr>)}
    //         </tbody>
    //     </table>
    //     <button style={{ marginLeft: "40%" }} className="btn btn-outline-primary  mb-2" onClick={() => chekUser()}>לסיום קניה</button>
    // </div>   </div>

   
      

return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-10">
                <table className="table table-bordered table-striped text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>gameId</th>
                            <th>gameName</th>
                            <th>emount</th>
                            <th>gamePrice</th>
                            <th>totalPrice</th>
                            <th>plus</th>
                            <th>minus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sal.map((x, i) => (
                            <tr key={i}>
                                <td>{x.gameId}</td>
                                <td>{x.gameName}</td>
                                <td>{x.emount}</td>
                                <td>{x.gamePrice}</td>
                                <td>{x.emount * x.gamePrice}</td>
                                <td>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => pluse(x)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => minuse(x)}
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    <button style={{ marginLeft: "40%" }} className="btn btn-outline-primary  mb-2" onClick={() => chekUser()}>לסיום קניה</button>
            </div>
        </div>
    </div>
);


}