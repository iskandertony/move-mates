import React, { useState } from "react";
import { Select, Radio, Button, Input, Form, Switch, Checkbox } from "antd";
import ArrowBack from "../../components/arrow-back";
import "./style.scss";
import Names from "../../components/names";
const { Option } = Select;

const TimeTableGroup = () => {
  const [forms, setForms] = useState([{}]);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  const handleSpecializationChange = (value, index) => {
    const newForms = [...forms];
    newForms[index].specialization = value;
    setForms(newForms);
  };

  const handleFormatChange = (e, index) => {
    const newForms = [...forms];
    newForms[index].format = e.target.value;
    setForms(newForms);
  };

  const handleFreeChange = (checked, index) => {
    const newForms = [...forms];
    newForms[index].isFree = checked;
    setForms(newForms);
  };

  const handleApplyChange = (checked, index) => {
    const newForms = [...forms];
    newForms[index].applyToAll = checked;
    setForms(newForms);
  };

  return (
    <div className="container_mobile  timetable_group back_ground">
      <Names name={"Группа"} />

      <Form layout="vertical" className={"pt-20"}>
        {forms.map((form, index) => (
          <>
            <Form.Item label={`Специализация ${index + 1}`}>
              <Select
                value={form.specialization}
                onChange={(value) => handleSpecializationChange(value, index)}
                placeholder="Выберите специализацию"
              >
                <Option value="specialization1">Специализация 1</Option>
                <Option value="specialization2">Специализация 2</Option>
                <Option value="specialization3">Специализация 3</Option>
              </Select>
            </Form.Item>

            {form.specialization && (
              <div key={index} className={"card"}>
                <Form.Item label="Формат">
                  <Radio.Group
                    value={form.format}
                    onChange={(e) => handleFormatChange(e, index)}
                  >
                    <Radio value="online">Онлайн</Radio>
                    <Radio value="offline">Офлайн</Radio>
                    <Radio value="both">Оба</Radio>
                  </Radio.Group>
                </Form.Item>

                {(form.format === "offline" || form.format === "both") && (
                  <>
                    <Form.Item label="Название зала">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Адрес">
                      <Input />
                      <Checkbox
                        checked={form.applyToAll}
                        onChange={(e) =>
                          handleApplyChange(e.target.checked, index)
                        }
                      >
                        Применить адрес ко всем тренировкам
                      </Checkbox>
                    </Form.Item>
                  </>
                )}

                <Form.Item label="Фиксированная цена ">
                  <Input placeholder={"Напишите"} />
                </Form.Item>

                <Form.Item label="Мin-max кол-во человек">
                  <Input placeholder={"Напишите"} />
                </Form.Item>

                <Form.Item>
                  <div className={"flex alignC justify-s"}>
                    <div>Первая тренировка бесплатно</div>
                    <Switch
                      checked={form.isFree}
                      onChange={(checked) => handleFreeChange(checked, index)}
                    />
                  </div>
                </Form.Item>
              </div>
            )}
          </>
        ))}

        <Button type="primary" onClick={addForm}>
          Добавить еще
        </Button>
      </Form>
    </div>
  );
};

export default TimeTableGroup;
