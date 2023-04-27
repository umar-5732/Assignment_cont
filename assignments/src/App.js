import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const API_KEY = "44378860b18dc6a0af89dfd03c256280";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountries(res.data.map((country) => country.name.common));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      axios
        .get(`${API_URL}?q=${selectedCity},${selectedCountry}&appid=${API_KEY}&units=metric`)
        .then((res) => {
          setTemperature(res.data.main.temp);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedCity, selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    axios
      .get(`https://restcountries.com/v3.1/name/${event.target.value}`)
      .then((res) => {
        setCities(res.data[0].altSpellings.slice(1));
      })
      .catch((err) => console.log(err));
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="temperature-calculator">
  


    <div>
      <h1>Temperature Calculator</h1>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {temperature && (
        <div>
          <p>The temperature in {selectedCity}, {selectedCountry} is {temperature}°C</p>
        </div>
      )}
    </div>
    </div>
  );
};


export default App;
