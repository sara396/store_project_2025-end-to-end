import axios from "axios";

const url="https://localhost:7009/api/Category/";

//שליפת כל הקטגוריות
export const getAllReactCategorys=()=>{
    return axios.get(`${url}getAllCategorys`);
}
//שליפת קטגוריה לפי ID
export const getCategoryReactByCategoryId=(id)=>{
    return axios.get(`${url}getCategoryByCategoryId/${id}`)
}
//(מקבל קטגוריה ) ID עדכון קטגוריה לפי 
export const updateReactCaterory=(id,obj)=>{
    return axios.post(`${url}updateCategory/${id}`,obj)
}
//ID מחיקה קטגוריה לפי 
export const deleteReactCategory=(id)=>{
    return axios.delete(`${url}deleteCategory/${id}`)
}
//הוספת קטגוריה (מקבל קטגוריה)
export const addReactCategory=(obj)=>{
    return axios.put(`${url}addCategory`,obj)
}