import React from 'react';
import Api from '../Api';
import './Login.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onReceive }) => {
  const handleFacebooKLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert('Algo deu errado!!');
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebooKLogin}>Logar com FaceBook</button>
    </div>
  );
};
