import TabHorizontal from "./TabHorizontal";
import "../assets/css/TabHorizontal.css";
import UPS from "../assets/text/ups";
const tabData = [
  { label: "Delta Air Lines", description: "this is tab number 2" },
  { label: "United Postal Service", description: <UPS /> },
  { label: "Walmart", description: "In progress" },
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
