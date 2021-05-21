import React from "react";
import ChatHeader from "../chatHeader/ChatHeader";
const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader></ChatHeader>
      <div className="chat__messages"></div>
      <div className="chat__input"></div>
    </div>
  );
};

export default Chat;
