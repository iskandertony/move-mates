import React from "react";
import { Form, TimePicker, Row, Col, Checkbox } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import ArrowBack from "../../components/arrow-back";
import "./style.scss";
import {useNavigate} from "react-router-dom";
import Names from "../../components/names";
const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TimetableWorkHours = () => {
    const navigate = useNavigate();
  const [checkedDays, setCheckedDays] = React.useState([]);

  const handleCheckboxChange = (day) => {
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter((checkedDay) => checkedDay !== day));
    } else {
      setCheckedDays([...checkedDays, day]);
    }
  };

  const handleCalendar = () => {
      navigate("/timetable/work-hours/calendar");
  }

  return (
    <div className="container_mobile pt-20 flex flex-column gap-20 timetable_work_hours back_ground">

        <Names name={"Рабочие часы"} />

      <div className={"text"}>
        Выберите дату и время, в которые вы работаете
      </div>
      <Form>
        {daysOfWeek.map((day, index) => (
          <Row gutter={16} key={index}>
            <Col className="gutter-row" span={6}>
              <Checkbox onChange={() => handleCheckboxChange(day)} />
            </Col>
            <Col className="gutter-row" span={4}>
              {day}
            </Col>
            <Col className="gutter-row" span={7}>
              <Form.Item name={`start_time_${index}`}>
                {checkedDays.includes(day) ? (
                  <TimePicker
                    placeholder="Начало"
                    minuteStep={30}
                    secondStep={60}
                    suffixIcon={<ClockCircleOutlined />}
                  />
                ) : (
                  "Недоступен"
                )}
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={7}>
              <Form.Item name={`end_time_${index}`}>
                {checkedDays.includes(day) ? (
                  <TimePicker
                    placeholder="Конец"
                    minuteStep={30}
                    secondStep={60}
                    suffixIcon={<ClockCircleOutlined />}
                  />
                ) : (
                  "Недоступен"
                )}
              </Form.Item>
            </Col>
          </Row>
        ))}

        <div className={"timetable_card"} onClick={handleCalendar}>Добавить</div>
      </Form>
    </div>
  );
};

export default TimetableWorkHours;
