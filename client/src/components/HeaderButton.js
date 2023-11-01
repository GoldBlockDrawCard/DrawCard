import React from "react";

const HeaderButton = (props) => {
  return (
    <div>
      <span className="top-key"></span>
      <span className="text">{props.name}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </div>
  );
};

export default HeaderButton;
