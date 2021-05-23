import React from "react";
import Message from "../Message/Message";

//icons
import ChatHeader from "../ChatHeader/ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftCardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { selectChannelId, selectChannelName } from "../appSlice";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  return (
    <div className="chat">
      <ChatHeader channelName={channelName}></ChatHeader>
      <div className="chat__messages">
        <Message></Message>
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large"></AddCircleIcon>
        <form>
          <input
            className="chat__input-input"
            placeholder="message test channel"
          />
          <button className="chat__input-submitBtn" type="submit">
            Send btn
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftCardIcon fontSize="large"></CardGiftCardIcon>
          <GifIcon fontSize="large"></GifIcon>
          <EmojiIcon fontSize="large"></EmojiIcon>
        </div>
      </div>
    </div>
  );
};

export default Chat;
