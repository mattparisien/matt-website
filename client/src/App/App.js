import axios from "axios";
import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import { createContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollWrapper from "../components/Containers/ScrollWrapper";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import CursorFollower from "../components/CursorFollower/CursorFollower";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Nav from "../components/Nav/Nav";
import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";
import WorkPage from "../components/pages/WorkPage";
import Loader from "../components/Transition/Loader";
import { GlobalStyle } from "../styles/global";

export const DataContext = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function App() {
	const [play, setPlay] = useState(true);
	
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
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSplit) {
			const splitText = new SplitText($(".o-h1.-split"), {
				type: "chars, words",
				charsClass: "c-char",
				linesClass: "c-word",
			});
			const splitText2 = new SplitText($(".o-h2.-split"), {
				type: "chars",
				charsClass: "c-char",
			});

			setTimeout(() => {
				splitText2.revert().split();
			}, 200);

			setSplit(true);

			if (splitText.chars) {
				const tl = gsap.timeline();

				tl.to(splitText.chars, {
					y: 0,
					duration: 2,
					ease: "expo.inOut",
					delay: 0.5,
					stagger: 0.02,
					opacity: 1,
				});
			}

			if (splitText2.chars) {
				const tl = gsap.timeline();

				tl.to(splitText2.chars, {
					y: 0,
					duration: 2,
					ease: "expo.inOut",
					delay: 1.4,
					stagger: 0.02,
					opacity: 1,
				});
			}
		}
	}, [isSplit, location]);


	const scrollRef = useRef(null);

	const [state, setState] = useState({
		data: {},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		menuActive: false,
		isTransitioning: false,
	});

	const setTransitioning = () => {
		setState(prev => ({...prev, isTransitioning: true}))
	}


	useEffect(() => {
		//resplit whenever there's a location change
		setSplit(false)
		setState(prev => ({...prev, isTransitioning: false}))
	}, [location])

	const appClasses = classNames("App", {
		"menu-active": state.menuActive,
		"is-dom-loaded": !play,
		"is-old-page": state.isTransitioning
	});



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

				setState(prev => ({
					...prev,
					data: {
						...prev.data,
						projects: projects,
						contact: contactInfo,
						socials: socials,
						photos: photos,
					},
				}));
			})
			.catch(err => console.log(err));
	}, []);

	const contentWrapperRef = useRef(null);

	const toggleMenu = () => {
		setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	};

	const playTransition = () => {
		setPlay(true);
	};

	const loadingControls = {
		menuActive: state.menuActive,
		toggleMenu,
		playTransition,
		setTransitioning
	};

	const [cursorState, setCursorState] = useState("following");

	const [pageTheme, setPageTheme] = useState("regular");

	return (
		<DataContext.Provider value={state.data}>
			<ThemeProvider theme={themes}>
				<LoadingContext.Provider value={loadingControls}>
					<ColorContext.Provider value={{ setPageTheme, pageTheme }}>
						<CursorContext.Provider value={{ cursorState, setCursorState }}>
							<div className={appClasses} data-theme={pageTheme}>
								<Helmet>
									<title>Matthew Parisien</title>
									<meta
										name='description'
										content='Web Developer, Photographer & Graphic Designer'
									/>
								</Helmet>
								{location.pathname === "/" && <Header />}

								<Nav />
								<Loader
									isActive={play}
									setDone={() => {
										console.log('oh yaaa')
										setPlay(false);
									}}
								/>

								<CursorFollower cursorState={cursorState} />
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
											<Route path='/work' element={<WorkPage />} />
											<Route
												path='/about'
												element={<AboutPage photos={state.data.photos} />}
											/>
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
						</CursorContext.Provider>
					</ColorContext.Provider>
				</LoadingContext.Provider>
			</ThemeProvider>
		</DataContext.Provider>
	);
}

export default App;
