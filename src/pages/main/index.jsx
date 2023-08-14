import React from "react";
import userStore from "../../store/user";
import CoachMain from "../coach/coach-main";
import ClientMain from "../client/clientMain";
import { observer } from "mobx-react";

const Main = observer(() => {
  return (
    <div>{userStore.role === "coach" ? <CoachMain /> : <CoachMain />}</div>
  );
});

export default Main;
