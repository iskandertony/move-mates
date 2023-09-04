import React, { useState } from "react";
import { Form, Select, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Names from "../../../components/names";
import CustomInput from "../../../components/input";
const { Option } = Select;

const TimeTableIndividualClient = () => {
  const navigate = useNavigate();
  const [selectedSpecialization, setSelectedSpecialization] = useState([]);
  const [meetingType, setMeetingType] = useState(null);

  const handleTime = () => {
    navigate("/client/specialization/work-hours/calendar");
  };

  const handleSpecializationChange = (value) => {
    setSelectedSpecialization(value);
  };

  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
  };

  return (
    <div className={"container_mobile timetable_individual back_ground"}>
      <Names title={"Назад"} name={"Индивидуальная"} />

      <Form layout="vertical">
        <Form.Item label={"Тренер"}>
          <CustomInput text={"Kirill S."} />
        </Form.Item>
        <Form.Item label="Специализация">
          <Select
            mode="multiple"
            placeholder="Выбрать"
            onChange={handleSpecializationChange}
          >
            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>
          </Select>
        </Form.Item>

        {selectedSpecialization && selectedSpecialization.length > 0 && (
          <Form.Item label="Тип встречи">
            <Radio.Group onChange={handleMeetingTypeChange} value={meetingType}>
              <Radio value="online">Онлайн</Radio>
              <Radio value="offline">Офлайн</Radio>
            </Radio.Group>
          </Form.Item>
        )}

        {selectedSpecialization.length > 0 && meetingType === "offline" && (
          <Form.Item label="Адрес">
            <CustomInput text={"Введите адрес"} />
          </Form.Item>
        )}

        <Form.Item label="Дата и время">
          <CustomInput text={"Выбрать"} onClick={handleTime} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TimeTableIndividualClient;
