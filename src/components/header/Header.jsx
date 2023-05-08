import raianos from "../../assets/img/UDRlogo.png";
import "./header.css";

function header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="nav-item link">
            <a href="#">Sobre</a>
          </li>
          <li className="nav-item link">
            <a href="#">Plantel</a>
          </li>
          <li className="nav-item logo">
            <img src={raianos} alt="logo" />
          </li>
          <li className="nav-item link">
            <a href="#">História</a>
          </li>
          <li className="nav-item link">
            <a href="#">Contactos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
