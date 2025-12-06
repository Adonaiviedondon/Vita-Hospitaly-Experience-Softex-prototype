const API_URL = "http://localhost:3000/api/auth";


async function login({usuario,senha}) {
    const value = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, senha }),
  });

  const data = await value.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

export default {login};