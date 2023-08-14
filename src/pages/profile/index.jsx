import React, { ChangeEvent, useRef, useState } from "react";
import { Select, Form, Button, Input } from "antd";
import ArrowBack from "../../components/arrow-back";
import Icon from "../../components/icon";
import userStore from "../../store/user";
import AvatarComponent from "../../components/avator-editor";
import "./style.scss";

const { Option } = Select;

const Profile = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  return (
    <div className={"container_mobile pt-20"}>
      <ArrowBack />
      <div className={"flex flex-column alignC"}>
        <div className={"flex flex-column alignC"}>
          <Icon name={"big_calendar"} />
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
        <Form.Item label="Полное имя" name="fullName">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone number" name="phoneNumber">
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item label="Select Option 1" name="selectOption1">
          <Select placeholder="Please select an option">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Option 2" name="selectOption2">
          <Select placeholder="Please select an option">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Additional Input 1" name="additionalInput1">
          <Input />
        </Form.Item>

        <Form.Item label="Additional Input 2" name="additionalInput2">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
