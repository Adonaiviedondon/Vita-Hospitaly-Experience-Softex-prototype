import { useEffect, useState } from "react";

export default function HistoricoGeral() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservas/historico-geral")
      .then(res => res.json())
      .then(setDados);
  }, []);

  return dados.map(r => (
    <p key={r.id}>
      {r.cliente} - {r.nomeLugar} - {r.status}
    </p>
  ));
}
