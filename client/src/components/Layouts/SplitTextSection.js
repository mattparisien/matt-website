import React, { forwardRef } from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";

function SplitTextSection(
	{
		reversed,
		imageSrc,
		textLeft,
		textRight,
		dataThemeLeft,
		dataThemeRight,
		image,
	},
	ref
) {
	return (
		<div
			className={`o-split-section o-split-section_text ${
				reversed ? "-row-reverse" : ""
			}`}
		>
			<div
				className='o-split-section_left'
				data-theme={dataThemeLeft ? dataThemeLeft : "regular"}
			>
				<Container classes='-stretchY -relative'>
					<Section classes='-padding-lg -stretchY'>
						<h2 className='o-h2 -fk'>{textLeft}</h2>
					</Section>
				</Container>
			</div>
			<div
				className='o-split-section_right'
				data-theme={dataThemeRight ? dataThemeRight : "regular"}
			>
				<Container>
					<Section classes='-padding-lg'>
						<div className='o-text -medium'>{textRight}</div>
					</Section>
				</Container>
			</div>
			{imageSrc && (
				<div
					className='o-split-section_image -desktop'
					ref={ref}
					style={{
						border: "3px solid black",
						marginBottom: "inherit",
						backgroundImage: `url(${imageSrc})`,
						width: "15vw",
						height: "20vw",
						backgroundPosition: "center",
						backgroundSize: "cover",
						position: "absolute",
						top: "0",
						left: "50%",
						transform: "translate(-50%, 400%)",
					}}
				></div>
			)}
		</div>
	);
}

export default forwardRef(SplitTextSection);
