import React, { useState } from "react";
import "./style.scss";

const TabCircle = (props) => {
  const { name, subName, content, subContent, activeTab, onClick } = props;
  const [activityStatus, setActivityStatus] = useState(name);
  const tabs = [name, subName];
  const renderContent = () => {
    switch (activityStatus) {
      case name:
        return content;
      case subName:
        return subContent;
      default:
        return null;
    }
  };

  return (
    <div className="tabs_circle background-color  mb-20">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`name title ${activeTab === tab ? "active" : ""}`}
          onClick={() => onClick(tab)}
        >
          {tab}
        </div>
      ))}

      {renderContent()}
    </div>
  );
};

export default TabCircle;
