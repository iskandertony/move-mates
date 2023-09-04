import React from "react";
import { Select } from "antd";

import "./style.scss";

const { Option } = Select;
const Reschedule = (props) => {
  const { onChange } = props;
  return (
    <div className={"reschedule_component"}>
      <Select
        placeholder={"Изменить"}
        onChange={onChange}
        style={{ width: "100%", marginTop: "20px" }}
        bordered={false}
        dropdownStyle={{ backgroundColor: "#f5f5f5", minWidth: "130px" }}
      >
        <Option value="reschedule">
          <span className={"dropdown_text"}>Перенести</span>
        </Option>
        <Option value="cancel">
          <span className={"dropdown_text_red"}>Отменить</span>
        </Option>
      </Select>
    </div>
  );
};

export default Reschedule;
