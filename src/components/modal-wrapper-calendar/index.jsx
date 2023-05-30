import React from "react";
import "./style.scss";

function ModalCalendar(props) {
  const { show, setShow, children } = props;
  const handleClose = (e) => {
    // if (e.target.className.includes("modal_calendar")) { TODO ПРодолжать делать модалку в календаре
    //   setShow && setShow(false);
    // }
  };
  return (
    <div
      className={`modal_calendar container_mobile ${show ? "show" : ""}`}
      onClick={handleClose}
    >
      <div className="modal_content">{children}</div>
    </div>
  );
}

export default ModalCalendar;
