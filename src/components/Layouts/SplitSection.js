import React from "react";
import Container from "../Containers/Container";

function SplitSection({
	reversed,
	imageSrc,
	text,
	dataThemeLeft,
	dataThemeRight,
}) {
	return (
		<div className={`o-split-section ${reversed ? "-row-reverse" : ""}`}>
			<div
				className='o-split-section_left'
				data-theme={dataThemeLeft ? dataThemeLeft : "regular"}
			>
				<Container>
					<div className='o-text -medium'>{text}</div>
				</Container>
			</div>
			<div
				className='o-split-section_right'
				data-theme={dataThemeRight ? dataThemeRight : "regular"}
			>
				<div
					className='o-split-section_image'
					style={{
						backgroundImage: `url(${imageSrc})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			</div>
		</div>
	);
}

export default SplitSection;
