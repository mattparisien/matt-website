import React from "react";

function Figure({ img, video }) {
	return (
		<figure className='c-figure' data-scroll data-scroll-speed={-1}>
			<div className='c-figure_inner'>
				<div className='c-figure_img'>
					<img src={img.src} alt={img.alt}></img>
				</div>
				<div className='c-figure_video'>
					<video src={video} autoPlay loop playsInline muted></video>
				</div>
			</div>
		</figure>
	);
}

export default Figure;
