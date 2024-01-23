import React, { useEffect, useState } from 'react';
import { getWeatherDetails } from '../../apis/weather';
import { generateTime, generateDate } from '../../utils/helper';

const Weather = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
        ).then(async (data) => await data.json());

        setWeather(response);
      } catch (error) {
        console.error('Error fetching weather details:', error);
        setWeather({ error: 'Failed to fetch weather details' });
      }

      const correctTime = generateTime();
      setTime(correctTime);
      const correctDate = generateDate();
      setDate(correctDate);
    };

    fetchWeather();
  }, []);

  return (
    <div style={{ borderRadius: '19px', backgroundColor: '#101744', height: '18vh', margin: '1rem' }}>
      <div style={{ height: '2rem', width: '31.6rem', backgroundColor: '#FF4ADE', borderRadius: '10px 10px 0px 0px', fontFamily: 'Roboto', fontWeight: '600', fontSize: '28px', color: '#FFFFFF', display: 'flex', justifyContent: 'space-evenly' }}>
        <div>{date}</div>
        <div>{time}</div>
      </div>

      <div style={{ display:"flex", color: '#FFFFFF' ,justifyContent:"space-evenly",fontFamily: 'Roboto', fontWeight: '600', fontSize: '20px'}}>
        <div>
          <img src={weather?.current?.condition?.icon} style={{height:"30px",width:"30px"}}/><br/>
          {weather?.current?.condition?.text}</div>
          <div style={{borderLeft:"6px solid white",height:"5rem",marginTop:"0.5rem"}}></div>
          <div>
            {weather?.current?.temp_c}°C<br/>
            <img src={weather?.current?.pressure?.icon}/>
            {weather?.current?.pressure_mb}mbar <br/>pressure
          </div>
          <div style={{borderLeft:"6px solid white",height:"5rem",marginTop:"0.5rem"}}></div>
        <div>
          {weather?.current?.wind_kph} kmph Wind<br/>
          {weather?.current?.humidity}% humidity
        </div>
      </div>
    </div>
  );
};

export default Weather;
