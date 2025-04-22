import { useState } from "react";
import { updateReactCaterory } from "../axios/Categoryaxios";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const UpdateCategory=()=>{
        
    const navigate = useNavigate();
    const location = useLocation();

        const[mycategory,setmycategory]=useState({
              "categoryId": 0,
            "categoryName": ""
        });
        
    
    
        const save=async()=>{
            try {
                
            let y=(await updateReactCaterory(mycategory.categoryId,mycategory)).data
            console.log("y",y)
            if(y)
                {
                    //לרענון עמוד
                    const previousPath = location.pathname; 
                    navigate('/');
                    setTimeout(() => { 
                        navigate('/categoryManager')
                    }, 50);

                }
            else
                alert("no")
            } catch (error){
                alert("didnt enter all the parameters you must:categoryID,categoryName")

            }
        }
    
        return <div style={{textAlign:"center"}}>
            <input className="form-control" type="number" placeholder="enter categoryId" onBlur={(e)=>setmycategory({...mycategory,categoryId:e.target.value})}></input>
            <input className="form-control" type="text" placeholder="enter categoryName" onBlur={(e)=>setmycategory({...mycategory,categoryName:e.target.value})}></input>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
            <br></br> 
            <br></br>
            <button className="btn btn-primary" onClick={()=>{save()}}>save  </button>
            </div>
        </div>
}