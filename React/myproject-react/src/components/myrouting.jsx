import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Login } from "./login"
import { MoreProduct } from "./moreProduct"
import { GameManager } from "./gameManager"
import { AddGame } from "./addGame"
import { UpdateGame } from "./updateGame"
import { DeleteGame } from "./deleteGame"
import { CategoryManager } from "./categoryManager"
import { AddCategory } from "./addCategory"
import { UpdateCategory } from "./updateCategory"
import { DeleteCategory } from "./deleteCategory"
import { SignUp } from "./signUp"
import { ShoppingBasket } from "./shoppingBasket"
import { Personal } from "./personal"
import { ShowSaleDetail } from "./showSaleDetail"
import { End } from "./end"
import { ShowGameDetails } from "./showGameDetailesWind"
import { Pay } from "./pay"
import { ShowSaleDetaildWind } from "./showSaleDetaildWind"

export const MyRouting=()=>{
    return <div>
        <Routes>
        <Route path="/" element={<Home></Home>}>
            <Route path="moreProduct/:gameId" element={<MoreProduct></MoreProduct>}></Route>
            <Route path="show/:id" element={<ShowGameDetails></ShowGameDetails>}></Route>

        </Route>
        
            <Route path="home" element={<Home></Home>}>
            <Route path="show/:id" element={<ShowGameDetails></ShowGameDetails>}></Route>

                <Route path="moreProduct/:gameId" element={<MoreProduct></MoreProduct>}></Route>
            </Route>

            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signUp" element={<SignUp></SignUp>}></Route>
            <Route path="shoppingBasket" element={<ShoppingBasket></ShoppingBasket>}></Route> 

            <Route path="personal" element={<Personal></Personal>}>
                <Route path="showSaleDetail/:buyId" element={<ShowSaleDetail></ShowSaleDetail>}></Route>
                <Route path="showSaleDetaildWind/:buyId" element={<ShowSaleDetaildWind></ShowSaleDetaildWind>}></Route>

            </Route>
            
            <Route path="gameManager" element={<GameManager></GameManager>}>
            {/* child of GameManager*/}
                <Route path="addGame" element={<AddGame></AddGame>}></Route>
                <Route path="updateGame" element={<UpdateGame></UpdateGame>}></Route>
                <Route path="deleteGame/:id" element={<DeleteGame></DeleteGame>}></Route>
             </Route>

             <Route path="categoryManager" element={<CategoryManager></CategoryManager>}>
              {/* child of CategoryManager*/}
                <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
                <Route path="updateCategory" element={<UpdateCategory></UpdateCategory>}></Route>
                <Route path="deleteCategory/:id" element={<DeleteCategory></DeleteCategory>}></Route>
             </Route>
             <Route path="end" element={<End></End>}></Route>
                <Route path="pay" element={<Pay></Pay>}></Route>

        </Routes>

    </div>
}