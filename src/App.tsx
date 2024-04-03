import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Contato } from "./Componentes/Contato";
import { Navbar } from "./Componentes/Header";
import { PaginaAtuacao } from "./Componentes/Pagina Atuacao";
import { PaginaInicial } from "./Componentes/Pagina Inicial";
import { PaginaSobre } from "./Componentes/Pagina Sobre";
import { AppRoutes } from "./Rotas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <PaginaInicial />
        <AppRoutes />
      </BrowserRouter>
      <PaginaSobre />
      <PaginaAtuacao />
      <Contato />
    </div>
  );
}

export default App;
