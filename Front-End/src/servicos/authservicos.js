const API_URL = "http://localhost:8080/auth";

async function login({ usuario, senha }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: usuario,
      senha: senha
    })
  });

  if (!response.ok) {
    throw new Error("Login inválido");
  }

  return response.json();
}

export default { login };
