import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/1-Autenticacao/login";
import Registro from "./Paginas/1-Autenticação/registro";

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

