import React, { useState } from "react";

import Icon from "../../components/icon";
import CardSubscription from "../../components/card-subscription";
import Transactions from "../../components/transactions ";

import "./style.scss";
import Hamburger from "../../components/hamburger";
import Names from "../../components/names";
import Tab from "../../components/tab";
const Payment = () => {
  const [role, setRole] = useState("payment");
  return (
    <div className="container_mobile back_ground pay">
      <Names name={"Платежи"} />

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
