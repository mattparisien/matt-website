import { positions } from "@mui/system";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";

function Button({ children, href, target, selected, number, onClick }) {
	const classes = classNames("c-button", { selected: selected });
	const isStuck = useRef(false);
	const button = useRef(null);

	//Magnetic effect
	useEffect(() => {
		// const buttons = document.querySelectorAll(".c-button");

		const handleMouseMove = e => {
			const factor = 0.9;
			const pos = e.target.getBoundingClientRect();
			const x = e.pageX - pos.left - pos.width / 2;
			const y = e.pageY - pos.top - pos.height / 2;

			e.target.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
		};

		const handleMouseOut = e => {
			e.target.style.transform = `translate(0px, 0px)`;
		};

		
			button.current.addEventListener("mousemove", handleMouseMove);
			button.current.addEventListener("mouseout", handleMouseOut);
		

		return () => {
			
				button.current.removeEventListener("mousemove", handleMouseMove);
				button.current.removeEventListener("mouseout", handleMouseOut);
			
		};
	});

	return (
		<a className={classes} onClick={onClick} href={href} ref={button}>
			<div className='inner -relative -stretchX -stretchY'>
				{children}
				<div className='button-circle'></div>
			</div>
		</a>
	);
}

export default Button;
