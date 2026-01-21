const db = require("../config/db");

exports.createCliente = async (req, res) => {
  const { login, senha, nome, idade, cpf, sexo } = req.body;

  try {
    const conn = await db();

    
    const existe = await conn.execute(
      "SELECT 1 FROM USUARIOS WHERE LOGIN = :login",
      [login]
    );

    if (existe.rows.length > 0) {
      return res.status(400).json({ error: "Usuário já cadastrado" });
    }

    
    const user = await conn.execute(
      `INSERT INTO USUARIOS (LOGIN, SENHA, TIPO)
       VALUES (:login, :senha, 'cliente')
       RETURNING ID INTO :id`,
      {
        login,
        senha,
        id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
      }
    );

    const userId = user.outBinds.id[0];

    
    await conn.execute(
      `INSERT INTO CLIENTES (ID, NOME, IDADE, CPF, SEXO, SALDO)
       VALUES (:id, :nome, :idade, :cpf, :sexo, 0)`,
      { id: userId, nome, idade, cpf, sexo }
    );

    await conn.commit();
    res.status(201).json({ message: "Cliente cadastrado com sucesso" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar cliente" });
  }
};
