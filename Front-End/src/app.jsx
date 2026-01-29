// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginCliente from "./pages/LoginCliente";
import LoginAdmin from "./pages/LoginAdmin";
import DashboardCliente from "./pages/DashboardCliente";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginCliente />} />
        <Route path="/login-admin" element={<LoginAdmin />} />

        {/* Dashboards */}
        <Route path="/dashboardCliente" element={<DashboardCliente />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
