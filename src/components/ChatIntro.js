import React from 'react';
import './ChatIntro.css';
import img from './imgIntro.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="chatIntro">
      <img src={img} alt="" />
      <h1>Matenha seu celular conectado</h1>
      <h2>
        O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o usu de dados, conecete seu telefone a uma rede Wi-Fi
      </h2>
    </div>
  );
};
