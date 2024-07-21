import React, { useState } from "react";
import Tab from "./Tab";
import "../assets/css/TabHorizontal.css";
import TabVertical from "./TabVertical";
interface Tabs {
  label: string;
  description: string;
}
interface Props {
  tabs: Tabs[];
}
const tabData = [
  { label: "Summer 2024", description: "OAUTILS RAHHHHH" },
  { label: "Fall 2023", description: "TODPS RAHHH" },
  { label: "Spring 2023", description: "cute little dashboards" },
];

const TabCarousel = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTagClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTagClick(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) =>
          index === 0 && index === activeTab ? (
            <TabVertical tabs={tabData} />
          ) : index === activeTab ? (
            <p>{tab.description}</p>
          ) : (
            <p></p>
          )
        )}
      </div>
    </div>
  );
};

export default TabCarousel;
