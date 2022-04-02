import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Section from "../../../Containers/Section";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import divideArray from "../../../../helpers/divideArray";
import Container from "../../../Containers/Container";

function Gallery({ images }) {
	const sticky = useRef(null);

	const galleryItems = useRef(null);
	const scrollable = useRef(null);

	useEffect(() => {
		galleryItems.current = document.querySelectorAll(".o-gallery_image");

		const lerp = (start, end, t) => {
			return start * (1 - t) + end * t;
		};
		let current = 0;
		let target = 0;
		const ease = 0.01;

		const makeSticky = () => {
			const offset = window.innerHeight * 2;
			current = lerp(current, target, ease);
			if (current < offset) {
				sticky.current.style.transform = `translate3d(0,0, 0)`;
			}

			if (current >= offset && current <= offset * 2) {
				sticky.current.style.transform = `translate3d(0, ${
					current - offset
				}px)`;
			}

			if (current > offset * 2) {
				sticky.current.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		};

		function smoothScroll() {
			target = window.scrollY;
			current = lerp(current, target, ease);
			scrollable.current.style.transform = `translate3d(${-current}px, 0)`;
			makeSticky();
			animateImages();
			window.requestAnimationFrame(smoothScroll);
		}

		const animateImages = () => {
			for (let i = 0; i < galleryItems.current.length; i++) {
				let { top } = galleryItems.current[i].getBoundingClientRect();

				i % 2 === 0
					? (galleryItems.current[i].style.transform = `rotate(${
							-top * 0.01
					  }deg)`)
					: (galleryItems.current[i].style.transform = `rotate(${
							top * 0.01
					  }deg)`);
			}
		};

		if (galleryItems.current) {
			smoothScroll();
		}
	}, [galleryItems.current]);

	return (
		<Section classes='o-gallery -padding-huge' ref={scrollable}>
			<h2 className='o-h2' ref={sticky}>
				Photography
			</h2>
			{images &&
				divideArray(images, 2).map(group => {
					return <GallerySection items={group} />;
				})}
		</Section>
	);
}

const GallerySection = ({ items }) => {
	console.log("items", items);

	return (
		<div className='o-gallery_section'>
			<Container classes='o-gallery_section'>
				{items.map((item, i) => (
					<div className='o-gallery_image' key={i}>
						<img src={item.url}></img>
					</div>
				))}
			</Container>
		</div>
	);
};

export default Gallery;
