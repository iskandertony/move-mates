import React from "react";
import userStore from "../../store/user";
import CoachMain from "../coach/coach-main";
import ClientMain from "../client/clientMain";
import { observer } from "mobx-react";

const Main = observer(() => {
  const userRoles = {
    client: <ClientMain />,
    coach: <CoachMain />,
  };
  return <div>{userRoles[userStore.role] || null}</div>;
});

export default Main;
