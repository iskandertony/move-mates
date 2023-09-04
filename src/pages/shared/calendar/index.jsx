import React, { useState } from "react";
import { Form, Input, Select, Radio, TimePicker, Button } from "antd";

const AppointmentsAdd = () => {
  const [formType, setFormType] = useState("online");
  const { Option } = Select;

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  const handleFormSubmit = () => {
    // Обработка отправки формы
  };

  return (
    <div className="back_ground container_mobile pt-20">
      <Form layout="vertical">
        <Form.Item label="Тип тренировки">
          <Select placeholder="Выберите тип тренировки">
            <Option value="type1">Type 1</Option>
            <Option value="type2">Type 2</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Специализация">
          <Select placeholder="Выберите специализацию">
            <Option value="spec1">Spec 1</Option>
            <Option value="spec2">Spec 2</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Офлайн или Онлайн">
          <Radio.Group onChange={handleFormTypeChange} defaultValue="online">
            <Radio value="online">Онлайн</Radio>
            <Radio value="offline">Офлайн</Radio>
          </Radio.Group>
        </Form.Item>
        {formType === "offline" && (
          <>
            <Form.Item label="Название зала">
              <Input placeholder="Введите название зала" />
            </Form.Item>
            <Form.Item label="Адресс">
              <Input placeholder="Введите адресс" />
            </Form.Item>
          </>
        )}

        <Form.Item label="Время начала">
          <TimePicker format="HH:mm" />
        </Form.Item>
        <Form.Item label="Время окончания">
          <TimePicker format="HH:mm" />
        </Form.Item>
        <Form.Item label="Выбор клиента">
          <Select placeholder="Выберите клиента">
            <Option value="client1">Client 1</Option>
            <Option value="client2">Client 2</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleFormSubmit}>
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppointmentsAdd;
