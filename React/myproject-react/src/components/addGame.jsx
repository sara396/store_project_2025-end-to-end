// import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { addReactGames } from "../axios/Gameaxios";
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllReactCategorys } from "../axios/Categoryaxios";
export const AddGame = () => {

    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();
    
    //func to add product
    const [myGame, setmygame] = useState({
        "gameId": 0,
        "gameName": "",
        "gameCategory": 0,
        "gamePrice": 0,
        "gameImg": "",
        "gameAmount": 0
    });

    const [listCategory, setlistCategory] = useState([])

    useEffect(() => {
        doSomething();
    }, [])
    
    const doSomething = async () => { //סיכרונית כי היא קוראת לפונקציה סיכרונית
        if (listCategory.length == 0)   //כדי שלא תיהיה לולאה אין סופית 
        {
            //קבלת הנתונים מהשרת
            let y = (await getAllReactCategorys()).data
            setlistCategory(y)
        }

    }
      
    const save = async () => {
        try {
            if(myGame.gamePrice=="")
                myGame.gamePrice=0;
            if(myGame.gameAmount=="")
                myGame.gameAmount=0;
            setmygame(myGame)

            let y = (await addReactGames(myGame)).data;
        if (y) {
            alert("add game sucses")

            // בשביל רענון העמוד אוטמט
            const previousPath = location.pathname; 
            navigate('/');
            setTimeout(() => { 
                navigate('/gameManager')
            }, 0);
        }
        else
            alert("add game not sucses")

        } catch (error) {
            alert("didnt enter all the parameters you must:gameName,gameCategory")
        }
        
    }
    return <div style={{ textAlign: "center" }}>
        <br></br>
        <input className="form-control" type={'text'} placeholder={'enter gameName'} onBlur={(e) => setmygame({ ...myGame, gameName: e.target.value })}></input>
        <select  placeholder={'enter gameCategory'} 
                className="form-select" 
                onBlur={(e) => setmygame({ ...myGame, gameCategory: e.target.value })}>
                {listCategory.map((e) => (
                    <option key={e.categoryId} value={e.categoryId}>
                        {e.categoryId} 
                    </option>
                ))}
            </select>

        <input className="form-control" type={'number'} placeholder={'enter gamePrice'} onBlur={(e) => setmygame({ ...myGame, gamePrice: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder={'enter gameImg'} onBlur={(e) => setmygame({ ...myGame, gameImg: e.target.value })}></input>
        <input className="form-control" type={'number'} placeholder={'enter gameAmount'} onBlur={(e) => setmygame({ ...myGame, gameAmount: e.target.value })}></input>
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={() => { save() }}>save  </button>

        <br></br>

    </div>

}