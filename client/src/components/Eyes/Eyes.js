import React, { useEffect, useRef, useState } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";

function Eyes() {
	const containerLeft = useRef(null);
	const containerRight = useRef(null);

	return (
		<div className='c-eyes'>
			<div className='c-eyes_inner -relative'>
				<div className='c-eyes_eye-wrapper' ref={containerLeft}>
					<Eye />
					
				</div>
				<div className='c-eyes_eye-wrapper' ref={containerLeft}>
					<Eye />
					
				</div>
			</div>
		</div>
	);
}

const Eye = ({ eyeLocation }) => {
	const [location] = useMouseMove();
	const iris = useRef(null);
	const [eyePos, setEyePos] = useState({
		left: 0,
		top: 0,
	});

	useEffect(() => {
		if (location && iris.current) {
			// const container = $(iris.current).parents()[2];
			// const containerOffsetLeft = $(container).offset().left;
			// const containerOffsetTop = $(container).offset().top;

			setEyePos({
				x: 20,
				y: 20,
			});
		}
	}, [location]);



	return (
		<div className='c-eyes_eye'>
			
			<div className='c-eyes_eye_inner'>
				<div
					className='c-eyes_iris'
					ref={iris}
					
				></div>
			</div>
			<div className="c-eyes_eye_revealer -accent"></div>
		</div>
	);
};

export default Eyes;
