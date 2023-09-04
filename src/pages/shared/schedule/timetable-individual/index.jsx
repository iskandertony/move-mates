import React from "react";
import { Form, Select } from "antd";
import Names from "../../../../components/names";
import CustomInput from "../../../../components/input";
import { useNavigate } from "react-router-dom";
import "./style.scss";
const { Option } = Select;

const TimeTableIndividualMentor = () => {
  const navigate = useNavigate();
  const handleTime = () => {
    navigate("/specialization/work-hours/calendar");
  };

  const handleClient = () => {
    navigate("/specialization/individual/chose-client");
  };
  return (
    <div className={"container_mobile timetable_individual back_ground"}>
      <Names name={"Индивидуальная"} />

      <Form layout="vertical">
        <Form.Item label="Специализация">
          <Select mode="multiple" placeholder="Выбрать">
            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Дата и время">
          <CustomInput text={"Выбрать"} onClick={handleTime} />
        </Form.Item>

        <Form.Item label="Клиент">
          <CustomInput text={"Выбрать"} onClick={handleClient} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TimeTableIndividualMentor;
