import React from "react";

import Icon from "../icon";
import Hamburger from "../hamburger";

import "./style.scss";
const Header = () => {
  return (
    <div className="header ">
      <div className="header_left">
        <Hamburger />
      </div>
      <div className="header_right">
        <Icon name={"notification"} />
      </div>
    </div>
  );
};

export default Header;
