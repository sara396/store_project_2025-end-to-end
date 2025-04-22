import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import { Menue } from './components/menu';
import { MyRouting } from './components/myrouting';
import { useState } from 'react';
import { MyProvider } from './MyContex';
function App() {

  const[curentUser,setcurentUser]=useState("no connect");//the name of the user
  const[passUser,setpassUser]=useState("000");//pass user
  const[isUser,setisUser]=useState(false)   //if the user is User  
  const[manager,setmanager]=useState(false)   //if the user is manager
  //בשביל הסל
  const[sal,setsal]=useState([])
  //בשביל לדעת כמה עלתה הקניה
  const[sum,setsum]=useState(0)//בשביל לדעת כמה עלתה בסוף הקניה 


  const store={
    curentUser:curentUser,
    setcurentUser:setcurentUser,
    manager:manager,
    setmanager:setmanager,
    isUser:isUser,
    setisUser:setisUser,
    sal:sal,
    setsal:setsal,
    passUser:passUser,
    setpassUser:setpassUser,
    sum:sum,
    setsum:setsum
  }
  return (
    <div >
      <MyProvider value={store}>
    <BrowserRouter>
    <Menue></Menue>
    <MyRouting></MyRouting>
    </BrowserRouter>
    </MyProvider>
    </div>
  );
}

export default App;
