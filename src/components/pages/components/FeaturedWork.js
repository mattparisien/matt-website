import React, { useRef, useState, useEffect } from "react";
import Section from "../../Section";
import { useIntersect } from "../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import waveAnimation from "../motion/sectionWave";
import ImageGallery from "../../ImageGallery/ImageGallery";
import useFetch from "../../../helpers/hooks/useFetch";
import useScroll from "../../../helpers/useScroll";
import { StyledFeaturedWork } from "./styles/StyledFeaturedWork";
import Balls from "./Balls";

function FeaturedWork() {
	/***** WAVE ANIMATION *****/
	const waveAnim = useRef(null);
	const waveSection = useRef(null);
	const wavePath = useRef(null);
	const [trigger, setTrigger] = useState(null);
	const [isIntersecting, target] = useIntersect([trigger], {
		threshold: [0.1, 0.3]
	});



	gsap.registerPlugin(ScrollTrigger);



	/***** IMAGE DATA REQUEST *****/

	const [data, error, loading] = useFetch("/api/photos?populate=*");


	return (
		<StyledFeaturedWork>
		<Section
			classes={"section-featuredWork -hasWave"}
			ref={el => {
				if (el) {
					return el.tagName === "SECTION"
						? (waveSection.current = el)
						: (wavePath.current = el);
				}
			}}
		>
			<ImageGallery data={data}/>
			
			
			
		</Section>
		</StyledFeaturedWork>
	);
}

export default FeaturedWork;
