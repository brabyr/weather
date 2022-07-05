import React, { useState } from "react";
import Chart from "../../component/WeatherChart";
import WeatherList from "../../component/WeatherList";
import moment from "moment";
import Wrapper, { Col, Icon, Input, Row, SearchBar } from "./style";
const SearchIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-search"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

const Weather = ({ onSearch, weather }) => {
  const [value, setValue] = useState("");
  const handleSearch = ({ target, key }) => {
    if (key === "Enter") {
      onSearch(target.value);
    } else {
      setValue(target.value);
    }
  };
  return (
    <Wrapper>
      <SearchBar>
        <Input onKeyUp={handleSearch} />
        <Icon onClick={() => onSearch(value)}>
          <SearchIcon />
        </Icon>
      </SearchBar>
      <p className="date">{moment().format("MMMM D, h:mm a")}</p>
      <h2 className="main-title">{weather.name}</h2>
      <h2 className="result">{weather.temp} °C</h2>
      <Row gap={"40px"}>
        <Col width="50%">
          <Chart city={weather.name} weather={weather.hourly || []} />
        </Col>
        <Col width="50%">
          <WeatherList weather={weather.daily || []} />
        </Col>
      </Row>
    </Wrapper>
  );
};
export default Weather;
