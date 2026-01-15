import { useState } from "react";


export default function RegistroAdmin() {
    

    const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
  });

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
    
  }
  function handleSubmit(e) {
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

    console.log(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Vita Hospitality Admin</h1>

      <input name="login" placeholder="Email" onChange={handleChange} />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
      <input name="cpf" placeholder="CPF" onChange={handleChange} />
      <input name="idade" type="number" placeholder="Idade" onChange={handleChange} />
      <input name="sexo" placeholder="Sexo" onChange={handleChange} />
      <input name="lugaresOfertados" placeholder="Lugares ofertados" onChange={handleChange} />

      <button>Cadastrar</button>
    </form>
  );
}