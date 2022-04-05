import axios from "axios";
import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollWrapper from "../components/Containers/ScrollWrapper";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Cursor from "../components/Cursor/Cursor";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import useResize from "../helpers/hooks/useResize";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/pages/Home/HomePage";
import AboutPage from "../components/pages/AboutPage";
import Loader from "../components/Transition/Loader";
import TransitionCard from "../components/Transition/TransitionCard";

import { GlobalStyle } from "../styles/global";
import Canvas from "../components/CursorFollower/Canvas";

import SingleProjectPage from "../components/pages/SingleProjectPage";

import useDevice from "../helpers/hooks/useDevice";
import IntroCard from "../components/Transition/IntroCard";

export const DataContext = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function App() {
	gsap.registerPlugin(CSSRulePlugin);
	const [loading, setLoading] = useState(false);
	const [pageTheme, setPageTheme] = useState("party");
	// const { isResized } = useResize();
	const { windowWidth } = useResize();
	const themes = {
		space: [
			"0.25rem",
			"0.5rem",
			"0.75rem",
			"1rem",
			"1.5rem",
			"2rem",
			"3rem",
			"4rem",
			"6rem",
			"8rem",
			"12rem",
			"16rem",
			"24rem",
		],
		colors: {
			light: "#FFFFFF",
			dark: "#1E1E1E",
			dark2: "#23252B",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#C0FF0D",
			blue: "rgb(78, 140, 162)",
			yellow: "#faf281",
			pink: "#f1b9b8",
			orange: "rgb(231, 100, 53)",
			grey: "rgb(207, 207, 207)",
			purple: "#5b487c",
			gradient:
				"linear-gradient(#516dc1,#ce4469,#ce4469,#fb986c,#fb986c,#a99af4,#a99af4,#2fd8a8,#2fd8a8,#009b8e,#009b8e,#516dc1,#516dc1,#ce4469)",
		},
	};

	const [isSplit, setSplit] = useState(false);
	const app = useRef(null);
	const split = useRef(null);
	const location = useLocation();
	const device = useDevice();
	const [headerColor, setHeaderColor] = useState("orange");
	const [currentTheme, setCurrentTheme] = useState("dark");
	const [hovering, setHovering] = useState(false);

	useEffect(() => {
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setCurrentTheme($(entry.target).attr("data-theme-trigger"));
					// setHeaderColor($(entry.target).attr("data-theme"));
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 1,
		});

		$("[data-theme-trigger]").each((i, el) => {
			observer.observe(el);
		});
	}, []);

	const timeline = useRef(gsap.timeline());

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!split.current) {
			setTimeout(() => {
				const splitText = new SplitText($(".-split"), {
					type: "lines, chars, words",
					charsClass: "c-char",
					linesClass: "c-line",
					wordsClass: "c-word",
				});
				split.current = splitText;
				setSplit(true);
			}, 300);

			// const splitText2 = new SplitText($(".o-h2.-split"), {
			// 	type: "chars",
			// 	charsClass: "c-char",
			// });
		} else {
			split.current = split.current.revert().split();
		}
	}, [isSplit, location]);

	useEffect(() => {
		const rule = CSSRulePlugin.getRule(".App:after");
		timeline.current
			.to(rule, {
				cssRule: {
					scale: 1,

					delay: 3,
				},
				delay: 0.5,
				duration: 0.4,
				ease: "power3.out",
			})
			.set($(".o-page"), {
				display: "block",
			})
			.set(rule, {
				cssRule: {
					display: " none",
				},
			})
			.to(".o-hero .c-waveCard", {
				translateY: "-50%",

				opacity: 1,
				ease: "power3.out",
				duration: 1,
				delay: 0.5,
			});
	}, []);

	useEffect(() => {
		loading
			? document.body.classList.add("is-loading")
			: document.body.classList.remove("is-loading");
	}, [loading]);

	const scrollRef = useRef(null);

	const [state, setState] = useState({
		data: {},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		isTransitioning: false,
	});

	useEffect(() => {
		const fadeUp = (items, target, observer) => {
			gsap.to(items, {
				stagger: 0.06,
				duration: 1,
				ease: "power3.out",
				y: 0,
				opacity: 1,
				onComplete: () => observer.unobserve(target),
			});
		};

		const fadeOut = (items, target, observer) => {
			gsap.to(items, {
				stagger: 0.06,
				duration: 2,
				ease: "expo.inOut",
				y: "-100%",
				opacity: 0,
			});
		};

		if (split.current) {
			//Listen for js mouseenter events

			const handleIntersection = entries => {
				entries.forEach(entry => {
					if (
						entry.isIntersecting &&
						entry.target.classList.contains("-split")
					) {
						const lines = $(entry.target).find(".c-line");
						const chars = $(entry.target).find(".c-char");

						const items = [lines, chars];

						fadeUp(items, entry.target, observer);
					} else if (
						entry.isIntersecting &&
						entry.target.classList.contains("-fadeUpChildren")
					) {
						const children = $(entry.target).children();

						fadeUp(children, entry.target, observer);
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 0.2,
			});

			$(
				".o-text.-split, .-fadeUpChildren, .-fadeUpChars, .o-h2.-split, .c-link.-split"
			).each((i, el) => {
				console.log(el);
				observer.observe(el);
			});
		}
	}, [split.current]);

	const setTransitioning = () => {
		setState(prev => ({ ...prev, isTransitioning: true }));
	};

	const appClasses = classNames("App", {
		"is-old-page": state.isTransitioning,
		[device]: device,
	});

	const toggleLoading = useCallback(() => {
		setLoading(!loading);
	}, [loading]);

	// useEffect(() => {
	// 	if (isResized) {
	// 		toggleLoading();
	// 	} else if (!isResized && !initialRender.current) {
	// 		toggleLoading();
	// 	}

	// 	if (initialRender.current) {
	// 		initialRender.current = false;
	// 	}
	// }, [isResized, toggleLoading]);

	useEffect(() => {
		console.log("Designed & developed by Matt Parisien");

		//Get essential data

		const basePath = process.env.REACT_APP_API_URL;
		const fetchURL = url => axios.get(url);

		const urls = [
			`${basePath}/projects?populate=*`,
			`${basePath}/contact`,
			`${basePath}/socials`,
			`${basePath}/photos?populate=*`,
			`${basePath}/photos?populate=*`,
			`${basePath}/value-image?populate=*`,
		];

		const promiseArray = [...urls].map(fetchURL);

		const findVideo = array => {
			for (let i = 0; i < array.length; i++) {
				if (
					array[i].attributes.ext === ".mov" ||
					array[i].attributes.ext === ".mp4" ||
					array[i].attributes.ext === ".mpeg"
				) {
					return array[i].attributes.url;
				}
			}
			return null;
		};

		const findImage = array => {
			for (let i = 0; i < array.length; i++) {
				if (
					array[i].attributes.ext === ".jpg" ||
					array[i].attributes.ext === ".png" ||
					array[i].attributes.ext === ".jpeg"
				) {
					return {
						url: array[i].attributes.url,
						alt: array[i].attributes.alternativeText,
					};
				}
			}
			return null;
		};

		Promise.all(promiseArray)
			.then(data => {
				const photos = data[3].data.data[0].attributes.Assets.data.map(x => ({
					id: x.id,
					...x.attributes,
				}));

				const contactInfo = {
					...data[1].data.data.attributes,
					...data[1].data.data.id,
				};
				const socials = data[2].data.data.map(x => ({
					id: x.id,
					...x.attributes,
				}));
				const projects = data[0].data.data.map(x => {
					const video = findVideo(x.attributes.Cover.data);
					const image = findImage(x.attributes.Cover.data);

					return {
						...x.attributes,
						id: x.id,
						Cover: {
							video: !video
								? null
								: {
										url: video,
								  },
							image: !image ? null : image,
						},
					};
				});

				const valuePhotos = data[5].data.data.attributes.Image.data.map(x => {
					return {
						id: x.id,
						name: x.attributes.name.replace(x.attributes.ext, ""),
						src: x.attributes.url,
					};
				});

				setState(prev => ({
					...prev,
					data: {
						...prev.data,
						projects: projects,
						contact: contactInfo,
						socials: socials,
						photos: photos,
						valuePhotos: valuePhotos,
					},
				}));
			})
			.catch(err => console.log(err));
	}, []);

	const contentWrapperRef = useRef(null);

	const loadingControls = {
		isLoading: loading,
		setTransitioning,
	};

	return (
		<DataContext.Provider value={state.data}>
			<ThemeProvider theme={themes}>
				<LoadingContext.Provider value={loadingControls}>
					<ColorContext.Provider value={{ currentTheme, setCurrentTheme }}>
						<CursorContext.Provider value={{ hovering, setHovering }}>
							<LocomotiveScrollProvider
								onLocationChange={scroll =>
									scroll.scrollTo(0, { duration: 0, disableLerp: true })
								}
								options={{
									initPosition: {
										x: 0,
										y: 0,
									},

									smooth: true,
									getSpeed: true,
									getDirection: true,
								}}
								watch={[location.pathname]}
								containerRef={scrollRef}
							>
								<div className={appClasses} data-theme={currentTheme}>
									<Helmet>
										<title>Matthew Parisien — Software Developer</title>
										<meta
											name='description'
											content='I am a full-stack web developer aiming to simplify the lives of other people through software'
										/>
										<meta
											content='Matthew Parisien — Software Developer'
											property='og:title'
										/>
										<meta
											content='I am a full-stack web developer aiming to simplify the lives of other people through software'
											property='og:description'
										/>
										<meta property='og:type' content='website' />
									</Helmet>

									<Header color={headerColor} />
									{device && device === "desktop" && <Canvas />}
									<IntroCard />
									{/* <TransitionCard/> */}

									{/* <Loader isActive={play} setDone={togglePlay} /> */}

									{/* <CursorFollower cursorState={cursorState} /> */}
									
									<ScrollWrapper ref={scrollRef}>
									{/* <div className='c-mousePosContainer'>s</div>	 */}
										<ContentWrapper ref={contentWrapperRef}>
											<GlobalStyle />

											<Routes>
												<Route
													path='/'
													element={
														<HomePage
															isLoading={state.isLoading}
															currentTheme={currentTheme}
														/>
													}
												/>
												{/* <Route path='/work' element={<WorkPage />} /> */}
												{/* <Route
												path='/about'
												element={
													<AboutPage
														photos={state.data.photos}
														setPageTheme={setPageTheme}
														toggleLoading={toggleLoading}
													/>
												}
											/> */}
												<Route
													path='/projects/:id'
													element={
														<SingleProjectPage
															location={location}
															setPageTheme={setPageTheme}
														/>
													}
												/>
												<Route path='/about' element={<AboutPage />} />
												{/* <Route
												path='/contact'
												element={
													<ContactPage
														toggleLoading={toggleLoading}
														isLoading={loading}
													/>
												}
											/> */}
											</Routes>
										</ContentWrapper>
										{
											<Footer
												data={{
													contact: { ...state.data.contact },
													socials: state.data.socials,
													personalPhoto: {
														...(state.data.photos &&
															state.data.photos.slice(
																state.data.photos.length - 1,
																state.data.photos.length
															)),
													},
												}}
											/>
										}
									</ScrollWrapper>
									<Cursor isHovering={hovering} setHovering={setHovering} />
									{/* <Loader toggleLoading={toggleLoading} /> */}
								</div>
							</LocomotiveScrollProvider>
						</CursorContext.Provider>
					</ColorContext.Provider>
				</LoadingContext.Provider>
			</ThemeProvider>
		</DataContext.Provider>
	);
}

export default App;
