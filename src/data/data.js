// const YOUR_ACCESS_KEY = 'kb6FHJPXD-_HDck4OZH8BF2y3qA2RseUWumTDlcxF_E';
const IMAGES_URL = 'https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=aa7da31d016ad86222602dee2e4e588ec41b6308d5964450b74914c4ad7c00b5'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?appid=5e3cbba269f531775ca75269c1598ef0&units=imperial&q=Pune,India';
const QUOTE_API = 'https://quotes.rest/qod?language=en'

function fetchResult(API) {
	return new Promise((resolve, reject) => {
		fetch(API).then(response => {
			return(response.json())
		}).then(data => {
			console.log(data);
			resolve(data);
		}).catch(err => {
			console.log(err);
			return(err);
		})
	});
}

export const fetchImages = () => {
	return(fetchResult(IMAGES_URL));
	
}

export const fetchWeather = () => {
	return(fetchResult(WEATHER_API));
}

export const fetchQuote = () => {
	return(fetchResult(QUOTE_API));
}
