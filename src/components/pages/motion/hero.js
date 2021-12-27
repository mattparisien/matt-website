import { useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function heroAnim(words, blob, timelines, trigger) {
	const heroTitleTl = timelines[0];
	const scrollTl = timelines[1];

	const morphingPaths = [
		"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
		"M46.7,-60.6C61.7,-53.3,76,-41.3,77,-27.5C78,-13.8,65.7,1.8,58.1,16.9C50.4,32,47.5,46.6,38.6,59.5C29.7,72.4,14.8,83.7,1.2,82C-12.4,80.3,-24.8,65.8,-35,53.3C-45.2,40.8,-53.2,30.3,-61.8,17C-70.3,3.7,-79.4,-12.5,-77.4,-27.2C-75.4,-41.8,-62.3,-54.8,-47.6,-62.1C-32.8,-69.4,-16.4,-71.1,-0.3,-70.7C15.8,-70.3,31.7,-67.8,46.7,-60.6Z",
		"M33.2,-47C42,-39.2,47.6,-28.3,52,-16.5C56.4,-4.7,59.5,7.8,57.9,20.7C56.3,33.6,49.9,46.7,39.5,52.8C29,58.9,14.5,57.9,-1.4,59.9C-17.3,61.8,-34.7,66.7,-45.4,60.7C-56.1,54.7,-60.1,37.8,-61,22.7C-61.8,7.7,-59.6,-5.5,-57.8,-21.1C-55.9,-36.8,-54.5,-54.9,-44.9,-62.4C-35.3,-69.9,-17.7,-66.8,-2.8,-63C12.2,-59.3,24.3,-54.7,33.2,-47Z",
	];

	console.log(words[4])


	heroTitleTl
		.to(words[1], {
			scale: 1.5,
			opacity: 0,
		})
		.to(words[2], {
			scale: 1.25,
			opacity: 1,
		})
		.to(words[2], {
			scale: 1.5,
			opacity: 0,
		})
		.to(words[3], {
			scale: 1.25,
			opacity: 1,
		})
		.to(words[3], {
			scale: 1.5,
			opacity: 0,
		})
		.to(words[4], {
			scale: 1.5,
			opacity: 1,
		})
		.fromTo(
			blob,
			{
				scale: 0.01,
			},
			{
				scale: 5,
				duration: 4,
			}
		)
		.to(
			blob,
			{
				duration: 0.5,
				morphSVG: morphingPaths[0],
			},

			0
		)
		.to(
			blob,
			{
				morphSVG: morphingPaths[1],
			},
			0.5
		)
		.to(
			blob,
			{
				morphSVG: morphingPaths[2],
			},
			0.5
		);
}
