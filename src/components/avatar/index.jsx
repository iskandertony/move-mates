import React from "react";
import avatar from "../../assets/Imgs/avatar.gif";
import "./style.scss";
const Avatar = () => {
  return (
    <div className={""}>
      <img src={avatar} alt="" className={"avatar"} />
    </div>
  );
};

export default Avatar;
