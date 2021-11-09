import React, { useState, useEffect } from 'react';
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick, active, data }) => {
  return (
    <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt="img"></img>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">17:00</div>
        </div>

        <div className="chatLisItem--line">
          <div className="chatLisItem--lastMsg">
            <p>
              Opa, tudo bem? Line 1:17: 'useState' is defined but never used
              no-unused-vars Line 1:17: 'useState' is defined but never used
              no-unused-vars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
