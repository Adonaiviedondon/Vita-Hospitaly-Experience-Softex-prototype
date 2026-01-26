import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardCliente() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.TIPO !== "cliente") {
      navigate("/login/cliente");
    }
  }, [navigate]);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <h1>Área do Cliente</h1>

      <nav>
        <Link to="/cliente/reservar">Fazer Reserva</Link><br />
        <Link to="/cliente/historico">Histórico</Link><br />
        <Link to="/cliente/saldo">Adicionar Saldo</Link><br />
        <Link to="/cliente/entregar">Entregar Reserva</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
