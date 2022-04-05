import React, { useContext, useEffect, useRef, useState } from "react";
import { ColorContext } from "../../../../App/App";
import Container from "../../../Containers/Container";
import Section from "../../../Containers/Section";
import Link from "../../../Link/Link";


function FeaturedProjects({ items }) {
	const { setCurrentTheme } = useContext(ColorContext);

	

	const handleMouseEnter = () => {};



	return (
		<Section classes='o-featuredProjects -padding-lg' data-theme='light'>
			<Container classes='-flex'>
				<ul className='o-featuredProjects_list'>
					{items &&
						items.map((item, i) => (
							<li key={i} onMouseEnter={handleMouseEnter}>
								<a href=''>
									<h2 className='title'>{item.Title}</h2>

									<h4 className='subtitle'>{item.Subtitle}</h4>
								</a>
							</li>

						))}
				</ul>
			</Container>
		</Section>
	);
}

export default FeaturedProjects;
