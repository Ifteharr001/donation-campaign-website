import { useState } from "react";
import ReactApexChart from "react-apexcharts";



const Statistics = () => {
  const [state, setState] = useState({
    series: [44, 55],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Your Donation", "Total Donation"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

       
  return (
    <div className="pt-[200px] pl-[50px] md:pl-[500px]">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={380}
      />
      ;
    </div>
  );
};

export default Statistics;
