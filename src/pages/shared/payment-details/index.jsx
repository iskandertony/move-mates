import React from "react";
import Names from "../../../components/names";
import PaymentDetailsComponent from "../../../components/payment-details";

const PaymentDetails = () => {
  return (
    <div className={"payment_details back_ground container_mobile"}>
      <Names title={"Назад"} name={"Детали транзакции"} />
        <PaymentDetailsComponent/>
    </div>
  );
};

export default PaymentDetails;
