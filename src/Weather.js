import React from "react";

function Weather(props) {
  function ConvertToFahrenheit() {
    let temperature = (props.temperature * 9) / 5 + 32;
    return Math.round(temperature);
  }

  return (
    <div className="Weather">
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {ConvertToFahrenheit()}°F
    </div>
  );
}

export default Weather;
