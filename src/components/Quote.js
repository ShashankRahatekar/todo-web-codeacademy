import React from 'react';

const Quote = ({message, author}) => {
	return (
		<footer>
			<div id='quote'>
				<p className='quote-message'>"{message}"</p>
				<p className='quote-author'>{author}</p>
			</div>
		</footer>
	);
}

export default Quote;