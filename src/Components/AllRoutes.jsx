import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Chicken from "../Pages/Chicken";



export default function AllRoutes(){

    return <>
    <Routes>
        <Route path={'/'} element={<Categories/>}></Route>
        <Route path={'/categories/:id'} element={<Chicken/>}></Route>
    </Routes>
    </>
}