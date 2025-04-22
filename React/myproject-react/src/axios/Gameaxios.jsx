import axios from "axios"

const url="https://localhost:7009/api/Game/"

//שליפת כל המוצרים
export const getAllReactGames=()=>{
    debugger
    return axios.get(`${url}getALlGames`);
}
// //שליפת מוצר לפי id
export const getGameReactById=(id)=>{
return axios.get(`${url}getByGameID/${id}`)
}
// //שליפת מוצר לפי קוד קטגוריה
export const getGameReactByCategoryId=(CategoryId)=>{
    return axios.get(`${url}getGameListByCodeCAtegory/${CategoryId}`)
}

// //עדכון מוצר
export const updateReactGames=(id,game)=>{
  return  axios.post(`${url}updateGame/${id}`,game)
}
// //הוספת מוצר
export const addReactGames=(game)=>{
   return axios.put(`${url}addGame`,game)
}
// //מחיקת מוצר
export const deleteReactGames=(id)=>{
   return axios.delete(`${url}deleteGame/${id}`)
}
//עדכוון מלאי
//מקבל קניה
export const updateEmount=(obj)=>{
  return axios.post(`${url}updateEmount`,obj)
}
