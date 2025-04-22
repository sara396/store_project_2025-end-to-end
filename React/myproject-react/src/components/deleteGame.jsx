import { useEffect, useState } from "react"
import { deleteReactGames } from "../axios/Gameaxios";
import { useParams } from "react-router-dom";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const DeleteGame=()=>{

    //משתנים בשביל רענון העמוד אוטמט
     //משתנים לרענון
     const navigate = useNavigate();

    const [is,setis]=useState(false)

    let myparams=useParams();

    useEffect(()=>{
        save()
    },[])

const save=async()=>{
        if(is===false)
       {
        let y=(await deleteReactGames(myparams.id)).data
        if(y)
        {
            alert("delete game sucses")
            setis(true)
            // navigate('/gameManager')
            window.history.back(); // זה יחזיר את המשתמש לדף הקודם

        }
       }
       else            
       {
           alert("delete game not sucses")
       }
}
return <div></div>

}