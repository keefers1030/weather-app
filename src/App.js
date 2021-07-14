import React, { useState} from 'react'
import './index.css'

const api ={
  key: "e4d33e4eba8f5159627ebf500dc4b54e",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
const [query, setQuery] = useState('')
const [weather, setWeather] = useState({})

const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
        });
    }
  }

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let day = days[d.getDay()]
  let month = months.[d.getMonth()]
  let date = d.getDate()
  let year = d.getFullYear()

  return `${day}, ${month} ${date}, ${year}`
}

  return (
    <div className={
      (typeof weather.main != "undefined") 
        ? ((weather.main.temp > 55) 
          ? 'app warm' 
          : 'app cool')
        : 'app'}>
      <main>

      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city"
          onChange={event => setQuery(event.target.value)}
          value={query}
          onKeyPress={search}
          />
      </div>
<div className="weather-box1">
      {(typeof weather.main != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
 
      <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}<span class="degree">°F</span>
          </div>
          <div className="weather-box">
          <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather status icon"
                className="weather-icon"
              />
              </div>
          <div className="weather">{weather.weather[0].main}</div>

        </div>
      </div>
      ) : ('')}
      </div>
      </main>
    </div>
  );
}


export default App;