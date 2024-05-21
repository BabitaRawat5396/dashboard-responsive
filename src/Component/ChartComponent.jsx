import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../Data/ChartData";

const ChartComponent = () => {
  const [chartData] = useState({
    series: [
      {
        data: data.map((d) => d.value),
        fill: {
          colors: ["#011627"],
        },
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#011627"],
      },
      fill: {
        colors: ["#011627"],
      },
      labels: data.map((d) => d.date),
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={window.innerWidth >= 1024 ? 268 : 218}
      />
    </div>
  );
};

export default ChartComponent;
