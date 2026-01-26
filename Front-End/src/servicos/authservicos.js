const API_URL = "http://localhost:3000/api/auth";

async function login({ usuario, senha }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, senha }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erro ao fazer login.");
  }

  // 🔄 normalização defensiva
  if (data.user?.tipoUsuario && !data.user.TIPO) {
    data.user.TIPO = data.user.tipoUsuario.toLowerCase();
  }

  if (data.user?.TIPO) {
    data.user.TIPO = data.user.TIPO.toLowerCase();
  }

  return data;
}

export default { login };
