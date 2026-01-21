import { useState } from "react";

export default function Saldo() {
  const [valor, setValor] = useState("");

  function adicionar() {
    fetch("http://localhost:8080/clientes/saldo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ valor: Number(valor) })
    }).then(() => alert("Saldo atualizado com sucesso"));
  }

  return (
    <div>
      <h2>Adicionar crédito</h2>
      <input
        type="number"
        placeholder="Valor"
        onChange={e => setValor(e.target.value)}
      />
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}
