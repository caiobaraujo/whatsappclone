import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import './ChatWindow.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user, data }) => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src="" alt="" />
          <div className="chatWindow--name"></div>
        </div>
        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? '200px' : '0px' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
            />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="chatWindow--pos"></div>
      </div>
    </div>
  );
};