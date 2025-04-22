import { useContext, useEffect, useState } from "react"
import { getAllReactGames } from "../axios/Gameaxios" 
import { Link, Outlet, useNavigate } from "react-router-dom";
import MYContex from "../MyContex";
export const Home = () => {

  const [listGame, setlistGame] = useState([])
  let url = "https://localhost:7009";

  //שליפת סל קניות
  const sal = useContext(MYContex).sal
  const setsal = useContext(MYContex).setsal

  const addToSal = ({
    "gameId": 0,
    "gameName": "string",
    "emount": 1,
    "gamePrice": 0,
    "totsalEmount": 0,  
  })

  //פונקציה שקוראת בעת טעינת הקומפוננת
  useEffect(() => {
    doSomething()
  }, [])
  
  const doSomething = async () => {   //סיכרונית כי היא קוראת לפונקציה סיכרונית
    //כדי שלא תיהיה לולאה אין סופית 
    if (listGame.length == 0) {
      //קבלת הנתונים מהשרת
      let y = (await getAllReactGames()).data;
      setlistGame(y)
    }
  }

  const funcaddToSal = (x) => {
    let s = sal.find(y => y.gameId == x.gameId)
    if (s == null) {
      addToSal.emount = 1
      addToSal.gameId = x.gameId
      addToSal.gameName = x.gameName
      addToSal.gameImg = x.gameImg
      addToSal.gamePrice = x.gamePrice
      addToSal.totsalEmount = x.gamePrice
      setsal([...sal, addToSal])   //update the sal
      alert("addToSal sucses")
    }
    else {
      alert("מעדכן פריט ניבחר")
      s.emount = s.emount + 1
      s.totsalEmount = s.totsalEmount + s.gamePrice
    }
  }



  return <div className="container"> <Outlet></Outlet>
    <div className="row g-3">
      {listGame.map((x, i) => (
        <div key={i} className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h4 className="card-title">{x.gameName}</h4>
              <p className="card-text">Price: {x.gamePrice}$</p>
              <div>
                {/* <Link to={`/home/show/${x.gameId}`} className="btn btn-outline-info w-100 mb-2">Information</Link> */}
                <Link to={`/home/moreProduct/${x.gameId}`} className="btn btn-outline-info w-100 mb-2">Information</Link>

                {/* //אני חייבת את הניתוב המלא ויש בנות שלא  */}
                {/* <Link to={`/moreProduct/${x.gameId}`} className="btn btn-outline-info w-100 mb-2">Information</Link> */}
                <button className="btn btn-outline-success w-100" onClick={() => { funcaddToSal(x) }}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* <Outlet></Outlet> */}
  </div>

}

