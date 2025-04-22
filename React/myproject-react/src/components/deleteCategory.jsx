import { useEffect, useState } from "react";
import { deleteReactCategory } from "../axios/Categoryaxios";
import { useParams } from "react-router-dom";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const DeleteCategory=()=>{

    //משתנים בשביל רענון העמוד אוטמט
    const navigate = useNavigate();
    const location = useLocation();

    let myparams=useParams();  
    const [is,setis]=useState(false)


    useEffect(()=>{
        save()
        debugger
    },[])

   
    const save=async()=>{
            if(is===false)  //כגי שלא תיהיה לולאה אין סופית
           {
            let y=(await deleteReactCategory(myparams.id)).data
            if(y)
            {
                alert("delete category sucses")
                setis(true)
                navigate('/categoryManager')
            }
           }
           else            
           {
               alert("delete category not sucses")
           }
    }
    return <div></div>
}