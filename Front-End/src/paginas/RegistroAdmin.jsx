import { useState } from "react";
import { useNavigate } from "react-router-dom";

function validarCampos(camposObrigatorios) {
  return camposObrigatorios.every(
    campo => campo && campo.toString().trim() !== ""
  );
}

export default function RegistroAdmin() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const [form, setForm] = useState({
    login: "",
    senha: "",
    cpf: "",
    idade: "",
    sexo: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function executarAcao(acao, rotaLogin) {
    setMensagem("");

    const valido = validarCampos([
      form.login,
      form.senha,
      form.cpf,
      form.idade,
      form.sexo,
    ]);

    if (!valido) {
      setMensagem("Há campos a serem preenchidos");
      return;
    }

    const url =
      acao === "cadastrar"
        ? "http://localhost:8080/usuarios"
        : `http://localhost:8080/usuarios/${form.login}`;

    const method =
      acao === "cadastrar" ? "POST" :
      acao === "atualizar" ? "PUT" :
      "DELETE";

    const body =
      acao === "deletar"
        ? null
        : JSON.stringify({
            tipoUsuario: "ADMIN",
            ...form,
            idade: Number(form.idade),
          });

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body,
    });

    navigate(rotaLogin);
  }

  return (
    <form>
      <h1>Registro Admin</h1>

      {mensagem && <p style={{ color: "red" }}>{mensagem}</p>}

      <input name="login" placeholder="Email" onChange={handleChange} />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
      <input name="cpf" placeholder="CPF" onChange={handleChange} />
      <input name="idade" type="number" placeholder="Idade" onChange={handleChange} />
      <input name="sexo" placeholder="Sexo" onChange={handleChange} />

      <button type="button" onClick={() => executarAcao("cadastrar", "/login-admin")}>
        Cadastrar
      </button>

      <button type="button" onClick={() => executarAcao("atualizar", "/login-admin")}>
        Atualizar
      </button>

      <button type="button" onClick={() => executarAcao("deletar", "/login-admin")}>
        Deletar
      </button>
    </form>
  );
}
