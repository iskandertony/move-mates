import React, { useState } from "react";

import Icon from "../../components/icon";
import CardSubscription from "../../components/card-subscription";
import Transactions from "../../components/transactions ";

import "./style.scss";
const Payment = () => {
  const [role, setRole] = useState("payment");
  return (
    <div className="container_mobile back_ground pay">
      <div className="payment_title">Платежи</div>
      <div className="payment_text">
        Страница платежей предоставляет обзор ваших заработков и истории
        платежей.
      </div>
      <div className="role-selection">
        <div
          onClick={() => setRole("payment")}
          className={`chose ${role === "payment" && "role-active"}`}
        >
          <Icon name={"payment"} />
          Платежи
        </div>
        <div
          onClick={() => setRole("subscription")}
          className={`chose ${role === "subscription" && "role-active"}`}
        >
          <Icon name={"subscription"} />
          Подписки
        </div>
        <div></div> {/*нужен для space-beetwen*/}
      </div>
      <div className="role-line">
        <div className={role === "payment" && "line-active payment"}></div>
        <div
          className={role === "subscription" && "line-active subscription"}
        ></div>
      </div>

      {role === "payment" ? (
        <>
          <div className="flex alignC justify-s mb-10">
            <div className={"name"}>Последние транзакции</div>
            <div>
              <Icon name={"calendar"} />
            </div>
          </div>
          <Transactions />
          <div className={"name"}>Годовой финансовый отчет</div>
        </>
      ) : (
        <>
          <div className="subscription_title">Выберите премиум-подписку</div>
          <CardSubscription />
        </>
      )}
    </div>
  );
};

export default Payment;
