import React, {useState} from "react";
import Clock from "./components/clock";
import './App.css';
import Today from "./components/todaydate";
import logo from "./assets/open.png"

const api = {
  //key: "", insert key//
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evnt => {
    if(evnt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    };
  };


  return(
    <div className="container">
      <div className="glassBox">
        <input 
        className="searchbar"
        type="text" placeholder="eg. New York, Tokyo, Rome"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        <Clock/>
        <Today/>
        {(typeof weather.main != "undefined")? (
        <div>
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="temps">{Math.round(weather.main.temp)}°C</div>
          <div className="weatherinfo">{weather.weather[0].main}</div>
        </div>
        ) : ('')}
        
        <div className="mention">
          Weather data provided by OpenWeather
          <a href="https://home.openweathermap.org">
            <img src={logo} alt="openweathermap" 
            style=
            {{
              height:'40px',
              width:'80px',
              position:'absolute',
              bottom:'-0.6em'
            }}
            />
          </a>
        </div>
        <div className="copy">&#169;2022 Gianni Pintus</div>
      </div>
    </div>
  )
}
export default App;