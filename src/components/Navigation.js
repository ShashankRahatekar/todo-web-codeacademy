import React from "react";

const NavigationButon = (props) => {
	return (
		<aside className={props.className}>
			<button onClick={props.onClickSlide} aria-label={props.label}>{props.sign}</button>
		</aside>
	);
}

export default NavigationButon;