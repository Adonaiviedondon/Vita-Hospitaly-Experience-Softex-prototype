import { useState } from "react";

    export default function RegistroCliente() {
      const [form, setForm] = useState({
        login: "",
        senha: "",
        nome: "",
        idade: "",
        cpf: "",
        sexo: "",
});

      function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

      function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            tipoUsuario: "CLIENTE",
            login: form.login,
            senha: form.senha,
            nome: form.nome,
            idade: Number(form.idade),
            cpf: form.cpf,
            sexo: form.sexo,
            saldo: 0
        };
        
        console.log(payload);//envio para o backend
    }

       return(
        <form onSubmit={handleSubmit}>
            <h1>Cadastro do Cliente</h1>

            <input name="login" placeholder="Email" onChange={handleChange} />
            <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
            <input name="nome" placeholder="Nome Completo" onChange={handleChange} />
            <input name="idade" type="number" placeholder="Idade" onChange={handleChange} />
            <input name="cpf" placeholder="CPF" onChange={handleChange} />
            <input name="sexo" placeholder="Sexo" onChange={handleChange} />

            <button>Fazer Cadastro</button>
        </form>
    )
      
}