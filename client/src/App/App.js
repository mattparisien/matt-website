import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollWrapper from "../components/Containers/ScrollWrapper";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";
import UploadPage from "../components/pages/UploadPage";
import WorkPage from "../components/pages/WorkPage";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import Loader from "../components/Transition/Loader";
import { device } from "../styles/breakpoints";
import { GlobalStyle } from "../styles/global";
import Footer from "../components/Footer/Footer";

export const ColorContext = createContext();
export const LoadingContext = createContext();
export const DataContext = createContext();

function App() {
	const location = useLocation();

	const [headerColor, setHeaderColor] = useState(null);
	const [palette, setPalette] = useState("primary");

	useEffect(() => {
		location.pathname === "/" && setHeaderColor("light");
		location.pathname === "/work" && setHeaderColor("dark");
		location.pathname === "/about" && setHeaderColor("dark");
	}, [location]);

	const baseSpacing = {
		desktopL: 2,
		desktop: 1.5,
		laptopL: 2,
		laptop: 2,
		tablet: 1,
		mobileL: 1,
		mobileM: 0.5,
		mobileS: 0.4,
	};

	const baseFontSize = {
		desktopL: 1.2,
		desktop: 1.2,
		laptopL: 1,
		laptop: 1,
		tablet: 0.8,
		mobileL: 0.7,
		mobileM: 0.7,
		mobileS: 0.6,
	};

	const themes = {
		colors: {
			light: palette === "primary" ? "#ffff" : "#f1b9b8",
			dark: palette === "primary" ? "#141414" : "rgb(231, 100, 53)",
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
		},
		typography: {
			setSize: multiplier => {
				return `
					@media ${device.mobileS} {
						
						font-size: ${baseFontSize.mobileS * multiplier}rem;
					}
				
					@media ${device.mobileL} {
						
						font-size: ${baseFontSize.mobileL * multiplier}rem;
					}
				
					@media ${device.tablet} {
						
						font-size: ${baseFontSize.tablet * multiplier}rem;
					}
				
					@media ${device.laptop} {
						
						font-size: 8rem;
						font-size: ${baseFontSize.laptop * multiplier}rem;
					}
				
					@media ${device.laptopL} {
					
						font-size: ${baseFontSize.laptopL * multiplier}rem;
					}

					@media ${device.desktop} {
					
						font-size: ${baseFontSize.desktop * multiplier}rem;
					}

					@media ${device.desktopL} {
					
						font-size: ${baseFontSize.desktopL * multiplier}rem;
					}
					`;
			},
		},
		spacing: (multiplier, property) => {
			return Object.entries(device).map(size => {
				return `@media ${size[1]} {
						${
							Array.isArray(property)
								? property.map(
										prop => `${prop}: ${baseSpacing[size[0]] * multiplier}rem;`
								  )
								: `
								${property}: ${baseSpacing[size[0]] * multiplier}rem;
								`
						};
					}

					`;
			});
		},
		components: {
			header: {
				styles: {
					color: headerColor,
				},
			},
		},
	};

	const togglePartyMode = () => {
		setPalette(prev => (prev === "primary" ? "secondary" : "primary"));
	};

	const scrollRef = useRef(null);

	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		data: {},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		menuActive: false,
		isLoading: true,
	});

	useEffect(() => {
		//Get essential data

		const basePath = process.env.REACT_APP_API_URL;
		const fetchURL = url => axios.get(url);

		const urls = [`${basePath}/photography`, `${basePath}/software`];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				const photography = data[0].data;
				const software = data[1].data.softwareProjects;

				setState(prev => ({
					...prev,
					data: { ...prev.data, photography: photography, software: software },
				}));
			})
			.catch(err => console.log(err));
	}, []);

	// const toggleModalVisibility = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		modal: {
	// 			isActive: !state.modal.isActive,
	// 			hasBeenActive: true,
	// 		},
	// 	}));
	// };

	/***** ANIMATE CONTENT ENTRY ON LOAD  *****/

	// const galleryRef = useRef(null);
	// const revealContentTl = useRef(gsap.timeline({ paused: true }));
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const contentWrapperRef = useRef(null);
	// const menuTriggerRef = useRef(null);

	// const location = useLocation();

	// useEffect(() => {
	// 	if (!state.isLoading) {
	// 		//If not loading, animate content in

	// 		const headerTitleChars = $(headerRef.current).find(".char");
	// 		const header = headerRef.current;
	// 		const mainContent = galleryRef.current;
	// 		const menuBtn = menuTriggerRef.current;
	// 		const titleChars = headerTitleChars;
	// 		const timeline = revealContentTl.current;

	// 		const refs = {
	// 			header,
	// 			mainContent,
	// 			titleChars,
	// 			menuBtn,
	// 		};

	// 		animateContentEntry(timeline, refs).play();
	// 	} else {
	// 		const titleChars = $(headerRef.current).find(".char");
	// 		// revealContentTl.current.set(titleChars, { clearProps: "all" });
	// 	}
	// }, [headerRef, state.isLoading]);

	const toggleMenuActivity = () => {
		setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	};

	// const toggleLoadingState = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		isLoading: state.isLoading ? false : true,
	// 	}));
	// };

	const changeColors = (fg, bg) => {
		setHeaderColor(fg);
	};

	const toggleLoading = () => {
		setState(prev => ({ ...prev, isLoading: !state.isLoading }));
	};

	const colorContextControls = {
		changeColors,
	};

	const loadingControls = {
		isLoading: state.isLoading,
		toggleLoading,
	};

	return (
		<DataContext.Provider value={state.data}>
			<ThemeProvider theme={themes}>
				<ColorContext.Provider value={colorContextControls}>
					<LoadingContext.Provider value={loadingControls}>
						<LocomotiveScrollProvider
							options={{
								smooth: true,
								getDirection: true,
								initPosition: { x: 0, y: 0 },
							}}
							watch={[location.pathname]}
							containerRef={scrollRef}
						>
							<div className='App'>
								<Helmet>
									<title>Matthew Parisien</title>
									<meta
										name='description'
										content='Web Developer, Photographer & Graphic Designer'
									/>
								</Helmet>
								{state.isLoading && (
									<Loader
										isActive={state.isLoading}
										toggleLoading={toggleLoading}
									/>
								)}
								<Header
									ref={headerRef}
									isMenuActive={state.menuActive}
									toggleMenu={toggleMenuActivity}
								/>
								<Menu isOpen={state.menuActive} />

								<ScrollWrapper ref={scrollRef}>
									<ContentWrapper ref={contentWrapperRef}>
										<GlobalStyle
											isScrollDisabled={state.isLoading}
											isCursorWait={state.isLoading}
										/>

										<Routes>
											<Route path='/' element={<HomePage isLoading={state.isLoading}/>} />
											<Route path='/about' element={<AboutPage />} />
											<Route path='/work' element={<WorkPage />} />
											<Route path='/upload' element={<UploadPage />} />
										</Routes>
									</ContentWrapper>
									<Footer />
								</ScrollWrapper>
								<ThemeSwitch togglePartyMode={togglePartyMode} />
							</div>
						</LocomotiveScrollProvider>
					</LoadingContext.Provider>
				</ColorContext.Provider>
			</ThemeProvider>
		</DataContext.Provider>
	);
}

export default App;
