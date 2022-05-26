import React, { useEffect } from "react";
import ContainerFluid from "../Containers/ContainerFluid";
import Fade from "react-reveal";
import gsap from "gsap";
import $ from "jquery";

function Grid({ items }) {
	useEffect(() => {
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection);

		$(".c-grid_item").each((i, el) => {
			observer.observe(el);
	console.log('hi')

			console.log($(el).css('transform').split(",")[5].replace(")", ""));
		});

		// gsap.set($(".c-grid_item"), {y: })
	}, []);

	return (
		<div className='c-grid'>
			{items &&
				items.map((item, i) => {
					return (
						<Fade effect='-fadeUp'>
							<div className='c-grid_item'>
								<div className='c-grid_image'>
									<img src={item.url}></img>
								</div>
							</div>
						</Fade>
					);
				})}
		</div>
	);
}

export default Grid;
