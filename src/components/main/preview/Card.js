import iconweb from '../../../images/iconoweb.png';
import icongithub from '../../../images/iconogithub.png';
import Profile from './Profile';
function Card(props) {
  return (
    <section className="autor">
      <section className="info-project">
        <p className="subtitle">Personal Project Card</p>
        <hr className="line" />

        <h2 className="title-preview">
          {' '}
          {props.data.name || 'Elegant Workspace'}
        </h2>
        <p className="slogan">{props.data.slogan || 'Diseños Exclusivos'}</p>
        <p className="desc">
          {props.data.desc ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!'}{' '}
        </p>
        <section className="technologies">
          <p className="text">
            {props.data.technologies || 'React JS, MongoDB'}
          </p>
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
          <Profile
            className="image"
            defaultAvatar={props.defaultAvatar}
            avatar={props.data.image}
            src={props.data.photo}
            alt="user"
          />
        </div>
        <p className="job"> {props.data.job || 'Full Stack Developer'}</p>
        <p className="name">{props.data.autor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
}

export default Card;
