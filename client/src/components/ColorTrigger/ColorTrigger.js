import React, { useContext } from "react";
import InView from "react-intersection-observer";
import { ColorContext } from "../../App/App";

function ColorTrigger({ children, threshold, background, foreground }) {
	const { changeColors } = useContext(ColorContext);

	return (
		<InView
			as='div'
			style={{ height: "100%" }}
			threshold={threshold ? threshold : 0.5}
			className='ColorTrigger'
			onChange={(inView, entry) => {
				return inView
					? changeColors(foreground, background)
					: changeColors(foreground, background);
			}}
		>
			{children}
		</InView>
	);
}

export default ColorTrigger;
