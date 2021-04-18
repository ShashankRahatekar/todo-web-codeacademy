import React, {useEffect, useState} from 'react';
const {fetchImages} = require('../data/data');

const Home = ({imageIndex = 0}) => {
	const [images, setImages] = useState([]);
	const [fetched, setFetched] = useState(false);
	
	useEffect(() => {
		fetchImages().then(images => {
			setImages(images.results);
			setFetched(true);
		});

		// fetchWeather().then(data => {
		// 	console.log(data);
		// });
	}, [])
	
	return (
		<div id='bg-image-container'>
			{
				fetched ?
				<img id='background-image' alt='Background' height= '100%' width="100%" src={images[imageIndex].urls.regular}/>
				: null
			}
		</div>
	);
} 

export default Home;