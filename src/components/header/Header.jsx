import logo from "../../assets/svg/UDRlogosvg.svg";
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
          <li className="nav-item">
            <img src={logo} alt="logo" />
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
