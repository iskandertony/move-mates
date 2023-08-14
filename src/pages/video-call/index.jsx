import React from "react";
import { Button } from "antd";
import ArrowBack from "../../components/arrow-back";
import Icon from "../../components/icon";
import "./style.scss";
const VideoCall = () => {
  return (
    <div className={"container_mobile video_call pt-20"}>
      <div className={"flex justify-s"}>
        <div className={"flex alignC gap-10"}>
          <ArrowBack />
          <div>
            <div>name of traning</div>
            <div className={"flex alignC gap-5"}>
              <Icon name={"small_calendar"} />{" "}
              <span className={"text"}>Rec (time)</span>
            </div>
          </div>
        </div>
        <div className={"flex alignC gap-10"}>
          <div className={"flex alignC"}>
            <Icon name={"small_calendar"} />
            <div className={"text"}>2</div>
          </div>
          <Icon name={"chat"} />
        </div>
      </div>
      <div className="video_content">
        <div className={"video_coach"}>video camera coach</div>
        <div className={"video_client"}>video camera clients</div>
      </div>
      <div className={"card"}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
};

export default VideoCall;
