import SearchBox from './SearchBox'
import InfoBox from './infoBox.jsx';

import React, { useState } from 'react'

export default function WeatherAPP() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 29.22,
        temp: 30.05,
        tempMin: 30.05,
        tempMax: 30.05,
        humidity: 35,
        weather: "broken clouds",
    });
   
    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

  return (
    <div style={{textAlign:'center'}}>
        <h2>Weather Widget</h2>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
    </div>
  )
}
