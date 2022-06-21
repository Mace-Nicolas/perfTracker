import React, { useState, useEffect } from "react";

import "./lineChart.component.styles.scss";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface LineChartProps {
  data: { date: string; result: number }[];
}

const LineChart = ({ data }: LineChartProps) => {
  const options = {
    chart: {
      backgroundColor: "transparent",

      type: "spline",
    },
    title: {
      text: "Results",
    },
    xAxis: {
      categories: data.map((item) => item.date),
    },
    tooltip: {
      formatter: (p: any) => {
        console.log(p);
        return p.y;

        // return Math.floor(value);
      },
    },

    yAxis: {
      title: {
        text: "Results ( HH:MM:SS ) ",
      },

      labels: {
        formatter: ({ value }: any) => {
          return Math.floor(value);
        },
      },
    },
    series: [
      {
        name: "Time",
        data: data.map((item) => item.result),
      },
    ],
  };
  return (
    <div className='lineChartContainer'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
