import React from "react";
import ClientList from "../../../components/client-list";
import Names from "../../../components/names";

const TimeTableChoseGroupClient = () => {
  return (
    <div className={"container_mobile back_ground"}>
      <Names name={"Ваши клиенты"} />
      <ClientList mode={"select"} multi />
    </div>
  );
};

export default TimeTableChoseGroupClient;
