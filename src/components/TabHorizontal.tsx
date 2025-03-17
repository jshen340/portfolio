import React, { useState } from "react";
import Tab from "./Tab";
import "../assets/css/TabHorizontal.css";
import TabVertical from "./TabVertical";
import Summer24Delta from "../assets/text/summer24-delta";
interface Tabs {
  label: string;
  description: string;
}
interface Props {
  tabs: Tabs[];
}
const tabData = [
  { label: "Summer 2024", description: <Summer24Delta /> },
  {
    label: "Fall 2023",
    description:
      "TODPS RAHHH and here are just some filler words,  i need to see how it looks like on the screen with all of the words together",
  },
  { label: "Spring 2023", description: "cute little dashboards" },
];

const TabHorizontal = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

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
            way={"horizontal"}
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

export default TabHorizontal;
