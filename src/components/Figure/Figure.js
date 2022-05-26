import classNames from "classnames";
import React from "react";
import Reveal from "react-reveal/Reveal";
// import Frame from "../Vector/Frame";

function Figure({
	src,
	alt,
	width,
	height,
	maxWidth,
	maxHeight,
	classes,
	noFrame,
	noReveal,
	rotate,
	hoverEffect,
	effectDelay,
}) {
	const figureClasses = classNames("c-figure", { [classes]: classes  });

	return (
		<Reveal effect={"-figure-zoom -frame-reveal"}>
			<figure
				className={figureClasses}
				style={{
					width: width,
					height: height,
					maxWidth: maxWidth,
					maxHeight: maxHeight,
				}}
				data-rotate={rotate}
			>
				<div className='c-figure_inner -relative -stretchX -stretchY'>
					<img src={src} alt={alt}></img>

					
					{/* <ImageRevealer /> */}
				</div>
				
			</figure>
		</Reveal>
	);
}

export default Figure;
