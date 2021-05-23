import React, { useState, useEffect } from "react";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import db, { auth } from "../../firebase";

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
  console.log(db);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snap) => {
      setChannels(
        snap.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter new channel name");
    //if valid channel name, add it to db which triggers useEffect shapshot
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <h1>Channels</h1>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channels__headerWrapper">
          <div className="sidebar__channels-header">
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>
          <AddIcon
            onClick={handleAddChannel}
            className="sidebar__channels-addIcon"
          />
        </div>
        <div className="sidebar__channels__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
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
