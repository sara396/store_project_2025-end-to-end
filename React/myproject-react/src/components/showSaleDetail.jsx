import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GetSaleDetailByCustId } from "../axios/SaleDetailaxios";

export const ShowSaleDetail = () => {

    let url = "https://localhost:7009";

    let myParams = useParams();
    let [SaleDetail, setSaleDetail] = useState([])

    useEffect(() => {
        debugger
        doSomthing()
    }, [myParams.buyId])

    const doSomthing = async () => {
        let y = (await GetSaleDetailByCustId(myParams.buyId)).data
        console.log("y hhhh", y)
        setSaleDetail(y)
    }

    return <div><h1>ShowSaleDetail</h1>
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
                {SaleDetail.map((x, i) => <tr key={i}>
                    <td>{x.saleCode}</td><td>{x.buyId}</td><td>{x.gameId}</td><td>{x.gameName}</td><td>{x.gamePrice}</td><td>{x.saleAmount}</td><td>{x.gamePrice * x.saleAmount}</td>
                    <td><img style={{ width: '20px' }} src={`https://localhost:7009/${x.gameImg}.jpg`} />
                    </td>

                    {/* <td>{`${url}/${x.gameImg}.jpg`}</td> */}


                </tr>
                )}
            </tbody>
        </table>
    </div>
}