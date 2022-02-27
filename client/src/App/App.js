import gsap from "gsap/all";
import $ from "jquery";
import { createContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Construction from "../components/pages/Construction";
import { GlobalStyle } from "../styles/global";
import AboutPage from "../components/pages/AboutPage";
import Header from "../components/Header/Header";
import Loader from "../components/Transition/Loader";
import WorkPage from "../components/pages/WorkPage";
import HomePage from "../components/pages/HomePage";
import UploadPage from "../components/pages/UploadPage";
import axios from "axios";
import useResize from "../helpers/hooks/useResize";
import { deviceSize, device } from "../styles/breakpoints";
import MediaQuery from "../components/MediaQueries/MediaQuery";

export const ColorContext = createContext();
export const LoadingContext = createContext();
export const DataContext = createContext();

function App() {
	//Themes

	const [headerColor, setHeaderColor] = useState("light");

	const baseSpacing = {
		desktopL: 2,
		desktop: 1.5,
		laptop: 2,
		laptopL: 2,
		tablet: 1,
		mobileL: 1,
		mobileM: 0.5,
		mobileS: 0.4,
	};

	const themes = {
		colors: {
			light: "#ffff",
			dark: "#141414",
			dark2: "#23252B",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#1c8c53",
			blue: "rgb(78, 140, 162)",
			yellow: "#faf281",
			pink: "#f1b9b8",
			orange: "rgb(231, 100, 53)",
			grey: "rgb(207, 207, 207)",
			purple: "#5b487c",
		},
		spacing: (multiplier, property) => {
			return `

			@media ${device.mobileL} {
				${property}: ${baseSpacing.mobileL * multiplier}rem;
			}

			@media ${device.mobileM} {
				${property}: ${baseSpacing.mobileM * multiplier}rem;
			}

			@media ${device.mobileS} {
				${property}: ${baseSpacing.mobileS * multiplier}rem;
			}
		
			@media ${device.tablet} {
				${property}: ${baseSpacing.tablet * multiplier}rem;
			}
		
			@media ${device.laptop} {
				${property}: ${baseSpacing.laptop * multiplier}rem;
			}
		
			@media ${device.laptopL} {
				${property}: ${baseSpacing.laptopL * multiplier}rem;
			}

			@media ${device.desktop} {
				${property}: ${baseSpacing.desktop * multiplier}rem;
			}

			@media ${device.desktopL} {
				${property}: ${baseSpacing.desktopL * multiplier}rem;
			}
			`;
		},
		components: {
			header: {
				styles: {
					color: headerColor,
				},
			},
		},
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
		isLoading: false,
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

	// const toggleMenuActivity = () => {
	// 	setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	// };

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
							}}
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
								<Loader isActive={state.isLoading} />
								<Header ref={headerRef} isMenuActive={state.menuActive} />

								<div
									className='scroll-container'
									ref={scrollRef}
									data-scroll-container
								>
									<ContentWrapper ref={contentWrapperRef}>
										<GlobalStyle
											isScrollDisabled={state.isLoading}
											isCursorWait={state.isLoading}
											theme={themes}
										/>

										<MediaQuery />

										<Routes>
											<Route path='/' element={<HomePage />} />
											<Route path='/about' element={<AboutPage />} />
											<Route path='/work' element={<WorkPage />} />
											<Route path='/upload' element={<UploadPage />} />
										</Routes>
									</ContentWrapper>
								</div>
							</div>
						</LocomotiveScrollProvider>
					</LoadingContext.Provider>
				</ColorContext.Provider>
			</ThemeProvider>
		</DataContext.Provider>
	);
}

export default App;
