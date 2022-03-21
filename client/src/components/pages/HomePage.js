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
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import SplitSection from "../Layouts/SplitSection";

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
	const [selected, setSelected] = useState("software");
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	console.log(data.photos);

	const sticky = useRef(null);

	const filterCategories = [
		{
			name: "software",
		},
		{
			name: "photography",
		},
	];
	const words = ["ask", "for", "good", "stories"];
	const [word, setWord] = useState(words[0]);
	const path = useRef(null);
	const titleTl = useRef(null);
	const [hasPlayed, setPlayed] = useState(false);
	const blobTl = useRef(gsap.timeline({ paused: true }));
	const fade = useRef(gsap.timeline({ paused: true }));
	const inner = useRef(null);

	useEffect(() => {
		if (sticky.current) {
			gsap.set(path.current, {
				scale: 0.00001,
				transformOrigin: "center",
			});

			// blobTl.current = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: sticky.current,
			// 		start: "top top",
			// 		end: "+=1600",
			// 		scrub: !0,
			// 		pin: true,
			// 	},
			// });

			titleTl.current = gsap.timeline({
				scrollTrigger: {
					trigger: sticky.current,
					start: "top top",

					scrub: !0,
					pin: true,
				},
			});

			// fade.current.to(inner.current, {
			// 	opacity: 0,
			// });

			titleTl.current
				.to(
					$(".o-hero_title span:first-of-type"),
					{
						scale: 1.1,
					},
					0
				)
				.to(
					$(".o-hero_title span:first-of-type"),
					{
						opacity: 0,
					},
					0
				)
				.to($(".o-hero_title span:nth-of-type(2)"), {
					opacity: 1,
					scale: 1.1,
				})
				.to($(".o-hero_title span:nth-of-type(2)"), {
					opacity: 0,
				})
				.to($(".o-hero_title span:nth-of-type(3)"), {
					opacity: 1,
					scale: 1.1,
				})
				.to($(".o-hero_title span:nth-of-type(3)"), {
					opacity: 0,
				})
				.to($(".o-hero_title span:nth-of-type(4)"), {
					opacity: 1,
					scale: 1.1,
				})
				.to($(".o-hero"), {
					x: "-100%",
				});

			// blobTl.current.to(
			// 	path.current,
			// 	{
			// 		scale: 5,

			// 		transformOrigin: "center",
			// 	},
			// 	10
			// );

			// titleTl.current = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: sticky.current,
			// 		start: "top top",
			// 		end: "+=3000",
			// 		pin: true,
			// 		scrub: 2,
			// 		onUpdate: self => {
			// 			if (self.progress > 0.2 && self.progress < 0.4) {
			// 				setWord("for");
			// 			} else if (self.progress > 0.4 && self.progress < 0.6) {
			// 				setWord("good");
			// 			} else if (self.progress > 0.6 && !hasPlayed) {
			// 				setWord("stories");
			// 				setPlayed(true);
			// 			}
			// 		},
			// 	},
			// });
		}
	}, [path.current, hasPlayed]);

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
									immersive experiences for their listeners. Good stories are
									touching, they exist, they progress.
								</div>

								<svg
									className='o-blob'
									width='100%'
									height='100%'
									viewBox='0 0 2000 3000'
									preserveAspectRatio='none'
								>
									{" "}
									<defs>
										{" "}
										<clipPath
											id='maskTitle'
											clipPathUnits='objectBoundingBox'
											transform='scale(0.0005, 0.00033333333333333)'
										>
											{" "}
											<path
												id='blobTitle'
												fill='#fff'
												d='M186.25 355.2 C426.32 670.51 94.18 982.49 354.17 1137.24 614.16 1291.98 786.18 1016.62 1125.3 954.2 1464.42 891.77 1714.68 1134.51 1772.55 854.72 1830.42 574.92 1467.33 143.84 1070.57 53.08 673.81 -37.66 -53.8 39.9 186.25 355.2 '
												ref={path}
											></path>{" "}
										</clipPath>{" "}
									</defs>{" "}
								</svg>
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
					</div>
				</div>
				<div>
					<Section classes='-fullHeight -flex -align-center -justify-center'>
						<Container>
							<h1 className='o-h1'>About me</h1>
						</Container>
					</Section>
				</div>
				<SplitSection
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
				/>

				<Section></Section>
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
