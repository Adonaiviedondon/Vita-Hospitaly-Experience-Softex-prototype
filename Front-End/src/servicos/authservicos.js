const authServicos = {
  async login({ usuario, senha }) {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: usuario,
        senha: senha,
      }),
    });

    if (!response.ok) {
      throw new Error("Login inválido");
    }

    return response.json();
  },
};

export default authServicos;
