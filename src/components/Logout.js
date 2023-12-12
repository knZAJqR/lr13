import React from 'react';
import { useSelector } from 'react-redux'; 
import './Logout.css';

const Logout = () => {
  const userName = useSelector(state => state.user.name);

  return (
    <div className = 'logout'>
      <h1>
        Welcome <span className = 'user_name'>{userName}</span>
      </h1>
      <button className = 'logout_button'>Logout</button>
    </div>
  );
};

export default Logout;