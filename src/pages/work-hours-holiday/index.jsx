import React, { useState } from "react";
import MyCalendar from "../../components/calendar";
import Names from "../../components/names";
import WorkHoursHolidayComponent from "../../components/work-hours-holiday";
import moment from "moment";
import { Button } from "antd";
import "./style.scss";
const WorkHoursHoliday = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(moment(newDate));
  };

  const closeDetails = () => {
    setSelectedDate(null);
  };
  return (
    <div className={" work_hours_holiday "}>
      <div className={"back_ground container_mobile"}>
        <Names name={"Выходные дни"} title={"Назад"} />
        <MyCalendar onDateChange={handleDateChange} />
        {selectedDate && (
          <WorkHoursHolidayComponent
            selectedDate={selectedDate}
            onClose={closeDetails}
          />
        )}

        {selectedDate && <Button className={"button_done"}>Сохранить</Button>}
      </div>
    </div>
  );
};

export default WorkHoursHoliday;
