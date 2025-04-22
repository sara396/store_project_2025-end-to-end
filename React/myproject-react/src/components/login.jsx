import { useContext, useState } from "react"
import {  useNavigate } from "react-router-dom";
import MYContex from "../MyContex";
import { haveThisCustomerReact } from "../axios/Customeraxios";


export const Login = () => {
  const [use, setuse] = useState();

  const mynevigate = useNavigate()

  //removable from context member
  const manager = useContext(MYContex).manager
  const setmanager = useContext(MYContex).setmanager
  const curentUser = useContext(MYContex).curentUser
  const setcurentUser = useContext(MYContex).setcurentUser
  const isUser = useContext(MYContex).isUser
  const setisUser = useContext(MYContex).setisUser
  const setpassUser = useContext(MYContex).setpassUser
  const passUser = useContext(MYContex).passUser

  const chekUser = async () => {
    debugger
    try {
      if (use.name == undefined || use.pass == undefined || use.name == "" || use.pass == "") {
        alert("you didnt enter corect data please enter again")
      }
      else  //is not null
      {


        if (use.name == "m" && use.pass == 1)  //if is the manager
        {
          debugger
          alert("welcom manager")
          setmanager(true)
          setcurentUser("manager");
          setpassUser("1")
          setisUser(false)
          mynevigate("/gameManager")
        }
        else            //if isnt' manager
        {
          //funcw from axsios:chek if have this castamer
          let y = (await haveThisCustomerReact(use.name, use.pass)).data
          console.log("y", y)
          if (y != 0) {
            debugger
            alert(`  welcome : ${use.name}!!!`)
            // alert("have this Customer")
            setisUser(true)
            setcurentUser(use.name)
            setpassUser(use.pass)
            setmanager(false)
            debugger
            window.history.back(); // זה יחזיר את המשתמש לדף הקודם
              // mynevigate("/home")   //ניתוב יזום

          }
          else    //not have this customer:go do signUp
          {
            alert("no have this Customer")
            setisUser(false)
            setcurentUser("no connect")
            setmanager(false)
            alert("You're being transferred to the signUp page")
            mynevigate("/signUp")   //ניתוב יזום
          }

        }
      }
    }
    catch  (error) {
      alert("you didnt enter corect data please enter again")
    }
  }


  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">🔑Login</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="form-control"
              type="text"
              placeholder="Enter your username"
              onBlur={(e) => setuse({ ...use, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-control"
              type="password"
              placeholder="Enter your password"
              onBlur={(e) => setuse({ ...use, pass: e.target.value })}
            />
          </div>
          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={() => chekUser()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

}