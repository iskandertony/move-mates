import React from "react";
import moment from "moment";
import {
  Input,
  DatePicker,
  TimePicker,
  Switch,
  Form,
  Radio,
  Button,
} from "antd";
import "./style.scss";
import { createAppointments, getAppointments } from "../../api";
const { TextArea } = Input;

const CalendarAddEvent = () => {
  const onFinish = async (values) => {
    const payload = {
      startOfAppointment: moment(values.time[0].$d).parseZone(),
      endOfAppointment: moment(values.time[1].$d).parseZone(),
      // clientId: values.client,
      createClientRequest: {
        name: "iska",
        email: "df@gmail.com",
        phone: "+996 505 343 234",
      },
      type: values.type,
      description: values.description,
    };
    try {
      const response = await createAppointments(payload);
      if (response && response?.status === 200) {
        console.log("status 200 ,what response?", response);
      }
    } catch (error) {
      console.log("Error while trying to login:", error);
    }
  };

  return (
    <div className=" calendar_add_event">
      <div className="name pt-20 flex justify-c alignC">
        Добавить новое событие
      </div>
      <Form onFinish={onFinish}>
        <Form.Item
          name="nameEvent"
          rules={[{ required: true, message: "Please select a date!" }]}
        >
          <Input placeholder="name" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="client"
          rules={[{ required: true, message: "Please select a date!" }]}
        >
          <Input placeholder="Client Id" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[{ required: true, message: "Please select a date!" }]}
        >
          <DatePicker placeholder="Select date" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="time"
          rules={[
            { required: true, message: "Please select start and end time!" },
          ]}
        >
          <TimePicker.RangePicker
            placeholder={["Start time", "End time"]}
            format="HH:mm"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item name="reminder" valuePropName="checked">
          <div className={"flex justify-s"}>
            <div className={"text"}>Напомнить мне и клиенту</div>
            <Switch defaultChecked />
          </div>
        </Form.Item>

        <Form.Item
          name="type"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Radio.Group>
            <Radio.Button value="online">Online</Radio.Button>
            <Radio.Button value="offline">Offline</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Создать событие
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CalendarAddEvent;
