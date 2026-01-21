import { useEffect, useState } from "react";

export default function Historico() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservas/historico", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(setHistorico);
  }, []);

  return (
    <div>
      <h2>Histórico</h2>
      {historico.map(r => (
        <p key={r.id}>{r.nomeLugar} - {r.status}</p>
      ))}
    </div>
  );
}
