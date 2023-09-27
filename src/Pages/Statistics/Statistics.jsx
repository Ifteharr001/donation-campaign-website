
import { useState } from "react";
import { VictoryPie } from "victory";

const initialData = [
  { x: "Donation 1", y: 300 },
  { x: "Donation 2", y: 900 },
];

const Statistics = () => {
  const [myData, setMyData] = useState(initialData);

  // Function to add a new donation to the chart
  const addDonation = (amount) => {
    // Calculate the new data point
    const newDataPoint = {
      x: `Donation ${myData.length + 1}`,
      y: amount,
    };

    // Update the data with the new data point
    setMyData([...myData, newDataPoint]);
  };

  return (
    <div style={{ height: 620 }}>
      <VictoryPie data={myData} colorScale={["red", "green"]} />
      <button onClick={() => addDonation(200)}>Add Donation</button>
    </div>
  );
};

export default Statistics;
