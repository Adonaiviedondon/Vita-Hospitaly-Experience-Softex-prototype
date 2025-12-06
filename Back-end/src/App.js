import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";

export default function App(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Registro />} />
      </Routes>
    </BrowserRouter>

    );
}

