import { Routes, Route } from "react-router-dom";
import Login from "./Paginas/1-Autenticacao/login";
import Cadastro from "./Paginas/1-Autenticacao/registro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
