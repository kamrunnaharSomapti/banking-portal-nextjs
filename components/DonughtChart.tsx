"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DonughtChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Account Balance",
        data: [1250, 1000, 500],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["bank1", "bank2", "bank3"],
  };
  return <Doughnut data={data} />;
};

export default DonughtChart;
