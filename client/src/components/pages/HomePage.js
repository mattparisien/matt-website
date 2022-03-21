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
import Grid from "../Grid/Grid";
import Filter from "../Filter/Filter";

// const gradientAnim = keyframes`
// 	0% {
// 		transform: translateY(0)
// 	}
// 	100% {
// 		transform: translateY(-100%)
// 	}
// `;

function HomePage(props, ref) {
	const data = useContext(DataContext);
	const [selected, setSelected] = useState("software");
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	const filterCategories = [
		{
			name: "software",
		},
		{
			name: "photography",
		},
	];

	return (
		<>
			<div className='o-page o-page_home'>
				<Container classes='-mobile-padding-none'>
					<Section classes="o-hero" data-scroll-section>
						<h1 className="o-h1 -split -huge">matthew</h1>
					</Section>
					<Section data-scroll-section>
						<Filter
							categories={filterCategories}
							selected={selected}
							setSelected={setSelected}
						/>
						<Grid
							items={
								data.photos &&
								data.projects && {
									software: data.projects,
									photography: data.photos,
								}
							}
							category={selected}
						/>
					</Section>
				</Container>
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
