import { useContext, useState } from "react"
import MYContex from "../MyContex";
import { NavLink } from "react-router-dom"
import { MyRouting } from "./myrouting";
export const Menue = () => {

  const manager = useContext(MYContex).manager
  const isUser = useContext(MYContex).isUser
  const curentUser = useContext(MYContex).curentUser

  return <div><ul className="nav nav-tabs">

<li style={{marginLeft: '0px'}} className="nav-item user-info">
      <nav className="nav-link" style={{ color: "red" }}>user:  {curentUser}</nav>
    </li>
    <li style={{display: 'flex', alignItems: 'center',marginLeft: '20%'}} className="nav-item">
      <NavLink className="nav-link" to={'home'}>🏠Home</NavLink>
    </li>
    <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
      <NavLink className="nav-link" to={'login'}>🔑Log in </NavLink>
    </li>
    <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
      <NavLink className="nav-link" to={'signUp'}>👤SignUp</NavLink>
    </li>

    {isUser  && <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
      <NavLink className="nav-link" to={'personal'}>❤️personal</NavLink>
    </li>}

    <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
    <NavLink className="nav-link" to={'shoppingBasket'}>🛒Shopping cart</NavLink>
    </li>

    {manager && <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
      <NavLink className="nav-link" to={'gameManager'}> ✏️List game</NavLink>
    </li>}

    {manager && <li style={{display: 'flex', alignItems: 'center'}} className="nav-item">
      <NavLink className="nav-link" to={'categoryManager'}> ✏️List category</NavLink>
    </li>}

    {/* <li style={{display: 'flex',
  alignItems: 'center', 
  marginRight: '0px'}} 
  className="nav-item user-info">
      <nav className="nav-link" style={{ color: "red" }}>user:  {curentUser}</nav>
    </li> */}

 <li className="nav-item user-info">
    <img style={{width:'50px'}} src={` https://localhost:7009/nameStore.jpg`}></img>
        </li>s
   

  </ul>

  </div>
}