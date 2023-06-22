import React, { useEffect, useState } from "react";
import moment from "moment";
import { DatePicker, TimePicker, Form, Button } from "antd";

const test = (params) => {
  const onFinish = async (values) => {
    console.log("values", values);
    console.log("values date", values.date);
    const dateMoment = moment(values.date);
    const date = values.date.$D;
    const month = values.date.$M;
    const year = dateMoment.year();
    const startTime = values.time[0].date(date).month(month).year(year);
    const endTime = values.time[1].date(date).month(month).year(year);
    const startOfAppointment = startTime.toISOString();
    const endOfAppointment = endTime.toISOString();
  };

  return (
    <div className=" calendar_add_event">
      <div className="name pt-20 flex justify-c alignC">
        Добавить новое событие
      </div>
      <Form onFinish={onFinish}>
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

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Создать событие
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default test;
