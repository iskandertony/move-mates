import React from "react";

import CardSubscription from "../../../components/card-subscription";

import "./style.scss";

import Names from "../../../components/names";
import Tab from "../../../components/tab";
import Transactions from "../../../components/transactions ";


const Payment = () => {
  return (
    <div className="container_mobile back_ground pay">
      <Names title={"Назад"} name={"Платежи"} />

      <Tab
        name={"Доход"}
        subName={"Расход"}
        content={<Transactions />}
        subContent={<CardSubscription />}
      />
    </div>
  );
};

export default Payment;
