import React, { useRef, useState, useEffect } from "react";
import Section from "../../Section";
import { useIntersect } from "../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import waveAnimation from "../motion/sectionWave";

function FeaturedWork() {
	const waveAnim = useRef(null);
	const waveSection = useRef(null);
	const wavePath = useRef(null);
	const [trigger, setTrigger] = useState(null);
	const [isIntersecting, target] = useIntersect([trigger], {
		threshold: 0.1,
	});

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		if (waveSection.current && !trigger) {
			setTrigger(waveSection.current);
		}

		if (isIntersecting && wavePath.current && waveSection.current) {
			waveAnim.current = gsap.timeline({
				scrollTrigger: {
					trigger: trigger,
					start: "top bottom",
					end: "+=1000",
					scrub: !0,
				},
			});

			waveAnimation(waveAnim.current, wavePath.current);
		}
	}, [waveSection, isIntersecting, wavePath]);

	return (
		<Section
			classes={"section-featuredWork -hasWave"}
			hasWave
			ref={el => {
				if (el) {
					return el.tagName === "SECTION"
						? (waveSection.current = el)
						: (wavePath.current = el);
				}
			}}
		></Section>
	);
}

export default FeaturedWork;
