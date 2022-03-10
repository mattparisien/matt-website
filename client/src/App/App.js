import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollWrapper from "../components/Containers/ScrollWrapper";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";
import UploadPage from "../components/pages/UploadPage";
import WorkPage from "../components/pages/WorkPage";
import Loader from "../components/Transition/Loader";
import { device } from "../styles/breakpoints";
import { GlobalStyle } from "../styles/global";

export const ColorContext = createContext();
export const LoadingContext = createContext();
export const DataContext = createContext();

function App() {
	const location = useLocation();

	const [headerColor, setHeaderColor] = useState(null);
	const [palette] = useState("primary");

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
			gradient:
				"linear-gradient(#516dc1,#ce4469,#ce4469,#fb986c,#fb986c,#a99af4,#a99af4,#2fd8a8,#2fd8a8,#009b8e,#009b8e,#516dc1,#516dc1,#ce4469)",
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

	const scrollRef = useRef(null);

	const [state, setState] = useState({
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		data: {},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		menuActive: false,
		isTransitioning: false,
	});

	useEffect(() => {
		//Get essential data

		const basePath = process.env.REACT_APP_API_URL;
		const fetchURL = url => axios.get(url);

		const urls = [
			`${basePath}/projects?populate=*`,
			`${basePath}/contact`,
			`${basePath}/socials`,
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

				setState(prev => ({
					...prev,
					data: {
						...prev.data,
						projects: projects,
						contact: contactInfo,
						socials: socials,
					},
				}));
			})
			.catch(err => console.log(err));
	}, []);

	const headerRef = useRef(null);
	const contentWrapperRef = useRef(null);

	const toggleMenu = () => {
		setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	};

	const changeColors = (fg, bg) => {
		setHeaderColor(fg);
	};

	const toggleTransitioning = msg => {
		setState(prev => ({ ...prev, isTransitioning: !state.isTransitioning }));
	};

	const colorContextControls = {
		changeColors,
	};

	const loadingControls = {
		isTransitioning: state.isTransitioning,
		toggleTransitioning: toggleTransitioning,
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
								<Loader
									isEnter={state.isTransitioning}
									isExit={!state.isTransitioning}
									setDone={toggleTransitioning}
								/>
								<Header
									ref={headerRef}
									isMenuActive={state.menuActive}
									toggleMenu={toggleMenu}
								/>
								<Menu
									isOpen={state.menuActive}
									theme={themes}
									data={{
										contact: { ...state.data.contact },
										socials: state.data.socials,
									}}
								/>

								<ScrollWrapper ref={scrollRef}>
									<ContentWrapper ref={contentWrapperRef}>
										<GlobalStyle />

										<Routes>
											<Route
												path='/'
												element={<HomePage isLoading={state.isLoading} />}
											/>
											<Route path='/about' element={<AboutPage />} />
											<Route path='/work' element={<WorkPage />} />
											<Route path='/upload' element={<UploadPage />} />
										</Routes>
									</ContentWrapper>
									<Footer
										data={{
											contact: { ...state.data.contact },
											socials: state.data.socials,
										}}
									/>
								</ScrollWrapper>
							</div>
						</LocomotiveScrollProvider>
					</LoadingContext.Provider>
				</ColorContext.Provider>
			</ThemeProvider>
		</DataContext.Provider>
	);
}

export default App;
