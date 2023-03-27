//import logo from '../../images/logoCool.png';
import station from '../../images/station.png';
import iconComputer from '../../images/iconoComp.png';

function Header(props) {
  return (
    <header className="header">
      <div className="contHeader">
        <img className="iconComputer" src={iconComputer} alt="icono" />
        <a href='../Landing.js' title='Return to Landing'>
        <p className="text">Cool Project Station</p></a>
      </div>
      <img className="logoCool" src={station} alt="logo" />
    </header>
  );
}
export default Header;
