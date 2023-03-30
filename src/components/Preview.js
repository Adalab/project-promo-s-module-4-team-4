import '../styles/mixins.scss';
import '../styles/App.scss';
//import '../styles/landing.scss';
//import Header from './header/Header';
import station from '../images/station.png';
import iconweb from '../images/iconoweb.png';
import icongithub from '../images/iconogithub.png';
import { Link } from 'react-router-dom';
import iconComputer from '../images/iconoComp.png';

const Preview = () => {
  return (
    <>
      <header className="land-header">
        <div className="land-contHeader">
          <section className="land-contHeader__oneSection">
            <img className="land-iconComputer" src={iconComputer} alt="icono" />
            <p className="land-text">Cool Project Station</p>
          </section>
          <img className="land-logoCool" src={station} alt="logo" />
        </div>

        <div className="land-header__text">
          <h1 className="land-header__title">Cool Project Station</h1>
          <h2 className="land-header__subtitle">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </h2>
          <form className="land-header__form">
            <button className="land-btnNew">
              <Link className="btnNewTxt" to="/CreateProject">
                NUEVO PROYECTO
              </Link>
            </button>
          </form>
        </div>
      </header>
      <main className="main">
        <section className="preview">
          <div className="profile">
            <img
              className="image"
              src="https://media.istockphoto.com/id/185173155/es/vector/bombilla-hecho-de-iconos-de-la-educaci%C3%B3n-y-de-la-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=gCQnDaW-mX1c0WiAhUI44ee7JrnjSiwvLgnGCBmx3KY="
              alt="photo_project"
            />
          </div>
          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title-preview">Elegant Workspace</h2>
              <p className="slogan">Diseños Exclusivos</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam,ullam culpa
                accusantium placeat odit corrupti ipsum! Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.!
              </p>
              <section className="technologies">
                <p className="text">React JS, MongoDB</p>
                <div className="div_icon">
                  <a href="./" target="_blank">
                    <img
                      src={icongithub}
                      title="enlace a repositorio"
                      alt="icono repositorio"
                      className="icon"
                    />
                  </a>
                  <a href="./" target="_blank">
                    <img
                      src={iconweb}
                      title="enlace a web"
                      alt="icono web"
                      className="icon"
                    />
                  </a>
                </div>
              </section>
            </section>

            <section className="info-autor">
              <div className="img">
                <div className="profile">
                  <img
                    className="img"
                    src="https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png"
                    alt="img"
                  ></img>
                </div>
              </div>
              <p className="job"> Full Stack Developer</p>
              <p className="name"> Emmelie Björklund</p>
            </section>
          </section>
        </section>
      </main>
      <footer className="land-footer">
        <img className="land-logoCool" src={station} alt="icono" />
        <span className="land-copy">&copy Module-3: Project Team 4</span>
      </footer>
    </>
  );
};

export default Preview;
