import React from "react";
import Wrapper from "./style";
import { iconUrlFromCode } from "../../apis";

const WeatherList = ({ weather }) => {
  return (
    <Wrapper>
      <h2 className="title">5 day Forecast</h2>
      {weather.map((i) => (
        <div className="list-data" key={i.dt}>
          <p className="date-value"> {i.title}</p>
          <p className="value">{i.temp}°C</p>
          <div className="light-text">
            <img
              height="40"
              src={iconUrlFromCode(i.icon)}
              alt={`weather-icon-${i.icon}`}
            />
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default WeatherList;
