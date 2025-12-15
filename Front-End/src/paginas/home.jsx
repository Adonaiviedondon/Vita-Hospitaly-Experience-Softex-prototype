import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [tema, setTema] = useState("");
    return(
        <div className="container">
            <div className="box">
                <h1>Vita-Hospitaly</h1>
                <div className="link">
                    <Link to="/login/admin">Login Administrador</Link>
                    <Link to="/login/cliente">Login cliente</Link>
                    <Link to="/register/admin">trabalhe conosco</Link>
                    <Link to="/register/cliente">faça sua reserva</Link>

                    <a onClick={() =>
            setTema(
              "A Vita Hospitality nasceu com o objetivo de oferecer soluções modernas e inteligentes para gestão de hospitalidade, conectando tecnologia, eficiência e experiência do usuário."
            )
          }>
            História da empresa
          </a>

          <a onClick={() =>
            setTema(
              "Este sistema permite o acesso diferenciado para administradores e clientes. Administradores gerenciam usuários e dados, enquanto clientes acessam seus serviços e informações pessoais."
            )
          }>
            Como funciona o sistema
          </a>
          {tema && <div className="home-content">{tema}</div>}
                </div>
            </div>
        </div>
    )
}