import React from "react";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltIcon from "@material-ui/icons/PeopleAltRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import SendIcon from "@material-ui/icons/SendRounded";
import HelpIcon from "@material-ui/icons/HelpRounded";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="hash">#</span>
          Test channel name
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationIcon></NotificationIcon>
        <EditLocationIcon></EditLocationIcon>
        <PeopleAltIcon></PeopleAltIcon>
        <div className="chatHeader__right__search">
          <input placeholder="search"></input>
          <SearchIcon></SearchIcon>
        </div>
        <SendIcon></SendIcon>
        <HelpIcon></HelpIcon>
      </div>
    </div>
  );
};

export default ChatHeader;
