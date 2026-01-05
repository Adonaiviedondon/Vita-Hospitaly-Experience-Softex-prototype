import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../Servicos/authServicos";

export default function LoginAdmin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (!usuario.trim() || !senha.trim()) {
      setError("há campos a serem preenchidos");
      return;
    }

    try {
      const data = await authServicos.login({ usuario, senha });

      if (data.user.TIPO !== "admin") {
        setError("acesso permitido apenas a administradores");
        return;
      }
      navigate("/admin/dashboard");
    } catch {
      setError("usuário ou senha incorretos");
    }
  }

 return (
    <div>
      <h1>Login Administrador</h1>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}