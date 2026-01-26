// config/oracle.js
import oracledb from "oracledb";

// Formato de saída em objetos (melhor para leitura)
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function connect() {
  try {
    const connection = await oracledb.getConnection({
      user: "SYSTEM",               // troque para o seu usuário
      password: "'ianodaXyZw26'",   // sua senha do Oracle
      connectString: "localhost/XEPDB1"  // nome padrão do Oracle XE
    });

    console.log("OracleDB conectado com sucesso!");
    return connection;

  } catch (err) {
    console.error("Erro ao conectar ao Oracle:", err);
    throw err;
  }
}