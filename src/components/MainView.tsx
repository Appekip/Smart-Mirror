import React, { useEffect, useState } from 'react';
import "../styles/mainView.css"
import { getCurrentDateTimeInfo } from '../utilities/dateTimeUtils';
import { fetchData } from '../utilities/apiCallUtil';
import { weatherIcons } from '../utilities/weatherIconUtils';

const MainView: React.FC = () => {

  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // Haetaan data komponentin ensimmäisen renderöinnin yhteydessä
    fetchData().then((data) => {
      setWeatherData(data);
    });

    // Asetetaan interval fetchData-kutsun suorittamiseen 1 tunnin välein
    const intervalId = setInterval(() => {
      fetchData().then((data) => {
        setWeatherData(data);
      });
    }, 900000); // 15 min

    // Palautetaan cleanup-funktio clearIntervalin kutsumiseksi
    return () => clearInterval(intervalId);
  }, []);

const [currentTime, setCurrentTime] = useState(getCurrentDateTimeInfo());

useEffect(() => {
  const intervalId = setInterval(() => {
    const newTime = getCurrentDateTimeInfo(); // Päivitä nykyinen aika
    setCurrentTime(newTime); // Päivitä tila uudella ajalla
  }, 1000); // Päivitä joka sekunti

  return () => clearInterval(intervalId); // Puhdista interval kun komponentti irtoaa
}, []);

const { day, month, date, hours, minutes, seconds } = currentTime;

console.log(day)

const findIcon = (identifier: number) => {
  const cloudCondition = weatherIcons.find(condition => condition.identifier === identifier);
  if (identifier === 800 && !isDay(parseInt(hours))){
    return "images/clearNight.png";
  }
  return cloudCondition ? cloudCondition.imgLink : null;
};

const iconSrc = weatherData ? findIcon(weatherData.weather.id) : null;

  return (
    <div className="container">

      <div className="row">
        <div className="item">
        <img src={iconSrc?.toString() || ''} alt="Image" />

        </div>
        {weatherData && (
  <div className="column">
    <div className="item">{weatherData.name}</div>
    <div className="item">{weatherData.weather.description}</div>
    <div className="item">{weatherData.main.temp}°C</div>
    <div className="item">{weatherData.wind.speed} m/s</div>
  </div>
)}

      </div>

      <div className="row">
        <div className="column"></div>
        <div className="column">
          <div className="item">{hours + " : " +  minutes}</div>
          <div className="item">{month + " " + date}</div>
          <div className="item">{day.toString()}</div>
          </div>
      </div>
    </div>
  )
}

function isDay(hours: number): boolean {
  if (hours < 6 || hours > 19) {
    return false;
  }
  return true;
}

export default MainView;