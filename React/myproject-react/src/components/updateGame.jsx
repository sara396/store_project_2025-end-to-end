import { useEffect, useState } from "react";
import { updateReactGames } from "../axios/Gameaxios";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAllReactCategorys } from "../axios/Categoryaxios";


export const UpdateGame = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [myGame, setmygame] = useState({
        "gameId": 0,
        "gameName": "",
        "gameCategory": 1,
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

        let y = (await updateReactGames(myGame.gameId, myGame)).data;

        console.log("y", y)
        if (y) {
            
            //לרענון הדף
            const previousPath = location.pathname; 
            navigate('/');
            setTimeout(() => {
                navigate('/gameManager')
            }, 50);
        }
        else{
            alert("no update")
        } 
    }
    catch (error) {
            alert("didnt enter all the parameters you must:gameName,gameCategory")
        }
    }

    return <div style={{textAlign:"center"}}>
        <br></br>
        <h3>update game</h3>
        <input className="form-control" type={'number'} placeholder={'enter gameId'} onBlur={(e) => setmygame({ ...myGame, gameId: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder={'enter gameName'} onBlur={(e) => setmygame({ ...myGame, gameName: e.target.value })}></input>
        {/* <input className="input" type={'number'} placeholder={'enter gameCategory'} onBlur={(e) => setmygame({ ...myGame, gameCategory: e.target.value })}></input> */}
        <select  
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