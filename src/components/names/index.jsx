import React from "react";
import ArrowBack from "../arrow-back";
import "./style.scss";
const Names = (props) => {
  const { name, arrow, noArrow, className, title } = props;
  const handleBack = () => {
    window.history.go(-1);
  };
  return (
    <div className={"names"}>
      <div className={"names_content"} onClick={handleBack}>
        {noArrow ? "" : <ArrowBack />}
        {arrow ? "" : <div className={`title ${className} `}> {title}</div>}
      </div>
      {arrow ? "" : <div className={"name"}> {name}</div>}
    </div>
  );
};

export default Names;
