import React, { useContext, useEffect, useRef, useState } from "react";
import { ColorContext } from "../../../../App/App";
import Container from "../../../Containers/Container";
import Section from "../../../Containers/Section";
import Link from "../../../Link/Link";
import useMouseMove from "../../../../helpers/hooks/useMouseMove";

function FeaturedProjects({ items }) {
	const { setCurrentTheme } = useContext(ColorContext);

	const [location] = useMouseMove();

	const handleMouseEnter = () => {};

	useEffect(() => {
		const container = document.querySelector(".c-mousePosContainer");

		window.addEventListener("mousemove", e => {
			container.style.left = `${e.pageX}px`;
			container.style.top = `${e.pageY}px`;
		});

		// location && animateCard();
	}, []);

	return (
		<Section classes='o-featuredProjects -padding-lg' data-theme='light'>
			<Container classes='-flex'>
				<ul className='o-featuredProjects_list'>
					{items &&
						items.map((item, i) => (
							<li key={i} onMouseEnter={handleMouseEnter}>
								<a href=''>
									<div className='title'>{item.Title}</div>

									<div className='subtitle'>{item.Subtitle}</div>
								</a>
							</li>
							// <Card
							// 	href={`/projects/${item.id}`}
							// 	key={item.id}
							// 	imageUrl={item.Cover.image.url}
							// 	demoUrl={item.Demo.data ? item.Demo.data.attributes.url : null}
							// 	title={item.Title}
							// 	previewText={item.PreviewText}
							// 	backgroundImage={
							// 		item.AdditionalMedia.data
							// 			? item.AdditionalMedia.data[0].attributes.url
							// 			: ""
							// 	}
							// 	onMouseEnter={() =>
							// 		handleMouseEnter(i % 2 === 0 ? "blue" : "light")
							// 	}
							// 	onMouseLeave={() => handleMouseLeave("dark")}
							// />
						))}
				</ul>
			</Container>
		</Section>
	);
}

export default FeaturedProjects;
