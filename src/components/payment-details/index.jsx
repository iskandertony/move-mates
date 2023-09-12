import React from "react";
import { Divider } from "antd";
import Avatar from "../avatar";

const PaymentDetailsComponent = () => {
  return (
    <div>
      <div>
        <div className={"flex flex-column justify-c"}>
          <Avatar />
          <div className={"title"}>Оплата прошла успешно!</div>
          <div className={"names"}>2000 сом</div>
        </div>
        <Divider />
        <div className={"flex flex-column gap-10"}>
          <div className={"flex justify-s alignC"}>
            <div className={"title"}>Ref Number</div>
            <div className={"text"}>000085752257</div>
          </div>
          <div className={"flex justify-s alignC"}>
            <div className={"title"}>Время оплаты</div>
            <div className={"text"}>25-02-2023, 13:22:16</div>
          </div>
          <div className={"flex justify-s alignC"}>
            <div className={"title"}>Способ оплаты</div>
            <div className={"text"}>PayPal</div>
          </div>
          <div className={"flex justify-s alignC"}>
            <div className={"title"}>Имя отправителя</div>
            <div className={"text"}>Антонио Роберто</div>
          </div>
        </div>
        <Divider />
        <div>
          <div className={"flex justify-s alignC"}>
            <div className={"title"}>Итоговая цена</div>
            <div className={"text"}>2000 сом</div>
          </div>
        </div>
      </div>
      <div className={"flex flex-column gap-10"}>
        <div className={"flex justify-s alignC"}>
          <div className={"title"}>Ref Number</div>
          <div className={"text"}>000085752257</div>
        </div>
        <div className={"flex justify-s alignC"}>
          <div className={"title"}>Время оплаты</div>
          <div className={"text"}>25-02-2023, 13:22:16</div>
        </div>
        <div className={"flex justify-s alignC"}>
          <div className={"title"}>Способ оплаты</div>
          <div className={"text"}>PayPal</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsComponent;
