import { useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function heroAnim(stickySection, words, blob, timelines) {
	const heroTitleTl = timelines[0];
	const scrollTl = timelines[1];

	console.log('words', words)

	scrollTl
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
				morphSVG:
					"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
			},

			0
		)
		.to(
			blob,
			{
				morphSVG:
					"M34,-64.5C41.4,-54.6,42.8,-40.1,48.4,-28.6C53.9,-17,63.6,-8.5,63.8,0.1C63.9,8.7,54.5,17.4,49.3,29.4C44,41.5,42.9,57,35.4,68.1C27.9,79.1,14,85.7,3.4,79.8C-7.1,73.9,-14.2,55.4,-23.9,45.6C-33.6,35.8,-45.8,34.7,-57.3,28.5C-68.7,22.4,-79.4,11.2,-81.6,-1.3C-83.8,-13.7,-77.6,-27.4,-66.5,-34.3C-55.5,-41.2,-39.7,-41.3,-27.8,-48.5C-15.9,-55.8,-7.9,-70.3,2.7,-74.9C13.3,-79.6,26.6,-74.4,34,-64.5Z",
			},
			0.5
		);

	//Play words timeline
	const firstWord = $(".title_heading__one");
	const secondWord = firstWord.next();
	const thirdWord = secondWord.next();

	console.log(heroTitleTl);

	heroTitleTl
		.to(words[0], {
			scale: 1.5,
			opacity: 0,
		})
		.to(words[1], {
			scale: 1.25,
			opacity: 1,
		})
		.to(words[1], {
			scale: 1.5,
			opacity: 0,
		})
		.to(words[2], {
			scale: 1.5,
			opacity: 1,
		});
}
