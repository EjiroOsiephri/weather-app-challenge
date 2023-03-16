import { useState, useEffect, useRef } from "react";
import Main from "./reactJS/components/Main";
import logo from "./reactJS/components/images/LightCloud.png";
import Form from "./reactJS/Form";
import "./reactJS/components/util/grid.scss";

function App() {
  const [weatherData, setWeatherData] = useState({
    current: {
      cloud: 25,
      condition: {
        code: 1003,
        icon: logo,
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
    // error: {
    //   message: "Invalid input entered",
    // },
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
      `https://api.weatherapi.com/v1/current.json?key=d1f9dffe5bcb4a5e89f200842231503&q=${valueData}&aqi=no`
    );
    const data = await res.json();

    setWeatherData(data);
  }

  const weatherValueObject = {
    temp: `${weatherData?.current?.temp_c}`,
    conditionText: `${weatherData?.current?.condition.text}`,
    localtime: `${weatherData?.location?.localtime}`,
    location: `${weatherData?.location?.name}`,
    lat: weatherData?.location?.lat,
    lon: weatherData?.location?.lon,
    region: weatherData?.location?.region,
    id: weatherData?.location?.tz_id,
    country: weatherData?.location?.country,
    MPH: weatherData?.current?.wind_kph,
    wind_dir: weatherData?.current?.wind_dir,
    capital: weatherData?.location?.name,
    humidity: weatherData?.current?.humidity,
    visibility: weatherData?.current?.vis_miles,
    pressure: weatherData?.current?.pressure_mb,
    temp_f: weatherData?.current?.temp_f,
  };

  // console.log(weatherData?.error?.message);

  return (
    <div className="container">
      <Main
        onInputChange={handleInputChange}
        image={weatherData?.current?.condition?.icon}
        onSearch={fetchWeatherData}
        temp={weatherValueObject.temp}
        conditionText={weatherValueObject.conditionText}
        localtime={weatherValueObject.localtime}
        location={weatherValueObject.location}
        temp_f={weatherValueObject.temp_f}
        error={weatherData?.error?.message}
      />
      <div className="forms">
        <Form
          lat={weatherValueObject.lat}
          lon={weatherValueObject.lon}
          region={weatherValueObject.region}
          id={weatherValueObject.id}
          country={weatherValueObject.country}
          image={weatherData?.current?.condition?.icon}
          MPH={weatherValueObject.MPH}
          windDir={weatherValueObject.wind_dir}
          capital={weatherValueObject.capital}
          humidity={weatherValueObject.humidity}
          visibility={weatherValueObject.visibility}
          pressure={weatherValueObject.pressure}
          temp={weatherValueObject.temp}
          temp_f={weatherValueObject.temp_f}
        />
      </div>
    </div>
  );
}

export default App;
