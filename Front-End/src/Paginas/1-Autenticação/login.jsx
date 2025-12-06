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
        e.preventDefault(); setError(""); 
        if (!identifier || !password) {
            setError("Há campos a serem preenchidos"); 
            return;
    }

    try{
        const data = await authServiços.login({usuario,senha});
        localStorage.setItem("authToken", data.token);
        navigate("/guest/dashboard");
    }catch (err) { 
        setError("Nome de usuário ou senha incorretos");
}
 return (
  <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <h1>Entrar</h1>

      <label htmlFor="identifier">Login (Email ou CNPJ)</label>
      <input
        id="identifier"
        type="text"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="buttons">
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegister}>
          Registro
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </form>
  </div>
    )}}