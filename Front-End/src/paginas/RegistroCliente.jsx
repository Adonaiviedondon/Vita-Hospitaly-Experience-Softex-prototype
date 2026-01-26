import { useState } from "react";
import { useNavigate } from "react-router-dom";

function validarCampos(campos) {
  return campos.every(c => c && c.toString().trim() !== "");
}

export default function RegistroCliente() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const [form, setForm] = useState({
    login: "",
    senha: "",
    nome: "",
    cpf: "",
    idade: "",
    sexo: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function executarAcao(acao) {
    setMensagem("");

    const valido = validarCampos(Object.values(form));
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
      acao === "atualizar" ? "PUT" : "DELETE";

    const body =
      acao === "deletar"
        ? null
        : JSON.stringify({
            tipoUsuario: "CLIENTE",
            ...form,
            idade: Number(form.idade)
          });

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body
    });

    navigate("/login-cliente");
  }

  return (
    <form>
      <h1>Registro Cliente</h1>

      {mensagem && <p style={{ color: "red" }}>{mensagem}</p>}

      <input name="login" value={form.login} placeholder="Email" onChange={handleChange} />
      <input name="senha" value={form.senha} type="password" placeholder="Senha" onChange={handleChange} />
      <input name="nome" value={form.nome} placeholder="Nome" onChange={handleChange} />
      <input name="cpf" value={form.cpf} placeholder="CPF" onChange={handleChange} />
      <input name="idade" value={form.idade} type="number" placeholder="Idade" onChange={handleChange} />
      <input name="sexo" value={form.sexo} placeholder="Sexo" onChange={handleChange} />

      <button type="button" onClick={() => executarAcao("cadastrar")}>Cadastrar</button>
      <button type="button" onClick={() => executarAcao("atualizar")}>Atualizar</button>
      <button type="button" onClick={() => executarAcao("deletar")}>Deletar</button>
    </form>
  );
}
