import { useEffect, useState } from "react";
import {deleteReactGames, getAllReactGames}from "../axios/Gameaxios"   //
import { Link, Outlet, useLocation, useNavigate} from "react-router-dom";

export const GameManager=()=>{
 const[listGame,setlistGame]=useState([])
  //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation()
 
    useEffect(()=>{
        doSomething()
    },[])
    
 const doSomething=async()=>{   //סיכרונית כי היא קוראת לפונקציה סיכרונית
    //כדי שלא תיהיה לולאה אין סופית 
    if(listGame.length==0)
    {
        //קבלת הנתונים מהשרת
         let y =( await getAllReactGames()).data;
        setlistGame(y)
    }
 }

 const deleteGame = async(id)=>{
     let y=(await deleteReactGames(id)).data
    
if(y){
  alert(`A game with a ${id} code has been successfully deleted!`)
  const previousPath = location.pathname; 
  navigate('/');
  setTimeout(() => { 
      navigate(previousPath); 
  }, 50);
}
else{
  alert("dont succes")
}
}

    
    let url="https://localhost:7009";
    return<div className="container mt-5">
        <div className="card-body">
         <table className="table">
            <thead>
                <tr>
                    <th>gameId</th>
                    <th> gameName</th>
                    <th> gameCategory</th>
                    <th>gamePrice</th>
                    <th>pic</th>
                    <th> gameAmount</th>
                    <th> delete</th>  
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
                 {listGame.map((x,i)=><tr key={i}>
                    <td>{x.gameId}</td>
                 <td>{x.gameName}</td>
                 <td>{x.gameCategory}</td>
                 <td>{x.gamePrice}</td>
                 <td><img width={"30px"} src={`${url}/${x.gameImg}.jpg`}></img></td>
                 <td>{x.gameAmount}</td>
                 <td>
                    {/* אם זה מנותב לקומפוננטה אחרת או לא מצליח להתרענן לבד */}
                    {/* <Link to={`/gameManager/deleteGame/${x.gameId}`} className="btn btn-outline-black w-100 mb-2">🗑️</Link> */}
                    <button onClick={() => deleteGame(x.gameId)} className="btn btn-outline-black w-100 mb-2">🗑️</button>
                    </td> 
                 <td>
                    <Link to={`/gameManager/updateGame`} className="btn btn-outline-black w-100 mb-2">🔄</Link>
                    </td>
                 </tr>)}
            </tbody>
        </table>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        
            <Link to={`/gameManager/addGame`} className="btn btn-outline-primary  mb-2">add new game</Link>
    </div>
    <Outlet></Outlet>
    </div></div>
}