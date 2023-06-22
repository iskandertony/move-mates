import React from "react";
import userStore from "../../store/user";
import CoachMain from "../coach-main";
import ClientMain from "../clientMain";

const Main = () => {
  return (
    <div>{userStore.role === "coach" ? <CoachMain /> : <ClientMain />}</div>
  );
};

export default Main;
