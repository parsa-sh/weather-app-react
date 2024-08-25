import React, { useEffect, useRef, useState } from "react";
import "./app.css";
import Input from "./components/input/input";
import axios from "axios";
import WeatherDetail from "./components/weatherDetail/WeatherDetail";
function App() {
  let date = new Date();
  const [city, setCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [country , setCountry] = useState("")
  const [temp ,setTemp ] = useState("")
  const inputRef = useRef()

  const apiGet = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fc1acc7e2237b18397d46ba69d1efda6`;
      let response = await fetch(url);
      let data = await response.json();
      setCity(data.name);
      setCountry(data.sys.country)
      setWeatherIcon(data.weather[0].icon)
      setTemp(data.main.temp)
      setIsShow(true)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    apiGet();
  },[])
  return (
    <div className="app-container">
      <Input link={inputRef} click={()=>apiGet(inputRef.current.value)} />
      {isShow == true ? (
        <div className="weather-detail">
          <h1>
            {city},{country}
          </h1>
          <WeatherDetail
            imgSrc={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            temp={`${Math.round(temp)}°C`}
          />
          <p>{date.toDateString()}</p>
        </div>
      ) : (
        <span>
          This is a Weather app
          <br />
          Enter your city in TextBox and detail will be shown
        </span>
      )}
    </div>
  );
}

export default App;
