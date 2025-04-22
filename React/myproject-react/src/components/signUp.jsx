import { useState } from "react"
import { addCustomerReact } from "../axios/Customeraxios"
import { useNavigate } from "react-router-dom"

export const SignUp=()=>{
  const mynevigate = useNavigate()
  

    const[use,setuse]=useState({
        "custId": 0,
        "custName": "",
        "custPassWord": "",
        "custCreditDetails": ""
    })

    const save=async()=>{
      if( use.custName== ""||use.custPassWord==""||use.custCreditDetails=="")
      {
        alert("You have not entered the correct data entry again")
      }
      else
      {
          let y=(await addCustomerReact(use)).data
          debugger
          console.log("y",y)
          if(y)
          {
            alert("Your sign up for the system was successful")
            mynevigate("/home")   //ניתוב יזום
          }
          else
              alert("You did not sign up for a notation system. One of the details is incorrect. Try again")
          }
    }

return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">👤Sign Up</h3>
          <div className="mb-3">
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="custName">
              Customer Name
            </label>
            <input
              id="custName"
              className="form-control"
              type="text"
              placeholder="Enter customer name"
              onBlur={(e) => setuse({ ...use, custName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="custPassWord">
              Password
            </label>
            <input
              id="custPassWord"
              className="form-control"
              type="password"
              placeholder="Enter password"
              onBlur={(e) => setuse({ ...use, custPassWord: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="custCreditDetails">
              Credit Details
            </label>
            <input
              id="custCreditDetails"
              className="form-control"
              type="text"
              placeholder="Enter credit details"
              onBlur={(e) => setuse({ ...use, custCreditDetails: e.target.value })}
            />
          </div>
          <button
                className="btn btn-outline-primary w-100 mb-2"
            onClick={() => save()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );


}