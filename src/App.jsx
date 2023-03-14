import { useState, useEffect, useRef } from "react";
import Main from "./reactJS/components/Main";

function App() {
  const [weatherData, setWeatherData] = useState(); // setting state for the weather Api

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

  console.log(weatherData?.current?.condition?.icon);

  return (
    <div>
      <Main
        onInputChange={handleInputChange}
        image={weatherData?.current?.condition?.icon}
        onSearch={fetchWeatherData}
      />
    </div>
  );
}

export default App;
