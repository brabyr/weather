import moment from 'moment'
const API_KEY = "c65bac2d7a717acf9ac2656fef276133";
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  
    return fetch(url).then((res) => res.json());
  };

  const getFormattedWeatherData = async (searchParams, coords) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then( formatCurrentWeather);
  
    const { lat, lon } = formattedCurrentWeather;
  
    const formattedForecastWeather = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  };
  const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title:  formatToLocalTime(d.dt, timezone),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  
    hourly = hourly.slice(1, 6).map((d) => {
      return {
        title:  formatToLocalTime(d.dt, timezone, 'hh:mm a'),
        temp: d.temp,
        icon: d.weather[0].icon,
      };
    });
  
    return { timezone, daily, hourly };
  };
  const formatCurrentWeather = (data) => {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;
  
    const { main: details, icon } = weather[0];
  
    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      speed,
    };
  };
  const formatToLocalTime = (
    secs,
    zone,
    format = "dddd DD MMM"
  ) => moment.unix(secs).format(format);

  export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

  export default getFormattedWeatherData;
  