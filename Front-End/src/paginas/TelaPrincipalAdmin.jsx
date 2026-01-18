import { Link, useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/", {replace: true})
  }

  return (
    <div>
      <h1>Bem-vindo(a), {user?.nome}</h1>

      <nav>
        <Link to="/admin/lugares">Adicionar Lugares</Link><br/>
        <Link to="/admin/reservas">Ver Reservas</Link><br/>
        <Link to="/admin/historico">Histórico Geral</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}