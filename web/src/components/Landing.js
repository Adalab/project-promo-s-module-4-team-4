/* SECCIÓN DE IMPORT */
import '../styles/landing.scss';
import station from '../images/station.png';
import iconComputer from '../images/iconoComp.png';
import iconweb from '../images/iconoweb.png';
import icongithub from '../images/iconogithub.png';
import { Link } from 'react-router-dom';
import objectToExport from '../service/localstorege';
import trash from '../images/icons8-basura-100.png';
import { useState, useEffect } from 'react';
import api from '../service/api';

/* SECCIÓN DEL COMPONENTE */
function Landing(props, setSavedCards) {
  const [cardProject, setCardProject] = useState(
    objectToExport.get('cards', [])
  );

  useEffect(() => {
    api.listProject().then((cleanData) => {
      setCardProject(cleanData);
    });
  }, []);

  const handleTrashLi = (ev) => {
    cardProject.splice(ev.target.id, 1);
    objectToExport.set('cards', cardProject);
    setCardProject([...cardProject]);
  };

  const renderLandingCard = () => {
    return cardProject.map((obj, index) => {
      return (
        <li key={index} className="landing-li">
           <img
                src={trash}
                alt="trash"
                onClick={handleTrashLi}
                className="trashLi"
                id={index}
            />
          <a className="return" href={`//localhost:4000/api/projects/detail/${obj.idProject}`}>
            <section className="land-autor autOne">
            
              <section className="land-info-project">
                <p className="land-subtitle">Personal Project Card</p>
                <hr className="land-line" />
                <h2 className="land-title-preview">{obj.name}</h2>
                <p className="land-slogan">{obj.slogan}</p>
                <p className="land-desc">{obj.description}</p>
                <section className="land-technologies">
                  <p className="land-textTec">{obj.technologies}</p>
                  <div className="land-div_icon">
                    <a
                      className="land-icon"
                      href={obj.repo}
                      title="repo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={icongithub}
                        title="enlace a repositorio"
                        alt="icono repositorio"
                        className="land-iconGH"
                      />
                    </a>
                    <a
                      className="land-icon"
                      href={obj.demo}
                      title="demo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={iconweb}
                        title="enlace a web"
                        alt="icono web"
                        className="land-iconWB"
                      />
                    </a>
                  </div>
                </section>
              </section>
              <section className="land-info-autor">
                <div className="land-img">
                  <img className="land-image" src={obj.image} alt="user" />
                </div>
                <p className="land-job">{obj.job}</p>
                <p className="land-name">{obj.autor}</p>
              </section>
            </section>
          </a>
        </li>
      );
    });
  };
  return (
    <div className="landing">
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
      <main className="land-main">
        <ul className="landing-ul">{renderLandingCard()}</ul>
      </main>
      <footer className="land-footer">
        <img className="land-logoCool" src={station} alt="icono" />
        <span className="land-copy">masocas sin fronteras</span>
      </footer>
    </div>
  );
}
export default Landing;
