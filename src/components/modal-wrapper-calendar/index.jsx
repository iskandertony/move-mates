import React from "react";
import "./style.scss";
import Icon from "../icon";

function ModalCalendar(props) {
  const { show, setShow, children } = props;
  const handleClose = (e) => {
    setShow && setShow(false);
  };
  return (
    <div className={`modal_calendar container_mobile ${show ? "show" : ""}`}>
      <Icon name={"close"} onClick={handleClose} className={"exit"} />
      <div className="modal_content">{children}</div>
    </div>
  );
}

export default ModalCalendar;
