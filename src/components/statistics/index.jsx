import React from "react";
import Icon from "../icon";
import Rectangle from "../../assets/imgs/rectangle.png";
import "./style.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const CardStatistics = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/settings/profile");
  };
  return (
    <div className="statistic">
      <div className={"flex justify-s alignC TextA-c gap-10 container_mobile"}>
        <div className={"card_statistic text"}>
          htttp:\\move.maters/coach12563
        </div>
        <div className={"card_statistic_copy"}>
          <Icon name={"copy"} className={"icon"} />
        </div>
      </div>

      <div className={"text text_statistic"}>
        Скопируйте и отправьте ссылку своему клиенту.
      </div>

      <div className={"content"}>
        <div className={"test"}>
          <img src={Rectangle} alt="" />
        </div>
        <div className={"test2"}>
          <div className={"bend"}>
            <div className="demo">
              <Icon name={"rectangle"} />
            </div>
          </div>
          <div className={"test3"}>
            <div className={"title"}>Заполните свой профиль</div>
            <div className={"text"}>
              Укрепление доверия клиента: Полный и всесторонний профиль помогает
              создать доверие и уверенность среди потенциальных клиентов.
            </div>
            <Button onClick={handleNav}>Начать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStatistics;
