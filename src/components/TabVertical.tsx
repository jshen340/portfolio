import React, { useState } from "react";
import Tab from "./Tab";
import "../assets/css/TabVertical.css";
interface Tabs {
  label: string;
  description: React.ReactNode;
}
interface Props {
  tabs: Tabs[];
}
const TabVertical = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTagClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs-container-v">
      <div className="tabs-v">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTagClick(index)}
            isActive={index === activeTab}
            way={"vertical"}
          />
        ))}
      </div>
      <div className="tab-content-v">
        {tabs.map((tab, index) =>
          index === activeTab ? <p>{tab.description}</p> : <p></p>
        )}
      </div>
    </div>
  );
};

export default TabVertical;
