import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import { GlobalStyle } from "../styles/global";
import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Modal from "../components/Modals/Modal";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import useScroll from "../helpers/useScroll";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import gsap from "gsap/all";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Menu from "../components/Menu/Menu";
import MenuLink from "../components/Header/Menu/MenuLink";
import { useIntersect } from "../helpers/hooks/useIntersect";
import { Routes, Route, useLocation } from "react-router-dom";
import $ from "jquery";
import { useCookies } from "react-cookie";
import { TextureEncoding } from "three";

function App() {
	//Themes
	const themes = {
		colors: {
			light: "rgb(244, 241, 235)",
			dark: "#141414",
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
	};

	const [colorHasChanged, setColorHasChanged] = useState(false);

	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		colors: {
			backgroundColor: themes.colors.light,
			foregroundColor: themes.colors.dark,
		},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		menuActive: false,
		isLoading: true,
		isContentHidden: true,
	});

	const [isScrolling, scrollDirection, scrollTop] = useScroll();

	const scrollContainer = useRef(null);

	const cursor = useRef(null);

	const toggleModalVisibility = () => {
		setState(prev => ({
			...prev,
			modal: {
				isActive: !state.modal.isActive,
				hasBeenActive: true,
			},
		}));
	};

	const titleRef = useRef(null);
	const galleryRef = useRef(null);
	const revealContentTl = useRef(gsap.timeline());
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const contentWrapperRef = useRef(null);
	const menuTriggerRef = useRef(null);

	const location = useLocation();
	const [isIntersect, target] = useIntersect([contentWrapperRef.current], {
		rootMargin: "0px 0px -100%",
	});

	//Reveal content on load
	useEffect(() => {
		const headerTitleChars = $(headerRef.current).find(".title .char");
		const isPreloaderComplete = state.isContentHidden && !state.isLoading;



		if (isPreloaderComplete) {
			revealContentTl.current
				.set(headerRef.current, { display: "flex" })
				.set(menuTriggerRef.current, { display: "block" })
				.to(headerTitleChars, {
					opacity: 1,
					y: 0,
					delay: 0.2,
					stagger: 0.04,
					duration: 0.8,
					ease: "power3.out",
				})
				.to(
					menuTriggerRef.current,
					{
						opacity: 1,
						duration: 0.5,
					},
					0.5
				)
				.to(
					galleryRef.current,
					{
						opacity: 1,
						y: 0,
						duration: 0.1,
						onComplete: () => {
							setTimeout(() => {
								setState(prev => ({ ...prev, isContentHidden: false }));
							}, 300);
						},
					},
					1
				);
		}
	}, [state.isLoading]);

	//Calculate header height
	useEffect(() => {
		if (headerRef.current && footerRef.current) {
			const headerHeight = headerRef.current.getBoundingClientRect().height;
			const footerHeight = footerRef.current.getBoundingClientRect().height;
			setState(prev => ({
				...prev,
				headerHeight: headerHeight,
				footerHeight: footerHeight,
			}));
		}
	}, [headerRef, footerRef]);

	const toggleMenuActivity = () => {
		setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	};

	return (
		<ThemeProvider theme={themes}>
			<div className='App'>
				<Helmet>
					<title>Matthew Parisien</title>
					<meta
						name='description'
						content='Web Developer, Photographer & Graphic Designer'
					/>
				</Helmet>
				<Modal
					isActive={state.modal.isActive}
					hasBeenActive={state.modal.hasBeenActive}
					hideModal={toggleModalVisibility}
				/>

				<Header
					ref={headerRef}
					currentPath={location.pathname}
					menuTriggerHandler={toggleMenuActivity}
					isMenuActive={state.menuActive}
					isDefaultContentHidden={state.isContentHidden}
				/>

				<ContentWrapper
					headerOffset={state.headerHeight}
					footerOffset={state.footerHeight}
					ref={contentWrapperRef}
					isDefaultContentHidden={state.isContentHidden}
				>
					<GlobalStyle
						isScrollDisabled={state.isLoading}
						isCursorWait={state.isLoading}
						theme={themes}
						colors={state.colors}
						contentOpacity={state.isLoading}
					/>

					<Routes>
						<Route
							path='/'
							element={<Home colors={state.colors} ref={galleryRef} />}
						/>
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</ContentWrapper>

				<Footer
					backgroundColor={themes.colors.dark}
					foregroundColor={themes.colors.light}
					ref={footerRef}
				/>
				<MenuLink
					onClickHandler={toggleMenuActivity}
					isMenuActive={state.menuActive}
					isFooterIntersecting={state.isFooterIntersecting}
					ref={menuTriggerRef}
				/>

				<Menu currentPath={location.pathname} isOpen={state.menuActive} />

				<Preloader setLoading={setState} />
			</div>
		</ThemeProvider>
	);
}

export default App;
