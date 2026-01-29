import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServicos from "../servicos/authservicos";

export default function LoginAdmin() {
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
      const data = await authServicos.login({
        usuario: usuario.trim(),
        senha: senha.trim(),
      });

      if (!data?.user) {
        setError("Usuário ou senha inválidos");
        return;
      }

      // ✅ normaliza o tipo para evitar erro
      const tipo = data.user.TIPO?.toLowerCase();

      if (tipo !== "admin") {
        setError("Acesso permitido apenas para administradores");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data.user,
          TIPO: tipo,
        })
      );

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/admin/dashboard");

    } catch {
      setError("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  function handleCadastro() {
    navigate("/register/admin");
  }

  return (
    <div>
      <h1>Login Administrador</h1>

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
