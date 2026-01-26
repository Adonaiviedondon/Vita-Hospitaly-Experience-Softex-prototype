import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/home";
import LoginCliente from "./paginas/LoginCliente";
import LoginAdmin from "./paginas/LoginAdmin";
import RegistroCliente from "./paginas/RegistroCliente";
import RegistroAdmin from "./paginas/RegistroAdmin";
import TelaPrincipalCliente from "./paginas/DashboardCliente";
import TelaPrincipalAdmin from "./paginas/DashboardCliente";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login/cliente" element={<LoginCliente />} />
        <Route path="/login/admin" element={<LoginAdmin />} />

        {/* Registro */}
        <Route path="/register/cliente" element={<RegistroCliente />} />
        <Route path="/register/admin" element={<RegistroAdmin />} />

        {/* Dashboards */}
        <Route path="/cliente/dashboard" element={<TelaPrincipalCliente />} />
        <Route path="/admin/dashboard" element={<TelaPrincipalAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
