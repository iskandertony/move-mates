import React from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";

import { Form } from "antd";
import CustomInput from "../../../components/input";
import Names from "../../../components/names";
const NewEventClient = () => {
  const navigate = useNavigate();
  const handleIndividual = () => {
    navigate("/client/specialization/individual");
  };

  const handleGroup = () => {
    navigate("/client/specialization/group");
  };

  return (
    <div className={"container_mobile  new_event_client back_ground"}>
      <Names title={"Назад"} name={"Тип тренировки"} />

      <Form.Item label={"Тренер"}>
        <CustomInput text={"Kirill S."} />
      </Form.Item>

      <div className={"flex flex-column gap-10"}>
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
    </div>
  );
};

export default NewEventClient;
