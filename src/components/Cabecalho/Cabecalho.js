import { Link, NavLink } from "react-router-dom";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="container cabecalho">
      
      <Link to="/">
        <h1 className="logo">To do List</h1>
      </Link>
      <nav className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Adicionar tarefa</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
