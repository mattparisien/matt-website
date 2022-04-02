import React, { useContext } from "react";
import { ColorContext } from "../../../../App/App";
import Container from "../../../Containers/Container";
import Section from "../../../Containers/Section";

function FeaturedProjects({ items }) {
	const { setCurrentTheme } = useContext(ColorContext);

	const handleMouseEnter = color => {
		setCurrentTheme(color);
	};

	const handleMouseLeave = color => {
		setCurrentTheme(color);
	};

	console.log(items);

	return (
		<Section classes='o-featuredProjects'>
			<Container classes='-flex'>
				{items &&
					items.map((item, i) => (
						<Card
							key={item.id}
							imageUrl={item.Cover.image.url}
							demoUrl={item.Demo.data ? item.Demo.data.attributes.url : null}
							title={item.Title}
							previewText={item.PreviewText}
							backgroundImage={
								item.AdditionalMedia.data
									? item.AdditionalMedia.data[0].attributes.url
									: ""
							}
							onMouseEnter={() =>
								handleMouseEnter(i % 2 === 0 ? "blue" : "light")
							}
							onMouseLeave={() => handleMouseLeave("dark")}
						/>
					))}
			</Container>
		</Section>
	);
}

function Card({
	imageUrl,
	demoUrl,
	title,
	previewText,
	onMouseEnter,
	onMouseLeave,
	backgroundImage,
}) {
	return (
		<div
			className='o-featuredProjects_card'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className='o-featuredProjects_card_title '>
				<div className='inner -relative'>{title}</div>
			</div>
			<div className='o-featuredProjects_card_previewText'>{previewText}</div>
			<div className='card-contentSwitch-container'>
				<img src={imageUrl} alt='' />
				<video src={demoUrl} autoPlay loop playsInline muted></video>
			</div>
			<div className='background'>
				<img
					src={
						backgroundImage ||
						"https://images.pexels.com/photos/11369622/pexels-photo-11369622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					}
					alt=''
				/>
			</div>
		</div>
	);
}

export default FeaturedProjects;
