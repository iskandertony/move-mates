import React, { useState } from "react";
import "./style.scss";
import { Button, Input, Modal } from "antd";
const ModalCancel = (props) => {
  const { show } = props;
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(show);
  const [reasonModalVisible, setReasonModalVisible] = useState(false);
  const [cancellationReason, setCancellationReason] = useState("");
  const handleConfirmYes = () => {
    setConfirmModalVisible(false);
    setReasonModalVisible(true);
  };

  const handleConfirmNo = () => {
    setConfirmModalVisible(false);
  };

  const handleReasonSubmit = () => {
    console.log("Причина отмены: ", cancellationReason);
    // Здесь вы можете обработать причину отмены (например, отправить на сервер)
    setReasonModalVisible(false);
  };
  return (
    <div>
      <Modal
        title="Вы уверены, что хотите отменить?"
        open={isConfirmModalVisible}
        onCancel={handleConfirmNo}
        footer={[
          <Button key="no" onClick={handleConfirmNo}>
            Нет
          </Button>,
          <Button key="yes" type="primary" onClick={handleConfirmYes}>
            Да
          </Button>,
        ]}
      >
        Отменять сессию больше двух раз в месяц нельзя. Оплата производиться не
        будет.
      </Modal>

      <Modal
        title="Перед отменой"
        open={reasonModalVisible}
        onCancel={() => setReasonModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setReasonModalVisible(false)}>
            Назад
          </Button>,
          <Button key="submit" type="primary" onClick={handleReasonSubmit}>
            Отправить
          </Button>,
        ]}
      >
        <div>Напишите небольшое объяснение.</div>
        <Input
          value={cancellationReason}
          onChange={(e) => setCancellationReason(e.target.value)}
          placeholder="Напишите причину..."
        />
      </Modal>
    </div>
  );
};

export default ModalCancel;
