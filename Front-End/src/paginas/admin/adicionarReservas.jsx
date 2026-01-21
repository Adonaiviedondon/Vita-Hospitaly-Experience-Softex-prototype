import { useState } from "react";

export default function AdicionarReservas() {
  const [form, setForm] = useState({
    nomeLugar: "",
    localizacao: "",
    preco: ""
  });

  function cadastrar() {
    fetch("http://localhost:8080/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => alert("Reserva adicionada"));
  }

  return (
    <>
      <input placeholder="Lugar" onChange={e => setForm({...form, nomeLugar: e.target.value})} />
      <input placeholder="Localização" onChange={e => setForm({...form, localizacao: e.target.value})} />
      <input placeholder="Preço" onChange={e => setForm({...form, preco: e.target.value})} />
      <button onClick={cadastrar}>Adicionar</button>
    </>
  );
}
