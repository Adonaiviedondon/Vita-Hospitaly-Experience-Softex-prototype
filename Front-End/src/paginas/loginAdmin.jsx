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

    try {
      const data = await authServicos.login({ usuario, senha });

      if (data.user.TIPO !== "admin") {
        setError("Acesso permitido apenas para administradores");
        return;
      }

      navigate("/admin/dashboard");
    } catch {
      setError("Usuário ou senha inválidos");
    }
  }

  
  function handleCadastro() {
    navigate("/register/admin");
  }

  return (
    <div className="login-container">
      <h1>Anuncie suas reservas</h1>

    
      <form onSubmit={handleLogin}>

      <div className="input-nome">
        <input
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label>Usuario</label>
      </div>
      
      <div className="input-nome">
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label>senha</label>
      </div>
        <button className="btn" type="submit">Entrar</button>

        <button className="btn" type="button" onClick={handleCadastro}>
          Cadastro
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
// const styles ={
//   .btn{
    
//   }
// }

