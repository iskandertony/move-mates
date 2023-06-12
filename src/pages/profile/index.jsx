import React from "react";
import ArrowBack from "../../components/arrow-back";
import Icon from "../../components/icon";
import { Form, Button, Input } from "antd";
import userStore from "../../store/user";

const Profile = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={"container_mobile pt-20"}>
      <div className={"flex flex-column alignC"}>
        <ArrowBack />
        <Icon name={"big_calendar"} />
        <div className={"text"}>Изменить изображение</div>
        <div className={"name"}>{userStore.user.userName}</div>
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item label="Полное имя" name="iska">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="anotherInput">
          <Input />
        </Form.Item>

        <Form.Item label="Phone number" name="anotherInput">
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Description" />
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
