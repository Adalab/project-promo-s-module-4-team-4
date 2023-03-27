import trash from '../images/icons8-basura-100.png';
import { useState } from 'react';
import dataApi from '../service/api';
import objectToExport from '../service/localstorege';
import Header from './header/Header';
import ImgProject from './main/preview/ImgProject';
import station from '../images/station.png';
import Card from './main/preview/Card';
import Buttons from './main/form/Buttons';
import InputProject from './main/form/InputProject';
import InputAuthor from './main/form/InputAuthor';
import GetAvatar from './main/preview/GetAvatar';
//import defaultAvatar from '../images/defaultAvatar';
import '../styles/mixins.scss';
import '../styles/App.scss';

const CreateProject = ({ setSavedCards }) => {
  const [mensjRepo, setMensjRepo] = useState('');
  const [mensjError, setMensjError] = useState('');
  const [url, setUrl] = useState('');
  const [hidden, setHidden] = useState(true);
  const [avatar, setAvatar] = useState('');
  const [data, setData] = useState(
    objectToExport.get('dataLs', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png',
      photo:
        'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg',
    })
  );
  const savedCards = objectToExport.get('cards', []);

  const handleInput = (ev) => {
    objectToExport.set('dataLs', data);
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    setData({ ...data, [inputName]: inputValue });
  };

  const handletrash = (ev) => {
    setData({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png',
      photo:
        'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg',
    });
    setHidden(true);
    setUrl('');

    objectToExport.remove('dataLs', data);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((info) => {
      setUrl(info.cardURL);
    });
    let regex = new RegExp(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    );

    if (
      data.name !== '' &&
      data.slogan !== '' &&
      data.repo !== '' &&
      data.demo !== '' &&
      data.technologies !== '' &&
      data.desc !== '' &&
      data.autor !== '' &&
      data.job !== ''
    ) {
      if (regex.test(data.repo)) {
        setMensjError(' ');
        setMensjRepo('');
        setHidden(false);
        savedCards.push(data);
        objectToExport.set('cards', savedCards);
      } else {
        setMensjRepo('Formato del URL incorrecto');
        setHidden(true);
      }
    } else if (
      data.name === '' ||
      data.slogan === '' ||
      data.repo === '' ||
      data.demo === '' ||
      data.technologies === '' ||
      data.desc === '' ||
      data.autor === '' ||
      data.job === '' ||
      data.image === '' ||
      data.photo === ''
    ) {
      setMensjRepo('');
      setMensjError('Faltan datos por rellenar');
      setHidden(true);
    }
  };

  const updatePhoto = (avatar) => {
    setAvatar(avatar);
    setData({ ...data, photo: avatar });
  };

  const updateImage = (avatar) => {
    setAvatar(avatar);
    setData({ ...data, image: avatar });
  };

  return (
    <div className="App">
      {
        <div className="container">
          <Header />
          <main className="main">
            <section className="preview">
              <ImgProject data={data} />
              <Card data={data} />
            </section>

            <form className="form form2">
              <h2 className="title">Información</h2>

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre el proyecto</p>
                <hr className="line" />
              </section>

              <InputProject
                data={data}
                handleInput={handleInput}
                mensjRepo={mensjRepo}
              />

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre la autora</p>
                <hr className="line" />
              </section>

              <InputAuthor handleInput={handleInput} data={data} />

              <section className="buttons-img">
                <GetAvatar
                  avatar={avatar}
                  updateAvatar={updateImage}
                  value={'Subir foto de autora'}
                />
                <GetAvatar
                  avatar={avatar}
                  updateAvatar={updatePhoto}
                  value={'Subir foto de proyecto'}
                />
              </section>

              <section className="buttons-img">
                <Buttons
                  className={'btn-large'}
                  value={'Crear tarjeta'}
                  handleClick={handleClickCreateCard}
                />
              </section>

              <section className="card">
                <span className={hidden ? 'hidden' : ''}>
                  La tarjeta ha sido creada:
                  <a
                    href={url}
                    className="url_create"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {url}
                  </a>
                </span>
                <span className="mnsj">{mensjError}</span>

                <img
                  src={trash}
                  alt="trash"
                  onClick={handletrash}
                  className="trash"
                />
              </section>
            </form>
          </main>
          <footer className="land-footer">
            <img className="land-logoCool" src={station} alt="icono" />
            <span className="land-copy">&copy Module-3: Project Team 4</span>
          </footer>
        </div>
      }
    </div>
  );
};

export default CreateProject;
