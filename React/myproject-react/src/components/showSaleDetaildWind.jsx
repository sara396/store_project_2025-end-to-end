import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GetSaleDetailByCustId } from "../axios/SaleDetailaxios";

export const ShowSaleDetaildWind=()=>{
    debugger
    let myParams=useParams();
    // const[SaleDetail,setSaleDetail]=useState([{
    //     "saleCode": 0,
    //     "buyId": 0,
    //     "gameId": 0,
    //     "saleAmount": 0
    // }])
let navigate=useNavigate()
    let[SaleDetail,setSaleDetail]=useState([])
    useEffect(()=>{
        debugger
        doSomthing()
    },[myParams.buyId])
    // useEffect(()=>{
    //     doSomthing()
    // },[])
    const doSomthing=async()=>{
        // if(SaleDetail.length===0)
        // {
            let y=(await GetSaleDetailByCustId(myParams.buyId)).data
            console.log("y hhhh",y)
            setSaleDetail(y)

        // }        
        // if(y!==null)
        // else
        // console.log("לא הצליח")
    }
        // פונקציה לסגירת החלון
        const handleClose = () => {
            navigate("/personal");
        };
    let url="https://localhost:7009";

 return <div style={{
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: '1000'
}}>
     <div style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '900px'
                }}>
      <table className="table">
                <thead>
                    <tr>
                        <th>saleCode</th>
                        <th> buyId</th>
                        <th> gameId</th>
                        <th>gameName</th>
                        <th>gamePrice</th>
                        <th>saleAmount</th>
                        <th>totalPrice</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>
                     {SaleDetail.map((x,i)=><tr key={i}>
                        <td>{x.saleCode}</td><td>{x.buyId}</td><td>{x.gameId}</td><td>{x.gameName}</td><td>{x.gamePrice}</td><td>{x.saleAmount}</td><td>{x.gamePrice*x.saleAmount}</td>
                        <td><img style={{ width: 'auto',height:'100px'}} src={`https://localhost:7009/${x.gameImg}.jpg`}/>
                        </td>
                        
                        {/* <td>{`${url}/${x.gameImg}.jpg`}</td> */}

                        
                     </tr>
                    )}
                </tbody>
            </table>
            <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">חזור</button>

 </div>  
 </div> 
}