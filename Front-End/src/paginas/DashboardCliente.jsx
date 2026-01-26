import { Link, useNavigate } from "react-router-dom";

export default function DashboardCliente() {
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
        <Link to="/cliente/reservar">Fazer Reserva</Link><br/>
        <Link to="/cliente/historico">Histórico</Link><br/>
        <Link to="/cliente/saldo">Adicionar Saldo</Link><br/>
        <Link to="/cliente/entregar">Entregar Reserva</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}