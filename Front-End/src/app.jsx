import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import LoginCliente from "./paginas/LoginCliente";
import LoginAdmin from "./paginas/LoginAdmin";
import RegistroCliente from "./paginas/RegistroCliente";
import RegistroAdmin from "./paginas/RegistroAdmin";

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
