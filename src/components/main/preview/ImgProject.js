import Profile from './Profile';
function ImgProject(props) {
  return (
    <Profile
      className="image"
      src={props.data.photo}
      alt="imagen de proyecto"
      avatar={props.data.photo}
    />
  );
}

export default ImgProject;
