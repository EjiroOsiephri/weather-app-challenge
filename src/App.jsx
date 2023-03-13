import { useState, useEffect } from "react";
import Main from "./reactJS/components/Main";

function App() {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    async function runDev() {
      const res = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=96651987aee74f2dade74345231303&q=london&aqi=no"
      );
      const data = await res.json();

      setWeatherData(data);
    }
    runDev();
  }, []);

  console.log(weatherData.current.condition.icon);
  return (
    <div>
      <Main image={weatherData.current.condition.icon} />
    </div>
  );
}

export default App;
