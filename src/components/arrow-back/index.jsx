import React from "react";
import Icon from "../icon";

const ArrowBack = () => {
  const handleBack = () => {
    window.history.go(-1);
  };

  return <Icon name={"back"} onClick={handleBack} />;
};

export default ArrowBack;
