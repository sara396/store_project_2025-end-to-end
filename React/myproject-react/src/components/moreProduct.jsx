import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getGameReactById } from "../axios/Gameaxios"


export const MoreProduct = () => {

  let url = "https://localhost:7009";

  const mynevigate = useNavigate()
  let myParams = useParams();

  let [game, setGame] = useState(null);

  useEffect(() => { //פונקציה שקוראת בעת שינוי פרמטר שהקומפוננטה קבלה
    doSomething()
  }, [myParams.gameId]);


  const doSomething = async () => {
    //כדי שלא תיהיה לולאה אין סופית 
    if (game === null) {
      //קבלת הנתונים מהשרת
      let y = (await getGameReactById(myParams.gameId)).data;
      setGame(y)
    }
    else {
      if (game !== null && myParams.gameId !== game.gameId)   //useEffect היתי צריכה גם אותו וגם את 
      {
        setGame(null)
        //קבלת הנתונים מהשרת
        let y = (await getGameReactById(myParams.gameId)).data;
        setGame(y)
      }
    }

  }

  const close = () => {
    mynevigate('/home')
  }

  return <div>
    {game &&
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img src={`${url}/${game.gameImg}.jpg`} className="img-fluid rounded mb-3" alt="Product Image"></img>
            <h3 className="fw-bold">Product Name {game.gameName}</h3>
            <p className="text-reset fs-5">Price: ${game.gamePrice}</p>
            <p className="text-reset fs-7">Emoun:{game.gameAmount}</p>
            <button className="btn btn-primary" onClick={() => close()}>close</button>
          </div>
        </div>
      </div>}
    <br></br>
    <br></br>
  </div>

}