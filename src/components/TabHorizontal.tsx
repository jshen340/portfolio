import React, { useState } from "react";
import Tab from "./Tab";
import "../assets/css/TabHorizontal.css";
import TabVertical from "./TabVertical";
import Summer24Delta from "../assets/text/summer24-delta";
import Spring23Delta from "../assets/text/spring23-delta";
import Fall23Delta from "../assets/text/fall23-delta";
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
    description: <Fall23Delta />,
  },
  { label: "Spring 2023", description: <Spring23Delta /> },
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
