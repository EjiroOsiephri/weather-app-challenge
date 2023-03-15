import { useState, useEffect, useRef } from "react";
import Main from "./reactJS/components/Main";

function App() {
  const [weatherData, setWeatherData] = useState({
    current: {
      cloud: 25,
      condition: {
        code: 1003,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        text: "Partly Cloud",
      },
      feelslike_c: 31.7,
      feelslike_f: 89.1,
      gust_kph: 28.4,
      gust_mph: 17.7,
      humidity: 79,
      is_day: 0,
      last_updated: "2023-03-14 22:15",
      last_updated_epoch: 1678828500,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 29.8,
      pressure_mb: 1009,
      temp_c: 28,
      temp_f: 82.4,
      uv: 1,
      vis_km: 10,
      vis_miles: 6,
      wind_degree: 200,
      wind_dir: "SSW",
      wind_kph: 15.1,
    },
    location: {
      country: "Nigeria",
      lat: 9.18,
      localtime: "2023-03-14 22:21",
      localtime_epoch: 1678828887,
      lon: 7.18,
      name: "Abuja",
      region: "Federal Capital Territory",
      tz_id: "Africa/Lagos",
    },
    error: {
      message: "Invalid input entered",
    },
  }); // setting state for the weather Api

  const [valueData, setValueData] = useState();

  function handleInputChange(value) {
    setValueData(value);
  }

  async function fetchWeatherData() {
    if (!valueData) {
      return; // Exit the function if valueData is empty
    }

    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=96651987aee74f2dade74345231303&q=${valueData}&aqi=no`
    );
    const data = await res.json();

    setWeatherData(data);
  }

  const weatherValueObject = {
    temp: `${weatherData.current.temp_c}`,
    conditionText: `${weatherData.current.condition.text}`,
    localtime: `${weatherData.location.localtime}`,
    location: `${weatherData.location.name}`,
  };

  return (
    <div>
      <Main
        onInputChange={handleInputChange}
        image={weatherData.current.condition.icon}
        onSearch={fetchWeatherData}
        temp={weatherValueObject.temp}
        conditionText={weatherValueObject.conditionText}
        localtime={weatherValueObject.localtime}
        location={weatherValueObject.location}
      />
    </div>
  );
}

export default App;
