import React from 'react';
import './friends.css';

const FriendList = ({friends}) => {
    return (
        <ul className="friends">
	{friends.map(friend => (
	<li key={friend.id}>
       <div className="border"> 
  <img src={friend.avatar} alt={friend.name} width="48" className="firend-image" />
  <p className="friend-name">{friend.name}</p>
  <p className={friend.isOnline ? 'online' : 'offline'}>{friend.isOnline ? "Online" : "Offline"}</p>
       </div>
	</li>
    ))}
</ul>
    )
    }
    
    export default FriendList;