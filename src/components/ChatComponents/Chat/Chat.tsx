import React, { FC, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

import './Chat.scss';

interface ChatProps {
  socket: Socket;
  room: string;
  username: string;
}

interface MessageType {
  author: string;
  message: string;
  time: string;
}

const Chat: FC<ChatProps> = ({ socket, room, username }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState<MessageType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setCurrentMessage(e.target.value);
  };

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentMessage !== '') {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now(),
        ).getMinutes()}`,
      };
      socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data: MessageType) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Live Chat</h3>
      </div>
      <div className="chat-body">
        <div className="message-container">
          {messageList.map((messageData) => {
            return (
              <div
                className="message"
                id={username === messageData.author ? 'you' : 'other'}>
                <div>
                  <div className="message-content">
                    <h3>{messageData.message}</h3>
                  </div>
                  <div className="message-meta">
                    <h3 className="time">{messageData.time}</h3>
                    <h3 className="author">{messageData.author}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Enter your message..."
          onChange={handleChange}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
