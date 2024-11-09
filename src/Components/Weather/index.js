import React from "react";

const WeatherApp = () => {
  const [isError, SetIsError] = React.useState("");
  const [weatherInfo, setWeatherInfo] = React.useState(null);
  const fetchData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bf909b4a90c47e810fc156dc73c0ed75&units=metric`
      );
      const data = await response.json();
      setWeatherInfo(data);
    } catch (e) {
      SetIsError("issue in fetch data");
    }
  };

  React.useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };

    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchData(latitude, longitude);
    };

    const handleFailure = () => {
      SetIsError("Permission Issue.");
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleFailure,
        options
      );
    } else {
      SetIsError("Check some issue present.");
    }
  }, []);
  return (
    <>
      {isError ? (
        <div>{isError}</div>
      ) : weatherInfo ? (
        <div>
          <h2>Weather in {weatherInfo.name}</h2>
          <p>Temperature: {weatherInfo.main.temp}°C</p>
          <p>Weather: {weatherInfo.weather[0].description}</p>
          <p>Humidity: {weatherInfo.main.humidity}%</p>
          <p>Wind Speed: {weatherInfo.wind.speed} m/s</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default WeatherApp;
