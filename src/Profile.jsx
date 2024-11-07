import React from 'react';
import './Profile.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      <div className="stats">
        <div className="stat">
        <span>Followers</span>
        <span>{stats.followers}</span>
        </div>
        <div className="stat"> 
        <span>Views</span> 
        <span>{stats.views}</span>
        </div>
        <div className="stat">
        <span>Likes</span> 
        <span>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;