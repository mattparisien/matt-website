import React, { useRef, useState, forwardRef } from "react";
import Section from "../../Section";
import { useIntersect } from "../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import waveAnimation from "../motion/sectionWave";
import ImageGallery from "../../ImageGallery/ImageGallery";
import useFetch from "../../../helpers/hooks/useFetch";
import { StyledFeaturedWork } from "./styles/StyledFeaturedWork";
import Balls from "./Balls";
import Scene from "../../Scene/Scene";

function FeaturedWork(props, ref) {
	/***** WAVE ANIMATION *****/
	const waveAnim = useRef(null);
	const waveSection = useRef(null);
	const wavePath = useRef(null);
	const [trigger, setTrigger] = useState(null);




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
			<div className="scene-"></div>
			<ImageGallery data={data} ref={ref}/>
			
			
			
		</Section>
		</StyledFeaturedWork>
	);
}

export default forwardRef(FeaturedWork);
