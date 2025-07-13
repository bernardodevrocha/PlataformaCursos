import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../pages/Login";
import {Dashboard} from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { Curso } from "../pages/Curso"


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/curso" element={<Curso />} />
            </Routes>
        </BrowserRouter>
    )
}