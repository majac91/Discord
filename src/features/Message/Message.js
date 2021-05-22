import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Message = () => {
  return (
    <div className="message">
      <Avatar></Avatar>
      <div className="message__info">
        <h4>
          username
          <span className="message__timestamp">timestamp</span>
        </h4>
        <p>
          this is a messagethis is a messagethis is a messagethis is a
          messagethis is a messagethis is a messagethis is a messagethis is a
          messagethis is a messagethis is a messagethis is a message
        </p>
      </div>
    </div>
  );
};

export default Message;
