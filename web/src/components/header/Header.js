//import logo from '../../images/logoCool.png';
import station from '../../images/station.png';
import iconComputer from '../../images/iconoComp.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div className="header">
        <div className="contHeader">
          <img className="iconComputer" src={iconComputer} alt="icono" />
          <p className="text">Cool Project Station</p>
        </div>

        <img className="logoCool" src={station} alt="logo" />
      </div>

      <div className="land-header">
        <h1 className="land-header__title">Cool Project Station</h1>
        <h2 className="land-header__subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </h2>
        <form className="land-header__form">
          <button className="land-btnSee">
                  <Link className="btnSeeTxt" to="/" target='_blank'>
                    VER PROYECTOS
                  </Link>
          </button>
        </form>
    </div>

  </header>
  );
}
export default Header;
