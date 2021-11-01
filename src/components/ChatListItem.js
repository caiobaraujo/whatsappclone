import React, { useState, useEffect } from 'react';
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="chatListItem">
      <img
        className="chatListItem--avatar"
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU'
        }
        alt="img"
      ></img>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Caio Araujo</div>
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
