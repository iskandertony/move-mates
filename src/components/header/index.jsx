import React, { useState } from "react";
import "./style.scss";
import Icon from "../icon";
import DrawerMenu from "../drawer";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header ">
      <div className="header_left">
        <Icon name={"hambergermenu"} onClick={() => setOpen(true)} />
      </div>
      <div className="header_right">
        <Icon name={"notification"} />
        <Icon name={"profilecircle"} className="header_profile" />
      </div>
      <DrawerMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
