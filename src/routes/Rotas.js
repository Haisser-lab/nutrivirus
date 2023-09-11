import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/Search";
import Detailed from "../Pages/Detailed/Detailed";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Sick from "../Pages/Sick/Sick";
import Diagnosis from "../Pages/Diagnosis/Diagnosis";

function Rotas(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} path="/"/>
            <Route element={<Register/>} path="/Cadastro"/>
            <Route element={<Home/>} path="/Home"/>
            <Route element={<Search/>} path="/Pesquisar"/>
            <Route element={<Detailed/>} path="/Detalhado"/>
            <Route element={<Sick/>} path="/Doente"/>
            <Route element={<Diagnosis/>} path="/Diagnostico"/>
        </Routes>
    </BrowserRouter>
    </>
    )
};

export default Rotas;