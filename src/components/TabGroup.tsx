import TabHorizontal from "./TabHorizontal";
import "../assets/css/TabHorizontal.css";
const tabData = [
  // { label: "x", description: "<Summer24Delta /> " },
  { label: "Delta Air Lines", description: "this is tab number 1" },
  { label: "United Postal Service", description: "this is tab number 2" },
  { label: "??", description: "this is tab number 3" },
];
const TabGroup = () => {
  return (
    <>
      <div className="background">
        <h2 className="h2">Experience</h2>

        <div className="backdrop">
          <TabHorizontal tabs={tabData} />
        </div>
      </div>
    </>
  );
};

export default TabGroup;
