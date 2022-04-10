import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather({ country }) {
	const API_KEY = process.env.WEATHER_API_KEY;
	const [capital] = country.capital;
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`;

	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(URL).then((resp) => setData(resp.data));
	}, [country, URL]);

	if (!data) return <h3>Fetching weather in {capital}</h3>;

	const weather = data.weather[0];

	return (
		<>
			<h3>Weather in {capital}</h3>
			<p>Temprature: {(data.main.temp - 273.15).toFixed(2)} Celcius</p>
			<img
				src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
				alt=""
			/>
			<p>Wind: {data.wind.speed} m/s</p>
		</>
	);
}

export default Weather;
