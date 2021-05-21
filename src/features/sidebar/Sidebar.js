import React from "react";
import SidebarChannel from "../sidebarChannel/SidebarChannel";

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

const Sidebar = () => {
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
          src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="sidebar__profile-profileIcon"
        ></Avatar>
        <div className="sidebar__profile__info">
          <h3>@UserName</h3>
          <p>#userId</p>
        </div>
        <div className="sidebar-profile__profileIcons">
          <MicIcon></MicIcon>
          <HeadsetIcon></HeadsetIcon>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
