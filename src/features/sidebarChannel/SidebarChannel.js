import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../appSlice";

const SidebarChannel = ({ channelName, id }) => {
  const dispatch = useDispatch();
  const handleChannelInfoChange = () => {
    dispatch(
      setChannelInfo(
        //payload
        {
          channelId: id,
          channelName: channelName,
        }
      )
    );
  };

  return (
    <div onClick={handleChannelInfoChange} className="sidebarChannel">
      {channelName && (
        <h4>
          <span className="hash">#</span>
          {channelName}
        </h4>
      )}
    </div>
  );
};

export default SidebarChannel;
