import React, { useEffect, useMemo, useState } from "react";
import Wrapper from "./style";
import { Line } from "react-chartjs-2";

const Chart = ({ weather }) => {
  const [state, setState] = useState({ labels: [], data: [] });
  useEffect(() => {
    const labels = [];
    const data = [];
    weather.forEach((i) => {
      labels.push(i.title);
      data.push(i.temp);
    });
    setState({ labels, data });
  }, [weather]);
  const data = useMemo(() => {
    return {
      labels: state.labels,
      datasets: [
        {
          label: "Temprature",
          data: state.data,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
  }, [state]);
  const options = {
    title: {
      display: true,
      text: "Hourly Forecast",
      fontSize: 25,
    },
  };
  return (
    <Wrapper>
      <Line data={data} options={options} />
    </Wrapper>
  );
};
export default Chart;
