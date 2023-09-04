import React from "react";

import Names from "../../../../components/names";
import CustomInput from "../../../../components/input";

import "./style.scss";
import { useNavigate } from "react-router-dom";
const NewEventMentor = () => {
  const navigate = useNavigate();
  const handleIndividual = () => {
    navigate("/mentor/specialization/individual");
  };

  const handleGroup = () => {
    navigate("/mentor/specialization/group");
  };

  return (
    <div className={"container_mobile event back_ground"}>
      <Names title={"Назад"} name={"Новое событие"} />

      <CustomInput
        text={"Индивидуальная "}
        name={"personalcard"}
        onClick={handleIndividual}
      />

      <CustomInput
        text={"Групповая"}
        name={"personalcard"}
        onClick={handleGroup}
      />
    </div>
  );
};

export default NewEventMentor;
