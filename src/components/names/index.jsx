import React from "react";
import ArrowBack from "../arrow-back";
import "./style.scss";
const Names = (props) => {
  const { name, title } = props;
  const handleBack = () => {
    window.history.go(-1);
  };
  return (
    <div className={"names"}>
      <div className={"flex alignC gap-5"} onClick={handleBack}>
        <ArrowBack />
        {!title && <div className={"text"}>Назад</div>}
      </div>
      {!title && <div className={"name"}>{name}</div>}
    </div>
  );
};

export default Names;
