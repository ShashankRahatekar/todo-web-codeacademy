import React, {useState, useEffect} from 'react';
import { fetchWeather } from '../data/data';

const Weather = () => {
	const [weather, setWeather] = useState({temp: '', msg: ''});
	
	useEffect(() => {
		fetchWeather().then(weather => {
			console.log(weather);
			setWeather({
				temp: weather.main.temp || 0,
				msg: weather.weather[0].description || ''
			})
		})
	}, []);
	
	return (
		<header>
			<div className='weather'>
				<div className='temperature-container'>
					<img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' />
					<div className='weather-text'>
						<p className='temperature'> {weather.temp}°</p>
						<p className='weather-description'> {weather.msg} </p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Weather;