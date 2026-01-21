import { useEffect, useState } from "react";

export default function ReservasAdmin() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservas/admin")
      .then(res => res.json())
      .then(setReservas);
  }, []);

  function deletar(id) {
    fetch(`http://localhost:8080/reservas/${id}`, { method: "DELETE" })
      .then(() => setReservas(reservas.filter(r => r.id !== id)));
  }

  return reservas.map(r => (
    <div key={r.id}>
      {r.nomeLugar}
      <button onClick={() => deletar(r.id)}>Deletar</button>
    </div>
  ));
}
