import { useState } from "react";

    export default function RegistroCliente() {
      const [form, setForm] = useState({
        id: null,
        login: "",
        senha: "",
        nome: "",
        idade: "",
        cpf: "",
        sexo: "",
        saldo:"",
});
    
    const [erro , setErro] =useState("");
    const [sugestoes,setSugestoes] =useState([]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSearch(e) {
        const valor = e.target.value;
        setForm({...form,nome: valor});

        if (valor.length < 1) {
            setSugestoes([]);
            return;
        }

        try {
            const res =await fetch(`http://localhost:8080/api/clientes?nome=${valor}`);
            const data = await res.json();
            setSugestoes(data)
            
        } catch  {
            console.log("erro ao buscar o cliente")
        }
    }
    function carregarCliente(cliente) {
        setForm({
            id:cliente.id,
            login:cliente.login,
            senha:"",
            nome:cliente.nome,
            idade:cliente.idade,
            cpf:cliente.cpf,
            sexo:cliente.sexo,
            saldo:cliente.saldo,
        });

        setSugestoes([]);
    }

     async function handleSubmit(e) {
        e.preventDefault();
        setErro("");

        if (!form.login || !form.senha || !form.nome || !form.cpf || !form.idade || !form.sexo) {
            setErro("todos os campos precisam ser preenchidos");
            return;
        }
        const payload = {
            tipoUsuario: "CLIENTE",
            login: form.login,
            senha: form.senha,
            nome: form.nome,
            idade: Number(form.idade),
            cpf: form.cpf,
            sexo: form.sexo,
            saldo: Number(form.saldo || 0)
        };

        try {
            const  metodo = form.id ? "PUT" : "POST";
            const url = form.id
                ? `http://localhost:8080/api/clientes/${form.id}` 
                : "http://localhost:8080/api/clientes";
            const res = await fetch(url, {
                method: metodo,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if(!res.ok) throw new Error();

            alert("O cliente foi adicionado com sucesso")
        } catch  {
            setErro("erro ao tentar salvar o cliente")
        }
        
        console.log(payload);//envio para o backend
    }

       return(
        <div style={{ padding: "40px" }}>
            <h1>cadastro de cliente</h1>

        <form onSubmit={handleSubmit}>

            <input name="login" placeholder="Email" onChange={handleChange} />

            {sugestoes.length > 0 && (
          <ul>
            {sugestoes.map((c) => (
              <li
                key={c.id}
                onClick={() => carregarCliente(c)}
                style={{ cursor: "pointer" }}
              >
                {c.nome}
              </li>
            ))}
          </ul>
        )}
            <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
            <input name="nome" placeholder="Nome Completo" onChange={handleChange} />
            <input name="idade" type="number" placeholder="Idade" onChange={handleChange} />
            <input name="cpf" placeholder="CPF" onChange={handleChange} />
            <input name="sexo" placeholder="Sexo" onChange={handleChange} />

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            <button type="submit">
                {form.id ? "Atualizar" : "Cadastrar"}
            </button>

            <button>Fazer Cadastro</button>
        </form>
        </div>
    )
      
}