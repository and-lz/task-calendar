import { useEffect, useState } from "react";

export function useWeatherInfo({ city, day, month, year }) {
  const [data, setData] = useState(null);
  day = String(day);

  useEffect(() => {
    async function getWeatherData() {
      const canGetWeatherData = new Date().getDate() + 10 >= day;
      if (!canGetWeatherData) return;
      if (!city || !day || !month || !year) return;

      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1ffab1ec89244846924232825210812&q=${city}&days=10&aqi=no&alerts=no`
      );
      const data = await response.json();
      const dayWithPad = day.padStart(2, "0");

      setData(
        data?.forecast?.forecastday?.filter(
          (day) => day.date === `${year}-${month + 1}-${dayWithPad}`
        )[0]?.day
      );
    }
    getWeatherData();
  }, [city, day, month, year]);

  function getWeatherMessage() {
    let weatherMessage = "";
    if (data?.mintemp_c && data?.maxtemp_c)
      weatherMessage = `Min ${data?.mintemp_c}º Max.
          ${data?.maxtemp_c}º`;
    return weatherMessage;
  }

  return {
    weatherMessage: getWeatherMessage(),
    data,
  };
}
