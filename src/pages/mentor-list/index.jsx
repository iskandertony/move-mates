import React, { useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";

import listUsers from "../../store/listUsers";
import { NavLink } from "react-router-dom";

import "./style.scss";
import { observer } from "mobx-react";
import Icon from "../../components/icon";
import Avatar from "../../components/avatar";
import Names from "../../components/names";
import TabCircle from "../../components/tab-circle";

const { Option } = Select; // Деструктурируем Option из Select
const MentorList = observer((props) => {
  const { mode, multi, name } = props;
  const [search, setSearch] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [activeTab, setActiveTab] = useState("");

  let filteredList = [];

  const handleClientClick = (item) => {
    if (mode === "display") {
    } else if (mode === "select") {
      if (selectedClients.includes(item.id)) {
        setSelectedClients((prev) =>
          prev.filter((clientId) => clientId !== item.id)
        );
      } else {
        if (multi) {
          setSelectedClients((prev) => [...prev, item.id]);
        } else {
          setSelectedClients([item.id]);
        }
      }
    }
  };
  if (listUsers.users) {
    filteredList = listUsers.users.filter((item) =>
      item.userName?.toLowerCase().includes(search.toLowerCase())
    );
  }
  const handleSubmit = () => {
    // Здесь вы можете обработать отправку формы, например:
    console.log({
      selectedSpecialist,
      selectedLanguage,
      search,
    });
  };

  if (listUsers.usersLoading) return <Spin />;
  return (
    <div className={"mentor_list"}>
      <Names name={name} title={"Назад"} />
      <Form onFinish={handleSubmit}>
        <Form.Item name="search">
          <Input
            prefix={<Icon name={"search"} />}
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Item>
        <TabCircle
          name={"Тренеры"}
          subName={"Психологи"}
          onClick={setActiveTab}
          activeTab={activeTab}
        />

        {activeTab === "Тренеры" && (
          <>
            <Form.Item label="Специализация" name="trainerSpecialist">
              <Select
                value={selectedSpecialist}
                onChange={(value) => setSelectedSpecialist(value)}
                placeholder="Выберите специалиста тренера"
              >
                <Option value="specialist1">Специалист 1</Option>
                <Option value="specialist2">Специалист 2</Option>
                <Option value="specialist3">Специалист 3</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Язык" name="language">
              <Select
                value={selectedLanguage}
                onChange={(value) => setSelectedLanguage(value)}
                placeholder="Выберите язык"
              >
                <Option value="english">Английский</Option>
                <Option value="russian">Русский</Option>
                <Option value="spanish">Испанский</Option>
                {/* ... Другие опции */}
              </Select>
            </Form.Item>
          </>
        )}
        {activeTab === "Психологи" && (
          <>
            <Form.Item label="Специализация" name="psychologistSpecialist">
              <Select
                value={selectedSpecialist}
                onChange={(value) => setSelectedSpecialist(value)}
                placeholder="Выберите специалиста психолога"
              >
                <Option value="specialist1">Специалист 1</Option>
                <Option value="specialist2">Специалист 2</Option>
                <Option value="specialist3">Специалист 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Язык" name="language">
              <Select
                value={selectedLanguage}
                onChange={(value) => setSelectedLanguage(value)}
                placeholder="Выберите язык"
              >
                <Option value="english">Английский</Option>
                <Option value="russian">Русский</Option>
                <Option value="spanish">Испанский</Option>
                {/* ... Другие опции */}
              </Select>
            </Form.Item>
          </>
        )}

        {listUsers.usersLoading && <Spin />}
        {!listUsers.usersLoading &&
          filteredList.map((item, id) => (
            <div
              key={id}
              onClick={() => handleClientClick(item)}
              className={`card_client ${
                mode === "select" ? "select_mode" : ""
              } ${selectedClients.includes(item.id) ? "selected" : ""}`}
            >
              {mode === "display" && (
                <NavLink to={`/client/${item.id}`} className="nav">
                  <Avatar />
                  <div>
                    <div className="title">{item.userName}</div>
                    <div className="text">item.place</div>
                  </div>
                </NavLink>
              )}
              {mode === "select" && (
                <>
                  <div className={"flex alignC gap-10"}>
                    <Avatar />
                    <div>
                      <div className="title">{item.userName}</div>
                      <div className="text">item.place</div>
                    </div>
                  </div>
                  {selectedClients.includes(item.id) && <Icon name="check" />}
                </>
              )}
            </div>
          ))}
        {/*<Form.Item>*/}
        {/*    <Button type="primary" htmlType="submit">*/}
        {/*        Отправить*/}
        {/*    </Button>*/}
        {/*</Form.Item>*/}
      </Form>
    </div>
  );
});

export default MentorList;
