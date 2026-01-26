import { Link, useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <h1>Área do Administrador</h1>

      <nav>
        <Link to="/admin/lugares">Adicionar Lugares</Link><br/>
        <Link to="/admin/reservas">Ver Reservas</Link><br/>
        <Link to="/admin/historico">Histórico Geral</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}