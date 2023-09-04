import React from "react";
import userStore from "../../store/user";
import CoachMain from "../coach/coach-main";
import ClientMain from "../client/clientMain";
import { observer } from "mobx-react";
import authStore from "../../store/auth";

const Main = observer(() => {
  return (
    <div>{authStore?.token === "null" ? <ClientMain /> : <CoachMain />}</div> // TODO временно поставил token
  );
});

export default Main;
