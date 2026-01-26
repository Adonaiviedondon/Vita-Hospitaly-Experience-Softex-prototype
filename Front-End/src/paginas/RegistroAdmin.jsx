import { useState } from "react";

export default function RegistroAdmin() {
  const [form, setForm] = useState({
    login: "",
    senha: "",
    cpf: "",
    idade: "",
    sexo: "",
    lugaresOfertados: "",
  });

  const [modoEdicao, setModoEdicao] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreate(e) {
    e.preventDefault();

    const payload = {
      tipoUsuario: "ADMIN",
      login: form.login,
      senha: form.senha,
      cpf: form.cpf,
      idade: Number(form.idade),
      sexo: form.sexo,
      lugaresOfertados: form.lugaresOfertados,
    };

    console.log("CRIAR:", payload);

    setForm({
      login: "",
      senha: "",
      cpf: "",
      idade: "",
      sexo: "",
      lugaresOfertados: "",
    });
  }

  function handleUpdate() {
    console.log("ATUALIZAR:", form);
    setModoEdicao(false);
  }

  function handleDelete() {
    console.log("EXCLUIR:", form.login);
    setModoEdicao(false);
    setForm({
      login: "",
      senha: "",
      cpf: "",
      idade: "",
      sexo: "",
      lugaresOfertados: "",
    });
  }

  function ativarEdicaoExemplo() {
    setForm({
      login: "admin@teste.com",
      senha: "",
      cpf: "12345678900",
      idade: "35",
      sexo: "M",
      lugaresOfertados: "10",
    });
    setModoEdicao(true);
  }

  return (
    <div>
      <h1>Vita Hospitality Admin</h1>

      {!modoEdicao && (
        <button type="button" onClick={ativarEdicaoExemplo}>
          Simular edição de Admin
        </button>
      )}

      <form onSubmit={handleCreate}>
        <input name="login" placeholder="Email" value={form.login} onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required={!modoEdicao} />
        <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
        <input name="idade" type="number" placeholder="Idade" value={form.idade} onChange={handleChange} />
        <input name="sexo" placeholder="Sexo" value={form.sexo} onChange={handleChange} />
        <input name="lugaresOfertados" placeholder="Lugares ofertados" value={form.lugaresOfertados} onChange={handleChange} />

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
