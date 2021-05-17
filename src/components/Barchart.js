import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = ({ datatograph }) => {
  const state = {
    labels: [
      "00:00 AM",
      "03:00 AM",
      "06:00 AM",
      "09:00 AM",
      "12:00 PM",
      "15:00 PM",
      "18:00 PM",
      "21:00 PM",
    ],
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "#4E75C1",
        borderColor: "rgba(0,0,0,.8)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 21, 41, 28],
      },
    ],
    hoverOffset: 2,
  };
  return (
    <div className="barchart">
      <Bar
        data={state}
        options={{
          scaleShowGridLines: false,
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Day's forecast for every 3 hours",
          },
          scales: {
            x: {
              ticks: { color: "black", font: { size: 15, weight: 550 } },
              grid: {
                display: false,
              },
            },
            y: {
              ticks: { display: false },
              grid: {
                drawBorder: false,
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default Barchart;
