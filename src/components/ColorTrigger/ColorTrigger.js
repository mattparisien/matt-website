import React, { useContext } from "react";
import InView from "react-intersection-observer";
import { ColorContext } from "../../App/App";

function ColorTrigger({ children, threshold, background, foreground }) {
	const { changeColors } = useContext(ColorContext);

	return (
		<InView
			as='div'
			threshold={threshold ? threshold : 1}
			className='ColorTrigger'
			onChange={(inView, entry) => {
				return inView ? changeColors(background, foreground) : changeColors(foreground, background);
			}}
		>
			{children}
		</InView>
	);
}

export default ColorTrigger;
