import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/Search";
import Detailed from "../Pages/Detailed/Detailed";

function Rotas(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} path="/"/>
            <Route element={<Search/>} path="/Pesquisar"/>
            <Route element={<Detailed/>} path="/Detalhado"/>
        </Routes>
    </BrowserRouter>
    </>
    )
};

export default Rotas;