import gsap, { shuffle } from "gsap";
import $ from "jquery";
import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { Helmet } from "react-helmet-async";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { DataContext } from "../../App/App";
import { shuffleColors } from "../../helpers/shuffleColors";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Figure from "../Figure/Figure";
import Next from "./Next";
import variables from "../../styles/scss/_theming.scss";
import useScrollContext from "../../helpers/hooks/useScrollContext";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

function SingleProjectPage({ location }) {
	const data = useContext(DataContext);
	const [param, setParam] = useState(null);
	const [hasColorChanged, setColorChanged] = useState(false);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);
	const revealer = useRef(null);
	const tl = useRef(gsap.timeline());
	const scrollContext = useScrollContext();
	const mobile = window.matchMedia("(max-width: 820px)");
	const scrollListener = useRef(null);

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
	}, [hasColorChanged]);

	const [currentTheme, setCurrentTheme] = useState(pageTheme);

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
		if (!param) {
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
			console.log(param);
			setParam(param);
		}

		if (data && data.projects && param && !info) {
			console.log("hello");

			// setInfo(data.posts.filter(x => x.id === param));
			const currentPost = data.projects.filter(x => x.id == param);
			console.log(currentPost);

			const nextPostIndex =
				data.projects.indexOf(
					data.projects.find(x => x.id === currentPost[0].id)
				) + 1;

			const nextPost =
				data.projects[
					nextPostIndex === data.projects.length ? 0 : nextPostIndex
				];

			setInfo({ ...currentPost, nextPost: nextPost });
		}
	}, [data, location, param]);

	useEffect(() => {
		if (scrollContext && scrollContext.name === "locomotive") {
			const breakpoint = 840;

			scrollContext.scroller.on("scroll", e => {
				if (e.delta.y > breakpoint) {
					setCurrentTheme("light");
				} else if (e.delta.y < breakpoint) {
					setCurrentTheme(pageTheme);
				}
			});
		}
	}, [scrollContext]);

	return (
		<>
			{/* <Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet> */}
			<div className='o-page o-single-project' data-theme={currentTheme}>
				<Section classes='o-hero'>
					<Container classes='-stretchY'>
						<div className='o-container_inner'>
							<div className='o-hero_text u-desktop-js-anim' ref={textWrapper}>
								<h4
									className='o-h4 -riposte'
									// style={{ color: accentColor[0] }}
								>
									{info && info[0].Subtitle}
								</h4>
								<h2
									className='o-h2 -split -fadeUpChars'
									// style={{ color: accentColor[0] }}
								>
									{info && info[0].Title}
								</h2>

								{/* <h3 className='o-h3'>{info && info[0].subtitle}</h3> */}
								{/* </Fade> */}
							</div>

							<div className='o-hero_image' ref={heroImage}>
								<Figure
									noReveal
									effectDelay={5000}
									src={info && info[0].Cover.image.url}
									alt={"hwe"}
								/>
							</div>

							{/* 				
					<div className='o-hero_image-wrapper-2'>
						<img
							src={info && info[0].media.featureImage.url}
							alt={info && info[0].media.featureImage.altText}
						/>
					</div> */}
						</div>
					</Container>
				</Section>

				<Section classes='o-overview -padding-lg'>
					<Container>
						<Fade bottom>
							<div className='o-overview_left'>
								<ReactMarkdown
									className='o-h3 -bold'
									children={info && info[0].PreviewText}
								/>
							</div>
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
				{info && info[0].AdditionalMedia.data && (
					<Section data-theme='light' classes='o-feature -padding-bottom-lg'>
						<Container>
							<div className='o-feature_item'>
								<Figure
									noFrame
									src={
										info &&
										info[0].AdditionalMedia &&
										info[0].AdditionalMedia.attributes.url
									}
								/>
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

				<Next nextPost={info && info.nextPost} />
			</div>
		</>
	);
}

export default SingleProjectPage;
