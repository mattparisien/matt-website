import { useMediaQuery } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import gsap from "gsap";
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useTheme } from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataContext } from "../../App/App";
import { device, deviceSize } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import Arrow from "../Vector/Arrow";

const gradientAnim = keyframes`
	0% {
		transform: translateY(0)
	}
	100% {
		transform: translateY(-100%)
	}
`;

function HomePage(props, ref) {
	const starRef = useRef(null);

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

	// const pillInfo = [
	// 	{
	// 		text: "ReactJS",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "NodeJS",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Express",
	// 		highlighted: true,
	// 	},
	// 	{
	// 		text: "SQL",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "HTML5",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Styled Components",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Human",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "MaterialUI",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "MongoDB",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "GSAP",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Threejs",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Ruby on rails",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Empathy",
	// 		highlighted: true,
	// 	},
	// 	{
	// 		text: "Rest APIS",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Illustrator",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Photoshop",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Git",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Mobile-first",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Mocha/Chai",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Cypress",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Figma",
	// 		highlighted: false,
	// 	},
	// 	{
	// 		text: "Modern Javascript",
	// 		highlighted: false,
	// 	},
	// ];

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
	const lineRefs = useRef([]);
	lineRefs.current = [];

	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		if (lineRefs.current && !hasPlayed) {
			setHasPlayed(true);

			let delay = 0;
			let rotation = 270;

			//Individual line tls
			lineRefs.current.reverse().forEach((item, index) => {
				let tl = gsap.timeline();

				tl.set(item, {
					rotation: `${rotation}deg`,
					transformOrigin: "center",

					scale: 0.01,
				})
					.to(item, {
						width: "100%",
						delay: 1.4,
						duration: 0.8,
						scale: 1,
						ease: "power3.out",
					})
					.to(
						item,
						{
							rotation: "0deg",
							ease: "expo.inOut",
							duration: 3,
						},
						1
					)
					.to(item, {
						rotation: `${rotation}deg`,
						delay: delay,
						duration: 4,
						transformOrigin: "center",
						ease: "expo.inOut",
						repeat: -1,
						yoyo: true,
						repeatDelay: 1,
					});

				rotation += 26;
				delay += 0.1;
			});
		}
	}, [lineRefs, starRef, hasPlayed]);

	// const heading = {
	// 	marginBottom: 0,
	// 	fontSize: "7vw",
	// 	lineHeight: "7vw",
	// 	fontFamily: "Neue Mtl",
	// 	fontWeight: "lighter",
	// 	width: "100%",
	// 	color: theme.colors.dark,
	// 	textAlign: "center",
	// 	textTransform: "uppercase",
	// 	"& .heading-line": {
	// 		display: "flex !important",
	// 		justifyContent: "space-between",
	// 		transform: "translateY(100%)",
	// 		opacity: 0,
	// 	},
	// 	"& .heading-line:nth-of-type(4)": {
	// 		justifyContent: "flex-end !important",
	// 	},
	// };

	const innerHero = {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "end",
		textAlign: "center",
		flexDirection: "column",
		justifyContent: "center",
	};

	const line = {
		color: theme.colors.orange,
		fill: "none",
		stroke: theme.colors.dark,
		strokeMiterlimit: 10,
		strokeWidth: mobile ? "0.9vw" : "2px",
	};

	const star = {
		height: "60vw",
		width: "60vw",
		maxWidth: "700px",
		maxHeight: "700px",

		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
	};

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

	// const bg = {
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// 	width: "200px",

	// 	background: theme.colors.gradient,
	// 	zIndex: 9,
	// 	filter: `blur(30px)`,
	// 	height: "300%",
	// 	mixBlendMode: "normal",
	// };

	return (
		<>
			<Layout bg={"pink"} color='light' height='100vh'>
				<Box className='hero-inner' sx={innerHero}>
					<svg
						id='svg-star'
						ref={starRef}
						style={star}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 398.89 407.59'
					>
						<path
							className='cls-1'
							d='M223.11,539.31,388.89,167'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M149.89,484.13l312.22-262'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M108.26,402.44l395.48-98.6'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M106.66,310.77l398.68,84.74'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M145.41,227.67,466.59,478.61'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M216.66,170,395.34,536.31'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
						<path
							className='cls-1'
							d='M306,149.34V556.93'
							transform='translate(-106.56 -149.34)'
							style={line}
							ref={addToLineRefs}
						/>
					</svg>{" "}
					<Box className='gradient-overlay' sx={overlay}>
						<Box sx={gradientInner}></Box>
					</Box>
					{/* <Box
						as='h2'
						className='hero-heading'
						sx={heading}
						ref={addToHeadingRef}
					>
						— I Leverage the power of software & design to push people and
						brands forward.
						<svg
							id='svg-star'
							style={star}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 398.89 407.59'
						>
							<path
								class='cls-1'
								d='M223.11,539.31,388.89,167'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M149.89,484.13l312.22-262'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M108.26,402.44l395.48-98.6'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M106.66,310.77l398.68,84.74'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M145.41,227.67,466.59,478.61'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M216.66,170,395.34,536.31'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
							<path
								class='cls-1'
								d='M306,149.34V556.93'
								transform='translate(-106.56 -149.34)'
								style={line}
								ref={addToLineRefs}
							/>
						</svg>{" "}
					</Box> */}
				</Box>
			</Layout>

			<Layout bg='light' height='auto'>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						padding: mobile ? "3rem 0" : "5rem 0",
					}}
				>
					<ParagraphLayout indent indentHeading='about' variant={1}>
						Hey. I'm a full-stack software developer & graphic designer obsessed
						with digital products and passionate about building responsive user
						interfaces. Previously at Lighthouse Labs, I'm currently exploring
						the space where development and animation intersects.
					</ParagraphLayout>
					<Line color='dark' />
				</Box>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box
					sx={{
						width: "100%",
						height: "100%",

						padding: mobile ? "3rem 0" : "5rem 0",
					}}
				>
					<div className='half-section-wrapper'>
						<ParagraphLayout indent indentHeading='Philosophy' variant={2}>
							Good research leads to effective design and better tech stacks. I
							believe that a team of people who love creating, learning and
							growing together have the ability to transcend the workplace.
						</ParagraphLayout>
						<Line color='dark' />
					</div>
				</Box>
			</Layout>
			<Layout bg='light' height='auto' fullWidth={"true"}>
				<Line />
			</Layout>
			<Layout bg='dark' height='100vw'>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "2rem",
					}}
				>
					{/* <MarqueeBlock
						projectTitle={featuredProject && featuredProject.title}
					/> */}

					<Slider
						slides={featuredProjects}
						mobileQuery={mobile}
						desktopQuery={desktop}
					/>
				</Box>
			</Layout>
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

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={desktopQuery ? 2 : 1}
			onSlideChange={handleSlideChange}
			height='100%'
		>
			{slides &&
				slides.map((slide, i)=> {
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
										backgroundColor: theme.colors.orange,
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

// const MarqueeBlock = ({ projectTitle }) => {
// 	const desktop = useMediaQuery(device.laptop);
// 	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);

// 	const marqueeStyle = {
// 		fontSize: desktop ? "10rem" : "13vw",
// 		fontFamily: mobile ? "Georgia" : "Neue Mtl",
// 		fontWeight: "lighter",
// 	};

// 	return (
// 		<Box
// 			sx={{
// 				display: "flex",
// 				flexDirection: "column",
// 				height: "40vw",
// 				justifyContent: "space-between",
// 			}}
// 		>
// 			<Line />
// 			<Box
// 				className='marquee-rail-overflow-wrapper'
// 				sx={{ overflow: "hidden" }}
// 			>
// 				<Box className='marquee-rail-yOffset-wrapper'>
// 					<Marquee sx={marqueeStyle} gradient={false}>
// 						<MarqueeItem multiplier={10}>Featured Work</MarqueeItem>
// 					</Marquee>
// 				</Box>
// 				<Line />
// 			</Box>
// 			<Box
// 				className='marquee-rail-overflow-wrapper'
// 				sx={{ overflow: "hidden" }}
// 			>
// 				<Box className='marquee-rail-yOffset-wrapper'>
// 					<Marquee sx={marqueeStyle} gradient={false} direction={"right"}>
// 						<MarqueeItem multiplier={10}>
// 							{projectTitle ? projectTitle : "Featured Work"}
// 						</MarqueeItem>
// 					</Marquee>
// 				</Box>
// 			</Box>
// 			<Box
// 				className='marquee-rail-overflow-wrapper'
// 				sx={{ overflow: "hidden" }}
// 			>
// 				<Box className='marquee-rail-yOffset-wrapper'>
// 					<Marquee sx={marqueeStyle} gradient={false}>
// 						<MarqueeItem multiplier={10}>Featured Work</MarqueeItem>
// 					</Marquee>
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// };

// const MarqueeItem = ({ speed, multiplier, children }) => {
// 	const marqueeWord = {
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
