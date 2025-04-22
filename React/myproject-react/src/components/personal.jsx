import { useContext, useEffect, useState } from "react"
import { haveThisCustomerReact } from "../axios/Customeraxios"
import MYContex from "../MyContex"
import { GetBuys } from "../axios/Buyaxios"
import { Link, Outlet } from "react-router-dom"
export const Personal = () => {

    const passUser = useContext(MYContex).passUser
    const curentUser = useContext(MYContex).curentUser

    const [Buys, setBuys] = useState([
        {
            "buyId": 0,
            "custId": 0,
            "buyDaty": "2023-01-01T00:00:00",
            "buySum": 0
        }
    ])

    useEffect(() => {
        doSomething()
    }, [])

    const doSomething = async () => {
        let g
        let custId = (await haveThisCustomerReact(curentUser, passUser)).data
        let y = (await GetBuys(custId)).data
        if (y !== null) {
            setBuys(y)
        }
    }

    // return  <div className="container mt-5">
    //     <div className="card-body">
    //     <table className="table" style={{ textAlign: "center" }}>
    //         <thead>
    //             <tr>
    //                 <th>buyId</th>
    //                 <th> custId</th>
    //                 <th> buyDaty</th>
    //                 <th>buySum</th>
    //                 <th>more information</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {Buys.map((x, i) => <tr key={i}>
    //                 <td>{x.buyId}</td><td>{x.custId}</td><td>{x.buyDaty}</td><td>{x.buySum}</td>
    //                 {/* <td><Link to={`/personal/showSaleDetail/${x.buyId}`} className="btn btn-outline-dark mb-2">Information</Link></td> */}
    //                 <td><Link to={`/personal/showSaleDetaildWind/${x.buyId}`} className="btn btn-outline-dark mb-2">Information</Link></td>

    //             </tr>
    //             )}
    //         </tbody>
    //     </table>
    //     <Outlet></Outlet>

    // </div>
    // </div>


    return  <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-10">
        <table className="table table-bordered table-striped text-center">
                    <thead className="thead-dark">
                <tr>
                    <th>buyId</th>
                    <th> custId</th>
                    <th> buyDaty</th>
                    <th>buySum</th>
                    <th>more information</th>
                </tr>
            </thead>
            <tbody>
                {Buys.map((x, i) => <tr key={i}>
                    <td>{x.buyId}</td><td>{x.custId}</td><td>{x.buyDaty}</td><td>{x.buySum}</td>
                    {/* <td><Link to={`/personal/showSaleDetail/${x.buyId}`} className="btn btn-outline-dark mb-2">Information</Link></td> */}
                    <td><Link to={`/personal/showSaleDetaildWind/${x.buyId}`} className="btn btn-outline-dark mb-2">Information</Link></td>

                </tr>
                )}
            </tbody>
        </table>
        <Outlet></Outlet>

        </div>
        </div>
    </div>
}