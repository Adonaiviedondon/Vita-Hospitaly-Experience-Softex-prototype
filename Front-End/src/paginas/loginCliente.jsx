import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../servicos/authservicos";

export default function LoginCliente() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await authServicos.login({ usuario, senha });

      if (!data?.user) {
        setError("Usuário ou senha inválidos");
        return;
      }

      if (data.user.TIPO !== "cliente") {
        setError("Acesso permitido apenas para clientes");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.token) localStorage.setItem("token", data.token);

      navigate("/cliente/dashboard");

    } catch {
      setError("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  function handleCadastro() {
    navigate("/register/cliente");
  }

  return (
    <div>
      <h1>Login Cliente</h1>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
