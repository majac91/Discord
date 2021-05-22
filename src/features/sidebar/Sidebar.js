import React from "react";
import SidebarChannel from "../SidebarChannel/SidebarChannel";

//icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignallCellIcon from "@material-ui/icons/SignalCellularAlt";
import Avatar from "@material-ui/core/Avatar";
import InfoOutlidenIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { auth } from "../../firebase";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut();
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <h1>sidebar</h1>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channels__headerWrapper">
          <div className="sidebar__channels-header">
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>
          <AddIcon className="sidebar__channels-addIcon" />
        </div>
        <div className="sidebar__channels__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignallCellIcon
          className="sidebar__voice-voiceIcon"
          fontSize="large"
        ></SignallCellIcon>
        <div className="sidebar__voice__info">
          <h3>Voice connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlidenIcon></InfoOutlidenIcon>
          <CallIcon></CallIcon>
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar
          onClick={signOut}
          src={user.photo}
          className="sidebar__profile-profileIcon"
        ></Avatar>
        <div className="sidebar__profile__info">
          <h3>{user.displayName}e</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon></MicIcon>
          <HeadsetIcon></HeadsetIcon>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
