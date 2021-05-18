import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
//time and temp conversion helpers
import { convertTemp } from "./../utils/convertTemp";

const Barchart = ({ dataToGraph }) => {
  const [selectedUnit, selectedCard] = useSelector((store) => {
    return [store.uiDetails.selectedUnit, store.uiDetails.selectedCard];
  });
  //extract  temps from this day's info.
  const data = dataToGraph.map((hourly) => {
    return convertTemp(hourly.main.temp, selectedUnit);
  });

  //since first or last day's info could be incomplete,fill the first day up with dummy data for the graph
  if (selectedCard === 0 && data.length < 8) {
    //add dummy info before the curernt day's forecast
    let datalength = data.length;
    for (let i = 0; i < 8 - datalength; i++) {
      data.unshift(null);
    }
  }

  const state = {
    labels: [
      "00:00 AM",
      "03:00 AM",
      "06:00 AM",
      "09:00 AM",
      "12:00 PM",
      "3:00 PM",
      "6:00 PM",
      "9:00 PM",
    ],
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "#4E75C1",
        borderColor: "rgba(0,0,0,.8)",
        borderWidth: 1,
        data: data,
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
              ticks: {
                color: "black",
                font: function (context) {
                  var width = context.chart.width;
                  var size = width < 600 ? 8 : 16;
                  return {
                    size: size,
                    weight: 600,
                  };
                },
              },
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
