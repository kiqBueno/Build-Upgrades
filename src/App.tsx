import './App.css';
import { Navbar } from './Componentes/Header';
import { PaginaInicial } from './Componentes/Pagina Inicial';
import { PaginaSobre } from './Componentes/Pagina Sobre';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PaginaInicial />
      <PaginaSobre />
    </div>
  );
}

export default App;
