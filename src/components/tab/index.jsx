import React, { useState } from "react";
import "./style.scss";

const Tab = (props) => {
  const { name, subName, content, subContent } = props;
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
    <div>
      <div className="flex tabs background-color justify-s mb-20">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabs_title title ${
              activityStatus === tab ? "active" : ""
            }`}
            onClick={() => setActivityStatus(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default Tab;
