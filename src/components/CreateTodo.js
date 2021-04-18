import React from "react";
import { useState } from "react";

const CreaeTodo = ({onSubmit, currentIndex}) => {
	const [text, setText] = useState('');

	function handleSubmit(event) {
		event.preventDefault();

		if(text) {
			setText('');
			onSubmit({
				id: currentIndex + 1,
				title: text,
				status: 'active'
			})
		}
	}
	const handleChange = ({target}) => {
		const {value} = target;
		setText(value);
	}

	return (
		<div id='journal' className='surface'>
			<h2> Whats your plan today? </h2>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} value={text} type="text" className='journal-input' aria-label='New Task Entry' />
			</form>
		</div>
	);
}

export default CreaeTodo;