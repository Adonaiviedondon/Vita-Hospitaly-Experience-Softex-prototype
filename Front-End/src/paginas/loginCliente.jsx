import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../Servicos/authServicos";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (!usuario.trim() || !senha.trim()) {
      setError("preencha todos os campos");
      return;
    }

    try {
      const data = await authServicos.login({ usuario, senha });

      if (data.user.TIPO === "admin") {
        navigate("/administrador/dashboard");
      } else {
        navigate("/hospede/dashboard");
      }
    } catch {
      setError("usuário ou senha incorretos");
    }
  }

  function handleRegister() {
    navigate("/auth/register");
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Vita Hospitality</h1>

        <label>Email ou CPF/CNPJ</label>
        <input
          placeholder="nome do usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="buttons">
          <button className="btn" type="submit">Login</button>
          <button className="btn" type="button" onClick={handleRegister}>
            Registrar
          </button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
