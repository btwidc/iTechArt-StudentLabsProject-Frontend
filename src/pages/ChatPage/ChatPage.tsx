import React, { FC } from 'react';
import io from 'socket.io-client';

import Chat from '../../components/ChatComponents/Chat/Chat';
import './ChatPage.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const socket = io('http://localhost:4000');
socket.connect();

const ChatPage: FC = () => {
  const room = 'publicRoom';
  const user = useTypedSelector((state) => state.user);
  if (user) {
    socket.emit('join_chat', room);
  }

  return (
    <div className="chat-page-container">
      <Chat
        socket={socket}
        room={room}
        username={`${user.name} ${user.surname}`}
      />
    </div>
  );
};

export default ChatPage;
