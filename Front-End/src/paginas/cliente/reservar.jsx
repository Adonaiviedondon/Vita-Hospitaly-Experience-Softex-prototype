import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservar() {
  const [reservas, setReservas] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/reservas/disponiveis", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(setReservas);
  }, []);

  function reservar(id) {
    fetch(`http://localhost:8080/reservas/reservar/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(async res => {
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg);
        }
        alert("Reserva realizada com sucesso");
      })
      .catch(err => {
        if (err.message === "Saldo insuficiente") {
          setErro("Saldo insuficiente. Adicione crédito.");
          setTimeout(() => navigate("/cliente/saldo"), 1500);
        } else {
          setErro(err.message);
        }
      });
  }

  return (
    <div>
      <h2>Reservas disponíveis</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {reservas.map(r => (
        <div key={r.id}>
          <p>
            {r.nomeLugar} – {r.localizacao} – R$ {r.preco}
          </p>
          <button onClick={() => reservar(r.id)}>Reservar</button>
        </div>
      ))}
    </div>
  );
}
