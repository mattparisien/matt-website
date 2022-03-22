import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import $ from "jquery";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../App/App";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
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

	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	const sticky = useRef(null);

	const path = useRef(null);

	const inner = useRef(null);

	//Declare hero animation timelines
	const heroTitleTl = useRef(null);

	useEffect(() => {
		//If there's a scroll trigger ref, set timelines with trigger
		if (sticky.current) {
			heroTitleTl.current = gsap.timeline({
				scrollTrigger: {
					trigger: sticky.current,
					start: "top top",
					end: "+=2000",
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

	return (
		<>
			<div className='o-page o-page_home -no-offset'>
				<div className='o-sticky' ref={sticky}>
					<div className='o-sticky_inner' ref={inner}>
						<Section classes='o-intro -fullHeight' data-theme='regular'>
							<Container>
								<div className='o-text -big -padding-lg'>
									Communication begins with a story. This is why I believe web
									development is storytelling. Good stories engage and create
									immersive experiences for their listeners. They exist, they
									progress, and create memories.
								</div>
								<div className='o-text -big -padding-lg'>
									My love for storytelling is entirely driven by passion and a
									love for people. I believe that great teamwork has the ability
									to transcend the workplace.
								</div>
							</Container>
						</Section>
						<Section
							classes='o-hero -fullHeight -flex -align-center -justify-center -bg-pink'
							data-scroll-section
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
						<svg
							viewBox='0 0 200 200'
							xmlns='http://www.w3.org/2000/svg'
							className='c-blob'
						>
							<defs>
								<clipPath clipPathUnits='objectBoundingBox' id='c-blob_clip'>
									<path
										ref={path}
										class='c-blob_path'
										fill='#FF0066'
										d='M34.8,-55.3C47.5,-45.9,62,-40.4,72.5,-29.5C83,-18.7,89.5,-2.4,84.8,10.3C80,23,63.9,32.2,51.9,43.6C39.9,54.9,32,68.4,21,71.6C10.1,74.8,-3.9,67.7,-19.4,64.1C-35,60.4,-52.1,60.2,-65.3,52.4C-78.5,44.7,-87.8,29.3,-88.1,13.9C-88.3,-1.5,-79.5,-16.9,-71.1,-31.3C-62.7,-45.7,-54.7,-59.2,-42.9,-69C-31.1,-78.8,-15.6,-85,-2.3,-81.5C11,-78,22,-64.7,34.8,-55.3Z'
										transform='translate(100 100)'
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<Work projects={data.projects && data.projects} />

				{/* <Values photos={data.valuePhotos && data.valuePhotos} /> */}

				{/* <SplitSection
					dataThemeRight='sky'
					dataThemeLeft='dark'
					imageSrc={
						data.photos &&
						data.photos.slice(data.photos.length - 1, data.photos.length)[0].url
					}
					text='	I am a Montreal-based full-stack developer in love with digital
					products and passionate about crafting great user experiences.
					My work is entirely driven by a passion for what I do, and a
					love for people. I believe a team who loves creating, learning
					and growing together have the ability to transcend the
					workplace.'
				/>

				<SplitSection
					dataThemeRight='regular'
					reversed={true}
					dataThemeLeft='regular'
					imageSrc={
						data.photos &&
						data.photos.slice(data.photos.length - 1, data.photos.length)[0].url
					}
					text={
						<ul className='o-work_list'>
							{data.projects &&
								data.projects.map(project => {
									return (
										<li key={project.id}>
											<Link
												href={project.Location}
												target='_blank'
												classes='o-text -medium'
											>
												{project.Title}
											</Link>
										</li>
									);
								})}
						</ul>
					}
				/> */}

				{/* <Section></Section> */}
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
