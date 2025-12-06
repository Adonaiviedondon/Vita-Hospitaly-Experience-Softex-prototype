import { useState } from "react";
import {useNavegate} from "react-router-dom";
import "./login.css";
import authServiços from "../../Serviços/authServiços";

export default function login(){
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");
    const [error,setError] = useState("");
    const navegate = useNavegate();

    async function handleLogin(e) {
        e.preventDefault(); 
        setError(""); 
        if (!usuario.trim() || !senha.trim()) {
            setError("Há campos a serem preenchidos"); 
            return;
    }

    try{
        const data = await authServiços.login({usuario,senha});
        
        if (data.user.TIPO === "admin") {
          navegate("/administrador/dashboard");
        } else{
          navegate("/hospede/dashboard")
        }

    }catch { 
        setError("Nome de usuário ou senha incorretos");
}
 function handleRegister() {
    navegate("/auth/register");
}
 return (
  <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Vita Hospitality</h1>

        <label>Email ou CPF/CNPJ</label>
        <input
          placeholder="Digite seu login"
          value={identifier}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="buttons">
          <button className="btn" type="submit">Login</button>
          <button className="btn" type="button" onClick={handleRegister}>
            Registrar
          </button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
    )}}