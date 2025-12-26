import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/home.jsx";
import LoginCliente from "./paginas/loginCliente.jsx";
import LoginAdmin from "./paginas/LoginAdmin.jsx";
import RegistroCliente from "./paginas/RegistroCliente.jsx";
import RegistroAdmin from "./paginas/RegistroAdmin.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login/cliente" element={<LoginCliente />} />
        <Route path="/login/admin" element={<LoginAdmin />} />

        <Route path="/register/cliente" element={<RegistroCliente />} />
        <Route path="/register/admin" element={<RegistroAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
