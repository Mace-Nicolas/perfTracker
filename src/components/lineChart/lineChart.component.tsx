import React, { useState, useEffect } from "react";

import "./lineChart.component.styles.scss";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    backgroundColor: "transparent",

    type: "spline",
  },
  title: {
    text: "Results",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const LineChart = () => {
  return (
    <div className='lineChartContainer'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
