import { useState } from "react";

export default function RegistroCliente() {
  const [form, setForm] = useState({
    login: "",
    senha: "",
    cpf: "",
    idade: "",
    sexo: "",
  });

  const [modoEdicao, setModoEdicao] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreate(e) {
    e.preventDefault();

    const payload = {
      tipoUsuario: "CLIENTE",
      login: form.login,
      senha: form.senha,
      cpf: form.cpf,
      idade: Number(form.idade),
      sexo: form.sexo,
    };

    console.log("CRIAR CLIENTE:", payload);

    setForm({
      login: "",
      senha: "",
      cpf: "",
      idade: "",
      sexo: "",
    });
  }

  function handleUpdate() {
    console.log("ATUALIZAR CLIENTE:", form);
    setModoEdicao(false);
  }

  function handleDelete() {
    console.log("EXCLUIR CLIENTE:", form.login);
    setModoEdicao(false);
    setForm({
      login: "",
      senha: "",
      cpf: "",
      idade: "",
      sexo: "",
    });
  }

  // simula seleção de cliente (READ)
  function ativarEdicaoExemplo() {
    setForm({
      login: "cliente@teste.com",
      senha: "",
      cpf: "98765432100",
      idade: "28",
      sexo: "F",
    });
    setModoEdicao(true);
  }

  return (
    <div>
      <h1>Vita Hospitality Cliente</h1>

      {!modoEdicao && (
        <button type="button" onClick={ativarEdicaoExemplo}>
          Simular edição de Cliente
        </button>
      )}

      <form onSubmit={handleCreate}>
        <input name="login" placeholder="Email" value={form.login} onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required={!modoEdicao} />
        <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
        <input name="idade" type="number" placeholder="Idade" value={form.idade} onChange={handleChange} />
        <input name="sexo" placeholder="Sexo" value={form.sexo} onChange={handleChange} />

        {!modoEdicao ? (
          <button type="submit">Cadastrar</button>
        ) : (
          <>
            <button type="button" onClick={handleUpdate}>Atualizar</button>
            <button type="button" onClick={handleDelete}>Excluir</button>
            <button type="button" onClick={() => setModoEdicao(false)}>Cancelar</button>
          </>
        )}
      </form>
    </div>
  );
}
