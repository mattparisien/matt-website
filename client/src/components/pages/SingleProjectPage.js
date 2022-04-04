import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import { DataContext } from "../../App/App";
import useScrollContext from "../../helpers/hooks/useScrollContext";
import variables from "../../styles/scss/_theming.scss";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Figure from "../Figure/Figure";
import Next from "./Next";

function SingleProjectPage({ location }) {
	const data = useContext(DataContext);
	const [param, setParam] = useState(null);

	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);

	const scrollContext = useScrollContext();

	const scrollListener = useRef(null);
	const scroll = useLocomotiveScroll();

	const pageTheme = useMemo(() => {
		const convertListToJsArray = list => {
			const array = [];

			list.split('"').forEach(item => {
				item.length > 1 && array.push(item);
			});
			return array;
		};

		const shuffle = array => {
			return array[Math.floor(Math.random() * array.length)];
		};

		const items = convertListToJsArray(variables.themeNames);
		return shuffle(items);
	}, []);

	const [currentTheme, setCurrentTheme] = useState("power");

	// useLayoutEffect(() => {
	// 	const desktopTimeline = () => {
	// 		const lines = $(textWrapper.current).find(".c-line");
	// 		tl.current

	// 			.set(revealer.current, { transition: "none" })
	// 			.set(textWrapper.current, { opacity: 1 })

	// 			// .to(lines, {
	// 			// 	y: 0,
	// 			// 	opacity: 1,
	// 			// 	ease: "power3.out",
	// 			// 	duration: 1,
	// 			// 	stagger: 0.1,
	// 			// })
	// 			.to(
	// 				textWrapper.current,
	// 				{
	// 					bottom: 0,
	// 					top: "50%",
	// 					y: "-50%",
	// 					duration: 3,
	// 					ease: "expo.inOut",
	// 				},
	// 				0.4
	// 			);

	// 		return tl.current;
	// 	};

	// 	setTimeout(() => {
	// 		if (!mobile.matches) {
	// 			desktopTimeline();
	// 		}
	// 	}, 400);
	// }, []);

	useEffect(() => {
		//Find query param

		let param = "";
		let counter = 0;
		for (let i = 0; i < location.pathname.length; i++) {
			if (location.pathname[i] === "/") {
				counter += 1;

				if (counter > 1) {
					param = location.pathname.slice(i + 1, location.pathname.length);
				}
			}
		}

		setParam(param);

		if (data && data.projects && param) {
			console.log(data.projects);

			// setInfo(data.posts.filter(x => x.id === param));
			const currentPost = data.projects.filter(x => x.id == param);
			console.log(data.projects, param);

			// const nextPostIndex =
			// 	data.projects.indexOf(
			// 		data.projects.find(x => x.id === currentPost[0].id)
			// 	) + 1;

			// const nextPost =
			// 	data.projects[
			// 		nextPostIndex === data.projects.length ? 0 : nextPostIndex
			// 	];

			setInfo({ ...currentPost });
		}
	}, [data, location, param]);

	useEffect(() => {
		scroll && scroll.scroll && scroll.scroll.scrollTo(0, 0);
		window.scrollTo(0, 0);
	}, [location, scroll]);

	// useEffect(() => {
	// 	const breakpoint = 840;

	// 	if (scrollContext && scrollContext.name === "locomotive") {
	// 		scrollListener.current = scrollContext.scroller.on("scroll", e => {
	// 			if (e.delta.y > breakpoint) {
	// 				setCurrentTheme("light");
	// 			} else if (e.delta.y < breakpoint) {
	// 				setCurrentTheme(pageTheme);
	// 			}
	// 		});
	// 	} else {
	// 		scrollListener.current = window.addEventListener("scroll", e => {
	// 			if (e.delta.y > breakpoint) {
	// 				setCurrentTheme("light");
	// 			} else if (e.delta.y < breakpoint) {
	// 				setCurrentTheme(pageTheme);
	// 			}
	// 		});
	// 	}
	// }, [scrollContext, pageTheme]);

	return (
		<>
			{/* <Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet> */}
			<div className='o-page o-single-project' data-theme={"light"}>
				<Section classes='o-overview -padding-lg -fullHeight -flex'>
					<Container classes="-flex -align-end">
						<Fade bottom>
							<h3 className='o-h3 -split -fadeUpLines'>
								{info && info[0].PreviewText}
							</h3>
						</Fade>

						<div className='o-overview_right'>
							<Fade bottom>
								<ReactMarkdown
									className='o-text -body'
									children={info && info[0].Overview}
								/>
							</Fade>
						</div>
					</Container>
				</Section>
				{info && info[0].Demo.data && (
					<Section classes='o-feature -padding-bottom-lg'>
						<Container>
							<div className='o-feature_item'>
								<video loop autoPlay muted playsInLine>
									<source src={info[0].Demo.data.attributes.url}></source>
								</video>
							</div>
						</Container>
					</Section>
				)}
				<Section classes='o-details -padding-lg'>
					<Container>
						<div className='o-details_left'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
							in?
						</div>
						<div className='o-details_right'>
							<div className='about'>
								<Fade bottom>
									<ReactMarkdown
										className='o-h3'
										children={"About the Company"}
									/>
								</Fade>
								<Fade bottom>
									<p className='o-text -body'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Molestiae perspiciatis sint quidem. Suscipit commodi,
										quaerat enim dolorem fugiat quo at blanditiis neque incidunt
										vel ut repellat labore quis eos non nulla qui obcaecati?
										Quibusdam quaerat et itaque! Soluta nobis asperiores,
										blanditiis ducimus adipisci ex exercitationem vero tenetur
										nostrum tempora deserunt?
									</p>
								</Fade>
							</div>
							<div className='work'>
								{/* <Fade bottom cascade> */}
								<Fade bottom>
									<ReactMarkdown className='o-h3' children={"Our Work"} />
								</Fade>
								<Fade bottom>
									<p className='o-text -body'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Molestiae perspiciatis sint quidem. Suscipit commodi,
										quaerat enim dolorem fugiat quo at blanditiis neque incidunt
										vel ut repellat labore quis eos non nulla qui obcaecati?
										Quibusdam quaerat et itaque! Soluta nobis asperiores,
										blanditiis ducimus adipisci ex exercitationem vero tenetur
										nostrum tempora deserunt?
									</p>
								</Fade>
								{/* </Fade> */}
							</div>
						</div>
					</Container>
				</Section>

				{/* {info && info[0].media.additional && (
					<Section classes='o-additionalMedia -padding-lg' data-theme='light'>
						<ContainerFluid>
							<ProjectGrid variant='media' items={info[0].media.additional} />
						</ContainerFluid>
					</Section>
				)} */}

				{/* <Next nextPost={info && info.nextPost} /> */}
			</div>
		</>
	);
}

export default SingleProjectPage;
