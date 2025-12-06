import { getConnection } from "../config/oracle.js";
import jwt from "jsonwebtoken";

export async function loginService(usuario, senha) {
  const conn = await getConnection();

  const result = await conn.execute(
    `SELECT id, usuario, senha
       FROM usuarios
      WHERE usuario = :id`,
    [usuario]
  );

  if (result.rows.length === 0) {
    throw new Error("Usuário não encontrado");
  }

  const user = result.rows[0];

  if (user.Senha !== senha) {
    throw new Error("Senha inválida");
  }

  const token = jwt.sign({ id: user.ID }, "SEGREDO", {
    expiresIn: "8h",
  });

  return { token };
}