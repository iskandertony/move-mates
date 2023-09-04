import React, { useState } from "react";
import { DatePicker, TimePicker, Button, Row, Col, List, Card } from "antd";
import { ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import Calendar from "react-calendar";
import { observer } from "mobx-react";
import calendarStore from "../../store/calendarBooking";

const CalendarBooking = observer(() => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (date) => {
    const dateStr = moment(date).format("DD.MM.YYYY");
    const foundDate = selectedDates.find((d) => d.dateStr === dateStr);

    if (!foundDate) {
      setSelectedDates([
        ...selectedDates,
        { dateStr, dayOfWeek: moment(date).format("dddd") },
      ]);
    }
  };

  const handleDelete = (dateStr) => {
    setSelectedDates(selectedDates.filter((date) => date.dateStr !== dateStr));
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} />
      {selectedDates.map((selectedDate, index) => (
        <Card key={index} style={{ marginBottom: 10 }}>
          <h2>
            Выбранная дата: {selectedDate.dateStr}
            День недели: {selectedDate.dayOfWeek}
          </h2>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(selectedDate.dateStr)}
          >
            Удалить
          </Button>
        </Card>
      ))}

      <Button block>Выбрать</Button>
    </div>
  );
});

export default CalendarBooking;
