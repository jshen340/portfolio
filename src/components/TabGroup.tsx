import TabHorizontal from "./TabHorizontal";
const tabData = [
  { label: "Delta Air Lines", description: "this is tab number 1" },
  { label: "United Postal Service", description: "this is tab number 2" },
  { label: "??", description: "this is tab number 3" },
];
const TabGroup = () => {
  return <TabHorizontal tabs={tabData} />;
};

export default TabGroup;
