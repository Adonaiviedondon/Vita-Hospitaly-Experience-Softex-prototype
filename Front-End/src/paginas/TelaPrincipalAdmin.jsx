import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.TIPO !== "admin") {
      navigate("/login/admin");
    }
  }, [navigate]);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <h1>Área do Administrador</h1>

      <nav>
        <Link to="/admin/lugares">Gerenciar Lugares</Link><br />
        <Link to="/admin/reservas">Reservas</Link><br />
        <Link to="/admin/clientes">Clientes</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
