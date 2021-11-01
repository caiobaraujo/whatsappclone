import React, { useState, useEffect } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatlist, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU"
            alt=""
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            ></input>
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem key={key} />
          ))}
        </div>
      </div>
      <div className="contentarea">
        <div className="chat">
          <ChatIntro />
        </div>
      </div>
    </div>
  );
};
