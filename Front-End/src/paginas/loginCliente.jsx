import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../servicos/authservicos";

export default function LoginCliente() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await authServicos.login({
        login: usuario,
        senha: senha
      });

      if (data.tipoUsuario !== "CLIENTE") {
        setError("Acesso permitido apenas para clientes");
        return;
      }

      // salva usuário logado
      localStorage.setItem("user", JSON.stringify(data));

      // redireciona para dashboard cliente
      navigate("/cliente/dashboard");
    } catch (err) {
      console.error(err);
      setError("Usuário ou senha inválidos");
    }
  }

  function irParaCadastro() {
    navigate("/register/cliente");
  }

  return (
    <div>
      <h1>Faça Sua Reserva</h1>

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

        {/* 🔥 BOTÃO CADASTRAR (não some mais) */}
        <button type="button" onClick={irParaCadastro}>
          Cadastrar
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
