import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Marquee({ text }) {
	const item = useRef(null);
	const marquee = useRef(null);
	const [start2, setStart2] = useState(false);
	const sliderTwo = useRef(null);
	const windowWidth = useRef(null);
	const baseDuration = useRef(7);
	const [scrollDirection, setScrollDirection] = useState(null);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		//Calculate slider width

		const items = document.querySelectorAll(".c-marquee_item");
		const windowWidth = window.innerWidth;

		const container = document.querySelector(".c-marquee");
		const sliderOne = document.querySelector(".c-marquee_slider_one");
		const sliderTwo = document.querySelector(".c-marquee_slider_two");

		sliderTwo.current = sliderTwo;

		container.style.width = `${windowWidth * 2}px`;
		sliderOne.style.width = `${windowWidth}px`;
		sliderTwo.style.width = `${windowWidth}px`;

		//Set slider two offset
		sliderTwo.style.transform = `translateX(${windowWidth})`;

		//Get slider one right edge
		let dim = sliderOne.getBoundingClientRect();

		//Slider one animation

		const sliderOneAnimation = duration => {
			gsap.to(sliderOne, {
				x: -windowWidth,
				onComplete: () => console.log("done!"),
				duration: duration,

				ease: "none",
				onUpdate: () => {
					if (sliderOne.getBoundingClientRect().x < 0 && !start2) {
						setStart2(true);
					}
				},
				onComplete: () => {
					gsap.set(sliderOne, { x: windowWidth });
					sliderOneAnimation(baseDuration.current * 2);
				},
			});
		};

		setTimeout(() => {
			sliderOneAnimation(baseDuration.current);
		}, 6000);

		//Slider two animation
	}, []);

	useEffect(() => {
		const windowWidth = window.innerWidth;
		const sliderTwo = document.querySelector(".c-marquee_slider_two");
		const sliderTwoAnimation = duration => {
			gsap.to(sliderTwo, {
				x: -windowWidth * 2,
				ease: "none",
				onComplete: () => {
					gsap.set(sliderTwo, { x: 0 });
					sliderTwoAnimation(baseDuration.current * 2);
				},
				duration: duration,
			});
		};

		if (start2) {
			sliderTwoAnimation(baseDuration.current * 2);
		}
	}, [start2]);

	useEffect(() => {
		//Scroll animation
		const container = document.querySelector(".c-marquee");
		const heroSection = document.querySelector(".o-hero");
		const sectionTop = heroSection.getBoundingClientRect().top;

		if (scroll && scroll.scroll && sectionTop > 0) {
			scroll.scroll.on("scroll", e => {
				if (sectionTop > 0) {
					gsap.to(container, {
						x: `-=${1.8 * e.speed}`,
					});
				}

				if (e.direction !== scrollDirection) {
					setScrollDirection(e.direction);
				}
			});
		}
	}, [scroll]);

	// useEffect(() => {

	// 	//Listen for class change on html element
	// 	function callback(mutationsList, observer) {
	// 		console.log('Mutations:', mutationsList)
	// 		console.log('Observer:', observer)
	// }

	// const mutationObserver = new MutationObserver(callback)
	// }, [scrollDirection]);

	return (
		<div className='c-marquee'>
			<div className='c-marquee_slider c-marquee_slider_one'>
				<div className='c-marquee_item' ref={item}>
					{text} <span>—</span>
				</div>
			</div>
			<div className='c-marquee_slider c-marquee_slider_two'>
				<div className='c-marquee_item' ref={item}>
					{text} <span>—</span>
				</div>
			</div>
		</div>
	);
}

export default Marquee;
