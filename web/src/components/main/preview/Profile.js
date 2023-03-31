import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const avatar = props.avatar === '' ? props.defaultAvatar : props.avatar;

  return (
    <div className="profile">
      <img className={props.className} src={avatar} alt=""></img>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
