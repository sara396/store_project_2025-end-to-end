import axios from "axios"

const url="https://localhost:7009/api/Customer/"

//בדיקה האם הלקוח נימצא - מחזיר כן או לא

export const haveThisCustomerReact=(custName,custPassWord)=>{
    return axios.get(`${url}haveThisCustomer/${custName}/${custPassWord}`,custName,custPassWord)
}

//בדיקה האם הלקוח נימצא - מחזיר את הלקוח
export const haveCustomerReact=(obj)=>{
    return axios.get(`${url}have`,obj)
}

//הוספת לקוח חדש
export const addCustomerReact=(obj)=>{
    return axios.put(`${url}addCustomer`,obj)
}