import { useMediaQuery } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import gsap from "gsap";
import $ from "jquery";
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import { useTheme } from "styled-components";
import Container from "../Containers/Container";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataContext } from "../../App/App";
import { device, deviceSize } from "../../styles/breakpoints";
import ContainerFluid from "../Containers/ContainerFluid";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import Link from "../Link/Link";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import Star from "../Star/Star";
import Arrow from "../Vector/Arrow";
import MtlLogo from "../Vector/MtlLogo";
import Section from "../Containers/Section";

const gradientAnim = keyframes`
	0% {
		transform: translateY(0)
	}
	100% {
		transform: translateY(-100%)
	}
`;

function HomePage(props, ref) {
	const [featuredProjects, setFeaturedProjects] = useState(null);
	const data = useContext(DataContext);
	const theme = useTheme();

	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const desktop = useMediaQuery(device.laptop);
	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);
	const headingRef = useRef([]);
	headingRef.current = [];

	const baseSpacing = desktop ? 5 : 2;
	const setVerticalSpacing = multiplier => {
		return `${baseSpacing * multiplier}rem 0`;
	};

	useEffect(() => {
		if (data && data.projects) {
			setFeaturedProjects([
				{
					id: data.projects[0].id,
					title: data.projects[0].Title,
					url: data.projects[0].Location,
					description: data.projects[0].PreviewText,
					cover: {
						...data.projects[0].Cover,
					},
				},
				{
					id: data.projects[1].id,
					title: data.projects[1].Title,
					url: data.projects[1].Location,
					description: data.projects[1].PreviewText,
					cover: {
						...data.projects[1].Cover,
					},
				},
			]);
		}
	}, [data]);

	const overlay = {
		height: "30vw",
		width: "30vw",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 2,
		overflow: "hidden",
		borderRadius: "50%",
		filter: "blur(5vw)",
		opacity: 0.9,
		mixBlendMode: "exclusion",
	};

	const gradientInner = {
		width: "100%",
		animation: `${gradientAnim} 60s linear infinite`,
		background: theme.colors.gradient,
		height: "300%",
	};

	return (
		<>
			<Section classes={"Home -flex -justify-center -align-center -bg-pink"}>
				<Star
					height='60vw'
					strokeWidth={mobile ? "0.9vw" : "2px"}
					color='dark'
				/>
				<Box className='gradient-overlay' sx={overlay}>
					<Box sx={gradientInner}></Box>
				</Box>
			</Section>

			<Container classes={"-bg-light "}>
				<Section classes='-fullHeight'>
					<ParagraphLayout indent indentHeading='about' variant={1} classes={"-align-start"}>
						Hey. I'm a full-stack software developer & graphic designer obsessed
						with digital products and passionate about building responsive user
						interfaces. Having just graduated from Lighthouse Labs, I'm
						currently exploring the intersection between technology, design and
						strategy.
					</ParagraphLayout>
				</Section>
				<Section classes='-padding-huge'>
					<Line color='dark' />

					<MarqueeBlock
						rails={[
							"Work Hard Play Hard",
							["Montreal Native", MtlLogo],
							"Never Play It Safe",
						]}
						theme={theme}
					/>
				</Section>
			</Container>

			<Container classes={"-bg-dark"}>
				<Slider
					slides={featuredProjects}
					mobileQuery={mobile}
					desktopQuery={desktop}
				/>

				<Box
					sx={{
						display: "flex",
						alignItems: "end",
						justifyContent: "end",
						paddingTop: "5rem",
					}}
				></Box>
			</Container>
		</>
	);
}

