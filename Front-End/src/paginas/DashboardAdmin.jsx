import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  const user = userStorage ? JSON.parse(userStorage) : null;

  useEffect(() => {
    if (!user || !token) {
      navigate("/login-admin", { replace: true });
      return;
    }

    if (user.tipoUsuario !== "ADMIN") {
      navigate("/login-admin", { replace: true });
    }
  }, [navigate, user, token]);

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login-admin", { replace: true });
  }

  if (!user) return null;

  return (
    <div>
      <h1>Bem-vindo(a), {user.login}</h1>

      <nav>
        <Link to="/admin/lugares">Adicionar Lugares</Link><br />
        <Link to="/admin/reservas">Ver Reservas</Link><br />
        <Link to="/admin/historico">Histórico Geral</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
