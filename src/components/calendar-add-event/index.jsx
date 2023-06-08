import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Input,
  DatePicker,
  TimePicker,
  Switch,
  Form,
  Radio,
  Button,
  AutoComplete,
} from "antd";
import "./style.scss";
import { createAppointments, getAppointments, getClientsList } from "../../api";
import listUsers from "../../store/listUsers";
const { TextArea } = Input;

const CalendarAddEvent = (params) => {
  const { setShow } = params;
  const [clientList, setClientList] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  if (listUsers.users) {
    setClientList(listUsers.users);
  }

  console.log("list asdf", clientList);

  const onSearch = (searchText) => {
    const filteredList = clientList.filter((item) =>
      item.userName?.toLowerCase().includes(searchText.toLowerCase())
    );
    setClientList(filteredList);
  };

  const onSelect = (value, option) => {
    setSelectedClient(option.key);
  };
  const onFinish = async (values) => {
    const dateMoment = moment(values.date);
    const date = values.date.$D;
    const month = values.date.$M;
    const year = dateMoment.year();
    const startTime = values.time[0].date(date).month(month).year(year); //TODO ПОМЕНЯТЬ НАПИСАЛ ПЛОХО
    const endTime = values.time[1].date(date).month(month).year(year);
    const payload = {
      startOfAppointment: startTime.toISOString(),
      endOfAppointment: endTime.toISOString(),
      clientId: selectedClient,
      // createClientRequest: {
      //   name: values.client,
      //   email: `${values.client}@gmail.com`,
      //   phone: "+996 505 343 234",
      // },
      type: values.type,
      description: values.description,
    };
    try {
      const response = await createAppointments(payload);
      if (response && response?.status === 200) {
        // console.log("status 200 ,what response?", response);
      }
    } catch (error) {
      console.log("Error while trying to login:", error);
    }

    setShow(false);
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
          <AutoComplete
            options={
              !listUsers.loading &&
              clientList.map((client) => ({
                value: client.userName,
                key: client.id,
              }))
            }
            style={{ width: "100%" }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Select a client"
          />
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