const Slider = ({ slides, mobileQuery, desktopQuery }) => {
	const [currentSlide, setCurrentSlide] = useState(1);

	const theme = useTheme();
	const video = useRef(null);

	const handleSlideChange = e => {
		if (e.swipeDirection !== "prev") {
			setCurrentSlide(2);
		} else {
			setCurrentSlide(1);
		}
	};

	const slideColors = ["orange", "yellow"];

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={handleSlideChange}
			height='100%'
			style={{
				backgroundColor: theme.colors[slideColors[currentSlide - 1]],
				transition: "400ms ease",
			}}
		>
			{slides &&
				slides.map((slide, i) => {
					return (
						<SwiperSlide key={i}>
							<Box
								as='a'
								sx={{
									width: "100%",
									height: "100%",
									display: "block",

									"&:hover .cta": {
										transform: "translateY(0)",
										opacity: 1,
									},
									"&:hover .arrow-visibility-wrapper": {
										transform: "translateX(0)",
										opacity: 1,
									},
									"&:hover .featured-project-image": {
										opacity: 0,
									},
								}}
								href={slide.url}
								target='_blank'
								rel='noreferrer'
							>
								<Box
									sx={{
										width: "100%",
										height: "90%",
									}}
								>
									<Box
										className='media-wrapper'
										sx={{
											height: "100%",
											width: "100%",
											transform: "scale(0.7)",
										}}
									>
										{slide.cover.image && !desktopQuery && (
											<Box
												className='featured-project-image'
												sx={{
													height: "100%",
													width: "100%",
													position: "absolute",
													top: 0,
													left: 0,
													overflow: "hidden",
													transition: "400ms ease",
												}}
											>
												<img
													src={slide.cover.image.url}
													alt={slide.cover.image.alt}
													style={{
														zIndex: 1,

														objectFit: "cover",
														height: "100%%",
														width: "100%",
													}}
												></img>
											</Box>
										)}
										{slide.cover.video && (
											<video
												muted
												autoPlay={true}
												playsInline
												loop
												ref={video}
												src={slide.cover.video.url}
												className='featured-project-demo-video'
												style={{
													zIndex: -1,
													objectFit: "cover",
													height: "100%%",
													width: "100%",
												}}
											></video>
										)}
									</Box>
								</Box>

								<Box
									sx={{
										height: "10%",
										marginTop: "1rem",
										width: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										overflow: "hidden",
										fontFamily: "Neue Mtl",
									}}
								>
									<Box sx={{ display: "flex" }}>
										<Box
											component='span'
											sx={{
												fontSize: "0.8rem",
												marginRight: "1rem",
												display: desktopQuery ? "none" : "block",
											}}
										>
											<Box
												component='span'
												sx={{
													opacity: currentSlide === 1 ? 1 : 0.5,
												}}
											>
												01
											</Box>
											<Box
												component='span'
												sx={{
													opacity: 0.5,
												}}
											>
												/
											</Box>
											<Box
												component='span'
												sx={{
													opacity: currentSlide === 2 ? 1 : 0.5,
												}}
											>
												02
											</Box>
										</Box>
										<Box
											sx={{
												transform: mobileQuery ? "none" : "translateX(-20%)",
												opacity: mobileQuery ? 1 : 0,
												transition: "400ms ease",
											}}
											className='arrow-visibility-wrapper'
										>
											<Arrow color='light' width='40px' height='100%' />
										</Box>
									</Box>
									<Box
										component='span'
										sx={{
											transform: "translateY(-100%)",
											opacity: 0,
											transition: "400ms ease",
											fontSize: "0.8rem",
										}}
										className='cta'
									>
										View project
									</Box>
								</Box>
							</Box>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
};

const MarqueeBlock = ({ rails, theme }) => {
	const desktop = useMediaQuery(device.laptop);
	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);
	const [ref, inView, entry] = useInView({ threshold: 0.5 });

	const marqueeStyle = {
		fontSize: desktop ? "10rem" : "13vw",
		fontFamily: mobile ? "Georgia" : "Neue Mtl",
		fontWeight: "lighter",
	};

	const marqueeOffset = {
		transform: "translateY(100%)",
		opacity: 0,
	};

	useEffect(() => {
		inView &&
			gsap.to($(entry.target).find(".marquee-rail-yOffset-wrapper"), {
				y: 0,
				opacity: 1,
				ease: "power3.out",
				duration: 1.3,
				stagger: 0.2,
			});
	}, [inView, entry]);

	return (
		<Box
			ref={ref}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "40vw",
				justifyContent: "space-between",
			}}
		>
			<Line />

			{rails &&
				rails.map((rail, i) => {
					return (
						<Box
							key={i}
							className='marquee-rail-overflow-wrapper'
							sx={{ overflow: "hidden" }}
						>
							<Box className='marquee-rail-yOffset-wrapper' sx={marqueeOffset}>
								<Marquee
									sx={marqueeStyle}
									gradient={false}
									direction={i % 2 === 0 ? "right" : "left"}
								>
									<MarqueeItem multiplier={10}>
										{Array.isArray(rail)
											? rail.map((item, index) => {
													return typeof item === "function"
														? React.createElement(item, {
																key: index,
																height: "10vw",
																width: "10vw",
																style: {
																	marginLeft: "3vw",
																	fill: theme.colors.red,
																},
														  })
														: item;
											  })
											: rail}
									</MarqueeItem>
								</Marquee>
							</Box>
						</Box>
					);
				})}
		</Box>
	);
};

const MarqueeItem = ({ speed, multiplier, children }) => {
	const marqueeWord = {
		display: "flex",
		alignItems: "center",
		marginRight: "8vw",
		fontSize: "10vw",
	};
	return [...Array(multiplier)].map((e, i) => (
		<Box className='marquee-word' key={i} sx={marqueeWord}>
			{children}
		</Box>
	));
};

export default forwardRef(HomePage);
