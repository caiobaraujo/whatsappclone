import React, { useState, useEffect } from 'react';
import './NewChat.css';
import Api from '../Api';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let result = await Api.getContactList(user.id);
        setList(result);
      }
    };
    getList();
  }, [user]);

  const handleClose = () => {
    setShow(false);
  };

  const addNewChat = async (user2) => {
    let mapList = [];
    chatlist.map((item) => {
      mapList.push(item.with);
    });

    if (mapList.indexOf(user2.id) == -1) {
      await Api.addNewChat(user, user2, chatlist);
    }
    // await Api.addNewChat(user, user2, chatlist);
    handleClose();
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: '#FFFFFF' }} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div
            onClick={() => addNewChat(item)}
            className="newChat--item"
            key={key}
          >
            <img className="newChat--itemavatar" src={item.avatar} alt=""></img>
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
