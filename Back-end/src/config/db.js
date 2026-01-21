const oracledb = require("oracledb");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function getConnection() {
  return await oracledb.getConnection({
    user: "vita_user",
    password: "vita123",
    connectString: "localhost:1521/XEPDB1",
  });
}

module.exports = getConnection;