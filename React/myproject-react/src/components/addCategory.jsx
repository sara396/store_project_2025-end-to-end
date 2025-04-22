import { useState } from "react"
import { addReactCategory } from "../axios/Categoryaxios";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const AddCategory = () => {

    //משתנים בשביל רענון העמוד אוטמט
    const navigate = useNavigate();
    const location = useLocation();

    const [mycategory, setmycategory] = useState({
        "categoryId": 0,
        "categoryName": ""
    });

    const save = async () => {
        let y = (await addReactCategory(mycategory)).data
        if (y) {
            alert("add category sucses")

            // בשביל רענון העמוד אוטמט
            const previousPath = location.pathname; 
            navigate('/');
            setTimeout(() => {
                navigate('/categoryManager')
            }, 0);
        }
        else
            alert("add category not sucses")
    }

    return <div style={{textAlign:"center"}}>
        <input className="form-control" type="text" placeholder="enter categoryName" onBlur={(e) => setmycategory({ ...mycategory, categoryName: e.target.value })}></input>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <br></br> <br></br>
            <button className="btn btn-primary" onClick={() => { save() }}>save  </button>
        </div>
    </div>
}