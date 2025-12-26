import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logovitahospitality.png";


export default function Home() {
    const [tema, setTema] = useState(mensagens.bios);  
    
    return(
      <div style={styles.container}>
        <div style={styles.box}>
          <img src={logo} alt="Vita Hospitality" style={styles.logo} />
          <h1>Vita Hospitality</h1>
          
          <nav style={styles.links}>
            <span onClick={() => setTema(mensagens.bios)}>quem somos nós</span>
            <span onClick={() => setTema(mensagens.funcionalidade)}>como funciona</span>
            <Link to="/login/cliente">Login Cliente</Link>
            <Link to="/login/admin" >Login Admin</Link>
            <Link to="/register/cliente">faça sua reserva</Link>
            <Link to="/register/admin">trabalhe conosco</Link>

          </nav>
          {tema && <div style={styles.mensagem}>{tema}</div>}

        </div>
      </div>

    );
}
const mensagens = {
  bios:`A VITA é uma startup especializada em gestão de imóveis para aluguel por temporada, com foco em hospitalidade, tecnologia e experiência do cliente. Nossa plataforma integra precificação dinâmica, automação operacional e ferramentas de performance, otimizando a rentabilidade de incorporadoras, investidores e proprietários.

  Na VITA, buscamos ir além da hospedagem tradicional, criando experiências significativas e memoráveis para os hóspedes — combinando intenção, criatividade e conexão humana mediada pela tecnologia.`,
  funcionalidade:`Para os nossos clientes temos diversas opções de reservas durante o tempo que eles desejam em diversas localidades com imagens,dados e detalhes atualizados sobre o lugar que deseja
  
  Para quem deseja trabalhar conosco oferece um sistema com diversas ferramentas inteligentes para ofertar suas reservas e controlar suas finanças montando seu empreendimento com a gente`

     
};


const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0d1b2a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#df2323ff",
  },
  box: {
    background: "rgba(8, 8, 8, 0.7)",
    padding: "40px",
    borderRadius: "10px",
    width: "420px",
    textAlign: "center",
  },
  logo: {
    width: "120px",
    marginBottom: "15px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  mensagem: {
    marginTop: "20px",
    fontSize: "14px",
    lineHeight: "1.6",
    textAlign: "justify",
  },

}