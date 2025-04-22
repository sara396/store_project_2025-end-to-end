
import { Link } from "react-router-dom"

export const Pay=()=>{
    console.log("in pay")
    return<div>
    <br></br>
    <input className="form-control" type="txt" placeholder="munber credit card" />
    <br></br>
    <input className="form-control" type="date" placeholder="expirationDate" />
    <br></br>
    <input className="form-control" type="txt" placeholder="cvv"/>
    <br></br>
    <Link to={`/end`} className="btn btn-outline-primary  mb-2">אישור</Link>
    </div>
}