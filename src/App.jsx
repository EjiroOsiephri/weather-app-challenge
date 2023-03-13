import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    async function runDev() {
      const res = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=96651987aee74f2dade74345231303&q=nigeria&aqi=no"
      );
      const data = await res.json();
      console.log(data);
    }
    runDev();
  }, []);

  return (
    <div>
      <h1>Ejiro</h1>
    </div>
  );
}

export default App;
