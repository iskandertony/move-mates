import React, { useState } from "react";
import Icon from "../../components/icon";
import Names from "../../components/names";
import { Button, Form, Input, Select } from "antd";

import "./style.scss";
const { Option } = Select;
const Specialization = () => {
  const [selectedIndividualTrainings, setSelectedIndividualTrainings] =
    useState([]);
  const [selectedGroupTrainings, setSelectedGroupTrainings] = useState([]);
  const [form] = Form.useForm();
  const individualTrainings = ["Training 1", "Training 2", "Training 3"];
  const groupTrainings = ["Group Training 1", "Group Training 2"];

  const handleIndividualChange = (value) => {
    setSelectedIndividualTrainings(value);
  };

  const handleGroupChange = (value) => {
    setSelectedGroupTrainings(value);
  };

  const handleRemoveIndividualTraining = (trainingToRemove) => {
    setSelectedIndividualTrainings((prevTrainings) =>
      prevTrainings.filter((training) => training !== trainingToRemove)
    );
  };

  const handleRemoveGroupTraining = (trainingToRemove) => {
    setSelectedGroupTrainings((prevTrainings) =>
      prevTrainings.filter((training) => training !== trainingToRemove)
    );
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={"container_mobile timetable back_ground"}>
      <Names title={"Назад"} name={"Специализации"} />
      <Form form={form} onFinish={onFinish}>
        <div>
          <div className={"flex alignC gap-10 timetable_card"}>
            <div className={"flex alignC gap-10 content"}>
              <Icon name={"personalcard"} />
              <div className={"name"}>Индивидуальная</div>
            </div>

            <Select
              showSearch={false}
              className="hide-selected"
              mode="multiple"
              style={{ width: "100%" }}
              onChange={handleIndividualChange}
              value={selectedIndividualTrainings}
            >
              {individualTrainings.map((training) => (
                <Option key={training}>{training}</Option>
              ))}
            </Select>
          </div>
          <div>
            {selectedIndividualTrainings.map((training) => (
              <div
                key={training}
                className={"timetable_card flex alignC gap-10"}
              >
                {training}
                <Icon
                  name="trash"
                  onClick={() => handleRemoveIndividualTraining(training)}
                />
              </div>
            ))}
          </div>
          <div className={"flex alignC gap-10 timetable_card"}>
            <div className={"flex alignC gap-10 content"}>
              <Icon name={"personalcard"} />
              <div className={"name"}>Групповая</div>
            </div>

            <Select
              showSearch={false}
              className="hide-selected"
              mode="multiple"
              style={{ width: "100%" }}
              onChange={handleGroupChange}
              value={selectedGroupTrainings}
            >
              {groupTrainings.map((training) => (
                <Option key={training}>{training}</Option>
              ))}
            </Select>
          </div>

          <div>
            {selectedGroupTrainings.map((training) => (
              <>
                <div
                  key={training}
                  className={"timetable_card flex alignC gap-10"}
                >
                  {training}
                  <Icon
                    name="trash"
                    onClick={() => handleRemoveGroupTraining(training)}
                  />
                </div>

                <Form.Item
                  label="Максимальное кол-во людей"
                  name="maxPeople"
                  rules={[
                    {
                      required: true,
                      message:
                        "Пожалуйста, введите максимальное количество людей!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </>
            ))}
          </div>
        </div>
        <Button type="primary" htmlType="submit" className={"button_done"}>
          Готово
        </Button>
      </Form>
    </div>
  );
};

export default Specialization;
