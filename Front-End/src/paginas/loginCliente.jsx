import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../Servicos/authServicos";

export default function LoginCliente() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await authServicos.login({ usuario, senha });

      if (data.user.TIPO !== "cliente") {
        setError("Acesso permitido apenas para clientes");
        return;
      }

      navigate("/cliente/dashboard");
    } catch {
      setError("Usuário ou senha inválidos");
    }
  }

  
  function handleCadastro() {
    navigate("/register/cliente");
  }

  return (
    <div>
      <h1>Faça Sua Reserva</h1>

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

        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
