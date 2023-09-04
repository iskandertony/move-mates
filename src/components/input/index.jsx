import React from "react";
import "./style.scss";
import Icon from "../icon";
const CustomInput = (props) => {
  const { name, text, title, nav, onClick, child, noNav } = props;
  return (
    <div className={"input"} onClick={onClick}>
      <div className={"flex alignC gap-10"}>
        {name && <Icon name={name} />}
        <div className={"text"}>
          {text} {child}
        </div>
      </div>
      {!noNav && <Icon name={nav ? nav : "arrow_rigth"} />}
    </div>
  );
};

export default CustomInput;
