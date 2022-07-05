import React, { useEffect, useState } from "react";
import Weather from "./container/Weather";
import getFormattedWeatherData from "./apis";
import styled, { keyframes } from "styled-components";

function App() {
  const [weather, setWeather] = useState({});
  const [coords, setCoords] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function ({ coords }) {
      setCoords({ lat: coords.latitude, lon: coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (Object.keys(coords).length) {
      const fetchWeather = async () => {
        setLoading(true);
        setError(false);
        await getFormattedWeatherData({ ...coords, units: "metric" })
          .then((data) => {
            setWeather(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(true);
          });
      };
      fetchWeather();
    }
  }, [coords]);
  return (
    <StyledLayout>
      {loading && (
        <Loader>
          {error ? "Cannot fonund location please try again" : <Spinner />}
        </Loader>
      )}
      <Weather onSearch={(q) => setCoords({ q })} weather={weather} />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: #fff;
`;
const Loader = styled("div")`
  min-height: calc(100vh - 120px);
  max-width: calc(100% - 40px);
  width: 100%;
  top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1111;
  position: absolute;
  background: #fff;
`;
const rotate = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`;
const Spinner = styled("div")`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 3px solid #999;
  border-right-color: transparent;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
export default App;
