import React from 'react';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <div className="stats">
        <p>Followers: {stats.followers}</p>
        <p>Views: {stats.views}</p>
        <p>Likes: {stats.likes}</p>
      </div>
    </div>
  );
};

export default Profile;