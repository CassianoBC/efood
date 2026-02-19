import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
    )
}
