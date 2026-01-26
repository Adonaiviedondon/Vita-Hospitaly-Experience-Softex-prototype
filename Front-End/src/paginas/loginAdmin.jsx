import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../servicos/authservicos";

export default function LoginAdmin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await authServicos.login({ usuario, senha });

      if (data.tipoUsuario !== "ADMIN") {
        setError("Acesso permitido apenas para administradores");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      navigate("/admin/dashboard");
    } catch {
      setError("Usuário ou senha inválidos");
    }
  }

  function irParaCadastro() {
    navigate("/register/admin");
  }

  return (
    <div>
      <h1>Anuncie suas reservas</h1>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Login"
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

        {/* 🔥 BOTÃO QUE TINHA SUMIDO */}
        <button type="button" onClick={irParaCadastro}>
          Cadastrar
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
