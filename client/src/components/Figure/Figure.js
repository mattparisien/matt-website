import React from "react";

function Figure({ img, video }) {
	return (
		<figure className='c-figure'>
			<div className='c-figure_inner'>
				<div className='c-figure_img'>
					<img src={img.src} alt={img.alt}></img>
				</div>
				<div className='c-figure_video'></div>
			</div>
		</figure>
	);
}

export default Figure;
