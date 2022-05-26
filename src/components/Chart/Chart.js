import React, { useState } from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const dataPointMaximum = Math.max(...dataPointValues);

  console.log(dataPointMaximum, "dataPointMaximumdataPointMaximum");
  return (
    <div className="chart">
      Chart
      {props.dataPoints.map((dataPoint, i) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={dataPointMaximum}
          label={dataPoint.label}
          key={i}
        />
      ))}
    </div>
  );
};

export default Chart;
