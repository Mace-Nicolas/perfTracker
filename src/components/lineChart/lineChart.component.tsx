import React from "react";

import "./lineChart.component.styles.scss";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { formatIntToHHMMSS } from "../../database/timeFormatting";

interface LineChartProps {
  data: { date: string; result: number }[];
}

function tooltipFormatter(this: any) {
  const tooltip = `
  <div>
  <span>${formatIntToHHMMSS(this.y)}</span></div>`;
  return tooltip;
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
      formatter: tooltipFormatter,
    },

    yAxis: {
      title: {
        text: "Results",
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
