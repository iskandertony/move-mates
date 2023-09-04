import React, { useState } from "react";
import { Select, Form, Button, Input, Checkbox, Switch } from "antd";
import Icon from "../../../components/icon";
import userStore from "../../../store/user";

import "./style.scss";
import Names from "../../../components/names";
import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/avatar";
import Qualification from "../../qualification";

const { Option } = Select;

const Profile = () => {
  const [isOfflineSelected, setIsOfflineSelected] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  const handleNavTimeTable = () => {
    navigate("/specialization");
  };

  const handleNavTime = () => {
    navigate("/setting/profile/work-hours");
  };

  const handleQualification = () => {
    navigate("/settings/qualification");
  };

  const handleCheckboxChange = (checkedValues) => {
    setIsOfflineSelected(checkedValues.includes("offline"));
  };

  return (
    <div className={"container_mobile pt-20 profile"}>
      <Names title={"Отменить"} />
      <div className={"flex flex-column alignC"}>
        <div className={"flex flex-column alignC"}>
          <Avatar />
          <div className={"text"}>Изменить изображение</div>
        </div>

        <div className={"name"}>{userStore.user.userName}</div>
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Введите ваше имя"
          name="fullName"
          rules={[{ required: true, message: "Пожалуйста, введите ваше имя!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пожалуйста, добавьте рабочие часы"
          name="additionalInput2"
        >
          <div className={"timetable_card"} onClick={handleNavTime}>
            <div className={"name"}> Рабочие часы </div>
            <Icon name={"arrow_rigth"} />
          </div>
        </Form.Item>

        <Form.Item
          label="Пожалуйста, добавьте специализацию"
          name="additionalInput2"
        >
          <div className={"timetable_card"} onClick={handleNavTimeTable}>
            <div className={"name"}>Специализация </div>
            <Icon name={"arrow_rigth"} />
          </div>
        </Form.Item>

        <Form.Item name="trainingType" label="Пожалуйста, добавьте формат ">
          <div className={"timetable_card"}>
            <Checkbox.Group onChange={handleCheckboxChange}>
              <Checkbox value="online">Онлайн</Checkbox>
              <Checkbox value="offline">Офлайн</Checkbox>
            </Checkbox.Group>
          </div>
        </Form.Item>

        {isOfflineSelected && (
          <>
            <Form.Item
              label="Название места"
              name="location"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, укажите название места!",
                },
              ]}
            >
              <Input placeholder="Укажите место" />
            </Form.Item>
            <Form.Item
              label="Адресс"
              name="address"
              rules={[
                { required: true, message: "Пожалуйста, укажите адресс!" },
              ]}
            >
              <Input placeholder="Укажите адресс" />
            </Form.Item>
          </>
        )}

        <Form.Item name="toggleTraining" label="Переключатель тренировки">
          <div className={"timetable_card"}>
            <div className={"title"}>Первая тренировка бесплатно </div>
            <Switch />
          </div>
        </Form.Item>

        <Form.Item
          label="Пожалуйста, добавьте количество лет опыта"
          name="additionalInput1"
          rules={[
            { required: true, message: "Пожалуйста, укажите опыт!" },
            {
              pattern: /^[0-9]+$/,
              message: "Опыт должен быть указан в числах!",
            },
          ]}
        >
          <Input placeholder={"Опыт"} />
        </Form.Item>

        <Form.Item
          label="Установите цену за час(индив/группа)"
          name="additionalInput2"
          rules={[
            { required: true, message: "Пожалуйста, укажите цену!" },
            {
              pattern: /^[0-9]+$/,
              message: "Цена должна быть указана в числах!",
            },
          ]}
        >
          <Input placeholder={"Цена"} />
        </Form.Item>
        <Form.Item
          label="Пожалуйста, добавьте какими языками владеете"
          name="selectOption1"
          rules={[{ required: true, message: "Пожалуйста, выберите язык!" }]}
        >
          <Select placeholder="Выбрать">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Пожалуйста, добавьте цели, с которыми вы можете помочь своим клиентам"
          name="goal"
          rules={[{ required: true, message: "Пожалуйста, укажите цель!" }]}
        >
          <Input placeholder={"Цель"} />
        </Form.Item>

        <Form.Item
          label="Пожалуйста, добавьте детали квалификации (название, описание, сертификаты)"
          name="additionalInput2"
        >
          <div className={"timetable_card"} onClick={handleQualification}>
            <div className={"name"}>Квалификация</div>
            <Icon name={"arrow_rigth"} />
          </div>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите email!" },
            { type: "email", message: "Введите корректный email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Пожалуйста, введите номер телефона!" },
            {
              pattern: /^[0-9]+$/,
              message: "Номер телефона должен содержать только цифры!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={"button"}>
            Готово
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={"button_exit"}>
            Выйти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
