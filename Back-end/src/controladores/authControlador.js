import { loginService } from "../Servicos/authServico.js";

export async function login(req, res) {
  const { usuario, senha } = req.body;

  try {
    const result = await loginService(usuario, senha );
    res.json({ token: result.token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}