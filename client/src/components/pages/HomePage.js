import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import $ from "jquery";
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../App/App";
import useResize from "../../helpers/hooks/useResize";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import StickySection from "../Layouts/StickySection";
import Work from "./Work";
import Slider from "../Slider/Slider";
import Link from "../Link/Link";
import BlobCanvas from "../Three/BlobCanvas";
import { OrbitControls } from "@react-three/drei";
import Marquee from "react-fast-marquee";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import HeroCanvas from "./HeroCanvas";

function HomePage(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
	const data = useContext(DataContext);
	const [loaded, setLoaded] = useState(false);
	const scroll = useLocomotiveScroll();
	const { windowWidth } = useResize();
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	const sticky = useRef(null);
	const grow = useRef(null);
	const path = useRef(null);
	const inner = useRef(null);
	const heroTitleTl = useRef(null);
	const fantasticRefs = useRef([]);
	fantasticRefs.current = [];
	const trigger = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			gsap.to($(".marquee-word").find(".c-char"), {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				stagger: 0.05,
			});
		}, 1000);
	}, []);

	const addToRefs = el => {
		if (el && !fantasticRefs.current.includes(el)) {
			fantasticRefs.current.push(el);
		}
	};

	return (
		<>
			<div className='o-page o-page_home -no-offset' data-theme='dark'>
				{/* <div className='o-sticky' ref={sticky}> */}

				<Section
					classes='o-hero -fullHeight -flex -flex-column -align-center -justify-center -relative'
					ref={trigger}
				>
					<Marquee gradient={false} speed={30}>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
					</Marquee>
					<Marquee gradient={false} direction='right' speed={30}>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
					</Marquee>
					<Marquee gradient={false} speed={30}>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
						<div className='o-h2 -split  -riposte marquee-word'>Web Design</div>
						<div className='o-h2 -split -riposte marquee-word'>
							Web Development
						</div>
					</Marquee>
					{/* <div className='cta'>Enjoy scrolling</div> */}
					{/* <BlobCanvas setLoaded={setLoaded} /> */}
					{/* <div className="c-waveCard"></div> */}
					<HeroCanvas imageUrl={props.imageUrl && props.imageUrl} />
				</Section>

				{/* </div> */}
				<Section classes='o-intro'>
					<Container>
						<div className='o-text -medium -indent -padding-top-lg -split'>
							I am a Montreal-based full-stack developer in love with digital
							products and passionate about crafting great user experiences
							through storytelling. My work is always driven by a passion for
							what I do, and a love for people.
						</div>

						{/* <div className='o-text -big -padding-lg -split' ref={grow}>
							I believe a team who loves creating, learning and growing together
							have the ability to transcend the workplace. Good communication
							creates good stories that engage, progress, and create memorable
							experiences.
						</div> */}
					</Container>
				</Section>

				<Work projects={data.projects} />

				<Section classes='o-photo -padding-huge'>
					<h2 className='o-h2 -split -padding-lg -fadeUpChars'>Photography</h2>
					{/* <Container>
						<Grid items={data.photos} />
					</Container> */}
					<Slider items={data.photos} />
				</Section>
				{/* <Values /> */}
			</div>
		</>
	);
}

export default forwardRef(HomePage);
