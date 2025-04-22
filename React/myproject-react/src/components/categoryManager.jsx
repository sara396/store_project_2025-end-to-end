import { useEffect, useState } from "react"
import { deleteReactCategory, getAllReactCategorys } from "../axios/Categoryaxios";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const CategoryManager = () => {
    const [listCategory, setlistCategory] = useState([])
      //משתנים לרענון
        const navigate = useNavigate()
        const location = useLocation()

    useEffect(() => {
        doSomething();
    }, [])

    const doSomething = async () => { //סיכרונית כי היא קוראת לפונקציה סיכרונית
        if (listCategory.length == 0)   //כדי שלא תיהיה לולאה אין סופית 
        {
            //קבלת הנתונים מהשרת
            let y = (await getAllReactCategorys()).data
            setlistCategory(y)
        }

    }
    const deleteCategory = async(id)=>{
         let y=(await deleteReactCategory(id)).data
        
    if(y){
        alert(`A game with a ${id} code has been successfully deleted!`)
        const previousPath = location.pathname; 
      navigate('/');
      setTimeout(() => { 
          navigate(previousPath); 
      }, 50);
    }
    else{
      alert("dont sucses")
    }
    }



    return <div className="container mt-5">
        <div className="card-body">
        <table className="table">
            <thead>
                <tr>
                    <th>categoryId</th>
                    <th>categoryName</th>
                    <th> delete</th>
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
                {listCategory.map((x, i) => <tr key={i}>
                    <td>{x.categoryId}</td>
                    <td>{x.categoryName}</td>
                    <td>
                                            {/* אם זה מנותב לקומפוננטה אחרת או לא מצליח להתרענן לבד */}
                        {/* <Link to={`/categoryManager/deleteCategory/${x.categoryId}`} className="btn btn-outline-black w-100 mb-2">🗑️</Link> */}
                        <button onClick={() => deleteCategory(x.categoryId)} className="btn btn-outline-black w-100 mb-2">🗑️</button>

                    </td>
                    <td>
                        <Link to={`/categoryManager/updateCategory`} cclassName="btn btn-outline-black w-100 mb-2">🔄</Link>
                    </td>
                </tr>)}
            </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to={`/categoryManager/addCategory`} className="btn btn-outline-primary  mb-2">add new Category</Link>
        </div>
        <Outlet></Outlet>
    </div> </div>
}