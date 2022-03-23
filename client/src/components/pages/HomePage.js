import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import $ from "jquery";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../App/App";
import useResize from "../../helpers/hooks/useResize";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import StickySection from "../Layouts/StickySection";
import Work from "./Work";

// const gradientAnim = keyframes`
// 	0% {
// 		transform: translateY(0)
// 	}
// 	100% {
// 		transform: translateY(-100%)
// 	}
// `;

function HomePage(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
	const data = useContext(DataContext);

	const { windowWidth } = useResize();
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];
	// const image = useRef(null);

	const sticky = useRef(null);

	const grow = useRef(null);

	const path = useRef(null);

	const inner = useRef(null);
	// const stickyBio = useRef(null);

	//Declare hero animation timelines
	const heroTitleTl = useRef(null);

	useEffect(() => {
		ScrollTrigger.refresh();
	}, [windowWidth]);

	useEffect(() => {
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);

		//If there's a scroll trigger ref, set timelines with trigger
		if (sticky.current) {
			heroTitleTl.current = gsap.timeline({
				scrollTrigger: {
					trigger: sticky.current,
					start: "top top",
					pinSpacing: false,
					scrub: 1,
					pin: true,
					invalidateOnResize: true,
				},
			});
		}

		//If all refs are rendered, call heroAnim

		// const timelines = [heroTitle.current, scrollTl.current];

		heroTitleTl.current
			.set(path.current, { scale: 0.0001 })
			.to($(".o-hero_title span:first-of-type"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(2)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to($(".o-hero_title span:nth-of-type(2)"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(3)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to($(".o-hero_title span:nth-of-type(3)"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(4)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to(
				path.current,

				{
					scale: 5,
					duration: 10,
				}
			)
			.to(path.current, {
				morphSVG:
					"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
			})
			.to(path.current, {
				morphSVG:
					"M34,-64.5C41.4,-54.6,42.8,-40.1,48.4,-28.6C53.9,-17,63.6,-8.5,63.8,0.1C63.9,8.7,54.5,17.4,49.3,29.4C44,41.5,42.9,57,35.4,68.1C27.9,79.1,14,85.7,3.4,79.8C-7.1,73.9,-14.2,55.4,-23.9,45.6C-33.6,35.8,-45.8,34.7,-57.3,28.5C-68.7,22.4,-79.4,11.2,-81.6,-1.3C-83.8,-13.7,-77.6,-27.4,-66.5,-34.3C-55.5,-41.2,-39.7,-41.3,-27.8,-48.5C-15.9,-55.8,-7.9,-70.3,2.7,-74.9C13.3,-79.6,26.6,-74.4,34,-64.5Z",
			});

		// heroAnim(words.current, blob.current, timelines);
		// scrollTl.current
		// 	.set(path.current, { scale: 0.0001 })

		// 	.to(
		// 		path.current,

		// 		{
		// 			scale: 5,
		// 		}
		// 	)
		// 	.to(
		// 		path.current,
		// 		{
		// 			duration: 0.5,
		// 			morphSVG:
		// 				"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
		// 		},

		// 		10
		// 	)
		// 	.to(path.current, {
		// 		morphSVG:
		// 			"M34,-64.5C41.4,-54.6,42.8,-40.1,48.4,-28.6C53.9,-17,63.6,-8.5,63.8,0.1C63.9,8.7,54.5,17.4,49.3,29.4C44,41.5,42.9,57,35.4,68.1C27.9,79.1,14,85.7,3.4,79.8C-7.1,73.9,-14.2,55.4,-23.9,45.6C-33.6,35.8,-45.8,34.7,-57.3,28.5C-68.7,22.4,-79.4,11.2,-81.6,-1.3C-83.8,-13.7,-77.6,-27.4,-66.5,-34.3C-55.5,-41.2,-39.7,-41.3,-27.8,-48.5C-15.9,-55.8,-7.9,-70.3,2.7,-74.9C13.3,-79.6,26.6,-74.4,34,-64.5Z",
		// 	});
	}, [heroTitleTl]);

	const fantasticRefs = useRef([]);
	fantasticRefs.current = [];

	const addToRefs = el => {
		if (el && !fantasticRefs.current.includes(el)) {
			fantasticRefs.current.push(el);
		}
	};

	return (
		<>
			<div className='o-page o-page_home -no-offset'>
				<div className='o-sticky' ref={sticky}>
					<div className='o-sticky_inner' ref={inner}>
						<Section
							classes='o-hero -fullHeight -flex -align-center -justify-center'
							data-theme='party'
						>
							<Container>
								<h1 className='o-h1 o-hero_title -split -huge'>
									<span>ask</span>
									<span>for</span>
									<span>good</span>
									<span>stories</span>
								</h1>
								<div className='o-hero_cta'>
									<div className='line'></div>{" "}
									<div className='o-text'>Scroll</div>
								</div>
							</Container>
						</Section>
					</div>
				</div>
				<Section classes='o-intro  -offset-prev' data-theme='dark'>
					<Container>
						<div className='o-text -big -padding-top-lg'>
							I am a Montreal-based full-stack developer in love with digital
							products and passionate about crafting great user experiences
							through storytelling. My work is always driven by a passion for
							what I do, and a love for people.
						</div>
						<div className='o-text -big -padding-lg' ref={grow}>
							I believe a team who loves creating, learning and growing together
							have the ability to transcend the workplace. Good communication
							creates good stories that engage, progress, and create memorable
							experiences.
						</div>
					</Container>
				</Section>
				{/* <Section classes='o-intro -fullHeight' data-theme='dark'>
					<Container>
						<div className='o-text -big -padding-lg'>
							I believe a team who love creating, learning and growing together
							have the ability to transcend the workplace. Communication begins
							with a story. This is why I believe web development is
							storytelling. Good stories engage and create immersive experiences
							for their listeners. They exist, they progress, and create
							memories.
						</div>
					</Container>
				</Section> */}
				<StickySection
					animation={{ x: 0, duration: 1 }}
					els={fantasticRefs.current}
					dataTheme='superstar'
					start={"bottom bottom"}
					classes='-flex -align-center -justify-center -stretchY'
				>
					<div
						className='o-text -huge -padding-lg -flex -flex-column -align-center -justify-start -stretchY'
						ref={grow}
					>
						<div ref={addToRefs} style={{ transform: "translateX(-100vw)" }}>
							Make
						</div>
						<div ref={addToRefs} style={{ transform: "translateX(100vw)" }}>
							Fantastic
						</div>
						<div ref={addToRefs} style={{ transform: "translateX(-100vw)" }}>
							Things
						</div>
					</div>
				</StickySection>

				<Work projects={data.projects} />
				{/* <Work projects={data.projects && data.projects} /> */}
				{/* <Values photos={data.valuePhotos && data.valuePhotos} /> */}
				{/* <div className='c-sticky -offset-prev' ref={stickyBio}>
					<SplitTextSection
						dataThemeRight='regular'
						dataThemeLeft='banana'
						textLeft={"Who am I?"}
						ref={image}
						imageSrc={
							data.photos &&
							data.photos.slice(data.photos.length - 1, data.photos.length)[0]
								.url
						}
						textRight={`I am a Montreal-based full-stack developer in love with digital
					products and passionate about crafting great user experiences.
					My work is entirely driven by a passion for what I do, and a
					love for people who share the desire to improve the lives of others by combining creativity and technology. I believe a team who loves creating, learning
					and growing together have the ability to transcend the
					workplace.`}
					/>
				</div> */}
			</div>
		</>
	);
}

// const Slider = ({ slides, mobileQuery, desktopQuery }) => {
// 	const [currentSlide, setCurrentSlide] = useState(1);

// 	const video = useRef(null);

// 	const handleSlideChange = e => {
// 		if (e.swipeDirection !== "prev") {
// 			setCurrentSlide(2);
// 		} else {
// 			setCurrentSlide(1);
// 		}
// 	};

// 	return (
// 		<Swiper
// 			spaceBetween={50}
// 			slidesPerView={1}
// 			onSlideChange={handleSlideChange}
// 			height='100%'
// 			style={{ transform: "scale(0.7)" }}
// 		>
// 			{slides &&
// 				slides.map((slide, i) => {
// 					return (
// 						<SwiperSlide key={i}>
// 							<Box
// 								as='a'
// 								sx={{
// 									width: "100%",
// 									height: "100%",
// 									display: "block",

// 									"&:hover .cta": {
// 										transform: "translateY(0)",
// 										opacity: 1,
// 									},
// 									"&:hover .arrow-visibility-wrapper": {
// 										transform: "translateX(0)",
// 										opacity: 1,
// 									},
// 									"&:hover .featured-project-image": {
// 										opacity: 0,
// 									},
// 								}}
// 								href={slide.url}
// 								target='_blank'
// 								rel='noreferrer'
// 							>
// 								<Box
// 									sx={{
// 										width: "100%",
// 										height: "90%",
// 									}}
// 								>
// 									<Box
// 										className='media-wrapper'
// 										sx={{
// 											height: "100%",
// 											width: "100%",
// 										}}
// 									>
// 										{slide.cover.image && !desktopQuery && (
// 											<Box
// 												className='featured-project-image'
// 												sx={{
// 													height: "100%",
// 													width: "100%",
// 													position: "absolute",
// 													top: 0,
// 													left: 0,
// 													overflow: "hidden",
// 													transition: "400ms ease",
// 												}}
// 											>
// 												<img
// 													src={slide.cover.image.url}
// 													alt={slide.cover.image.alt}
// 													style={{
// 														zIndex: 1,

// 														objectFit: "cover",
// 														height: "100%%",
// 														width: "100%",
// 													}}
// 												></img>
// 											</Box>
// 										)}
// 										{slide.cover.video && (
// 											<video
// 												muted
// 												autoPlay={true}
// 												playsInline
// 												loop
// 												ref={video}
// 												src={slide.cover.video.url}
// 												className='featured-project-demo-video'
// 												style={{
// 													zIndex: -1,
// 													objectFit: "cover",
// 													height: "100%%",
// 													width: "100%",
// 												}}
// 											></video>
// 										)}
// 									</Box>
// 								</Box>

// 								<Box
// 									sx={{
// 										height: "10%",
// 										marginTop: "1rem",
// 										width: "100%",
// 										display: "flex",
// 										alignItems: "center",
// 										justifyContent: "space-between",
// 										overflow: "hidden",
// 										fontFamily: "Neue Mtl",
// 									}}
// 								>
// 									<Box sx={{ display: "flex" }}>
// 										<Box
// 											component='span'
// 											sx={{
// 												color: "white",
// 												marginRight: "1rem",
// 												display: desktopQuery ? "none" : "block",
// 											}}
// 										>
// 											<Box
// 												component='span'
// 												sx={{
// 													opacity: currentSlide === 1 ? 1 : 0.5,
// 													color: "white",
// 												}}
// 											>
// 												01
// 											</Box>
// 											<Box
// 												component='span'
// 												sx={{
// 													opacity: 0.5,
// 													color: "white",
// 												}}
// 											>
// 												/
// 											</Box>
// 											<Box
// 												component='span'
// 												sx={{
// 													opacity: currentSlide === 2 ? 1 : 0.5,
// 												}}
// 											>
// 												02
// 											</Box>
// 										</Box>
// 										<Box
// 											sx={{
// 												transform: mobileQuery ? "none" : "translateX(-20%)",
// 												opacity: mobileQuery ? 1 : 0,
// 												transition: "400ms ease",
// 											}}
// 											className='arrow-visibility-wrapper'
// 										>
// 											<Arrow color='light' width='40px' height='100%' />
// 										</Box>
// 									</Box>
// 									<Box
// 										component='span'
// 										sx={{
// 											transform: "translateY(-100%)",
// 											opacity: 0,
// 											transition: "400ms ease",

// 											color: "white",
// 										}}
// 										className='cta'
// 									>
// 										View project
// 									</Box>
// 								</Box>
// 							</Box>
// 						</SwiperSlide>
// 					);
// 				})}
// 		</Swiper>
// 	);
// };

// const MarqueeBlock = ({ rails, theme }) => {
// 	const desktop = useMediaQuery(device.laptop);
// 	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);
// 	const [ref, inView, entry] = useInView({ threshold: 0.5 });

// 	const marqueeStyle = {
// 		fontSize: desktop ? "10rem" : "13vw",
// 		fontFamily: mobile ? "Georgia" : "Neue Mtl",
// 		fontWeight: "lighter",
// 	};

// 	const marqueeOffset = {
// 		transform: "translateY(100%)",
// 		opacity: 0,
// 	};

// 	useEffect(() => {
// 		inView &&
// 			gsap.to($(entry.target).find(".marquee-rail-yOffset-wrapper"), {
// 				y: 0,
// 				opacity: 1,
// 				ease: "power3.out",
// 				duration: 1.3,
// 				stagger: 0.2,
// 			});
// 	}, [inView, entry]);

// 	return (
// 		<Box
// 			ref={ref}
// 			sx={{
// 				display: "flex",
// 				flexDirection: "column",
// 				height: "40vw",
// 				justifyContent: "space-between",
// 			}}
// 		>
// 			{rails &&
// 				rails.map((rail, i) => {
// 					return (
// 						<Box
// 							key={i}
// 							className='marquee-rail-overflow-wrapper'
// 							sx={{ overflow: "hidden" }}
// 						>
// 							<Box className='marquee-rail-yOffset-wrapper' sx={marqueeOffset}>
// 								<Marquee
// 									sx={marqueeStyle}
// 									gradient={false}
// 									direction={i % 2 === 0 ? "right" : "left"}
// 								>
// 									<MarqueeItem multiplier={10}>
// 										{Array.isArray(rail)
// 											? rail.map((item, index) => {
// 													return typeof item === "function"
// 														? React.createElement(item, {
// 																key: index,
// 																height: "10vw",
// 																width: "10vw",
// 																style: {
// 																	marginLeft: "3vw",
// 																	fill: theme.colors.red,
// 																},
// 														  })
// 														: item;
// 											  })
// 											: rail}
// 									</MarqueeItem>
// 								</Marquee>
// 							</Box>
// 						</Box>
// 					);
// 				})}
// 		</Box>
// 	);
// };

// const MarqueeItem = ({ speed, multiplier, children }) => {
// 	const marqueeWord = {
// 		display: "flex",
// 		alignItems: "center",
// 		marginRight: "8vw",
// 		fontSize: "10vw",
// 	};
// 	return [...Array(multiplier)].map((e, i) => (
// 		<Box className='marquee-word' key={i} sx={marqueeWord}>
// 			{children}
// 		</Box>
// 	));
// };

export default forwardRef(HomePage);
