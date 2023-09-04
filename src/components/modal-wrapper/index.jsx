
import Icon from "../icon";

import "./style.scss";

const ModalWrapper = (props) => {
  const { children, isShown, setIsShown, className, style } = props;

  const handleClose = (e) => {
    if (e.target.className.includes("modal-cancel-bg")) {
      setIsShown && setIsShown(false);
    }
  };
  return (
    <div
      className={"modal-bg"}
      style={isShown ? {} : { display: "none" }}
      onClick={handleClose}
    >
      <div className={`modal-wrapper ${className}`} style={style}>
        {setIsShown && (
          <Icon
            name="close"
            className="close"
            hover
            onClick={() => setIsShown(false)}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
