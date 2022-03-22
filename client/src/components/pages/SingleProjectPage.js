import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App/App";
import { themes } from "../../helpers/dataThemes";
import { shuffleThemes } from "../../helpers/shuffleThemes";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Arrow from "../Vector/Arrow";

function SingleProjectPage({
	location,
	
	
	setPageTheme,
}) {
	const data = useContext(DataContext);

	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);

	// useEffect(() => {
	// 	setThemeColor(shuffleColors());
	// }, []);

	useEffect(() => {
		setPageTheme(shuffleThemes(themes));
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
			setParam(param);
		}

		if (data && data.projects && param && !info) {
			// setInfo(data.posts.filter(x => x.id === param));
			const match = data.projects.filter(x => x.id === param);
			const nextPost = data.projects.filter(
				x =>
					x.id ===
					(parseInt(param) - 1 === 0
						? data.projects.length
						: parseInt(param) - 1)
			);

			setInfo({ ...match, nextPost: nextPost });
		}
	}, [data, location, param, info, setPageTheme]);

	return (
		<div className='o-page o-single-project'>
			<Container>
				<Section classes={`o-hero-2 -padding-huge -relative`}>
					<div className='o-hero_title-banner'>
						<h1 className='o-h1 -bold -split'>{info && info[0].Title}</h1>
						<div className='o-hero_image-wrapper-2'>
							<img
								src={info && info[0].Cover.image.url}
								alt={info && info[0].Cover.image.altText}
							/>
						</div>
					</div>
					<div className="o-hero_continue">
						<h3 className="o-h3">Front end development</h3>
					</div>
				</Section>
			</Container>

			<Container classes='o-spacer '></Container>
			<Container classes='o-info '>
				<Section classes='o-info_overview -padding-lg'>
					<div className='o-info_overview_inner'>
						<div className='o-info_overview_intro'>
							<div className='o-info_line'></div>
							<h3 className='o-h3 -bold'>Overview</h3>
							<p className='o-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								quasi sit quia eligendi molestiae repellendus reiciendis
								delectus debitis, id itaque voluptas incidunt adipisci sequi est
								impedit rem!
							</p>
							<p className='o-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								quasi sit quia eligendi molestiae repellendus reiciendis
								delectus debitis, id itaque voluptas incidunt adipisci sequi est
								impedit rem!
							</p>
						</div>
						<div className='o-info_overview_index'>
							<div>
								<h3 className='o-h3'>Services</h3>
								<ul>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
								</ul>
							</div>
							<div>
								<h3 className='o-h3'>Personality</h3>
								<ul>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
								</ul>
							</div>
							<div>
								<h3 className='o-h3'>Typefaces</h3>
								<ul>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
									<li className='o-text'>Naming</li>
								</ul>
							</div>
							<div>
								<h3 className='o-h3'>Completed</h3>
								<p className='o-text'>Spring 2021</p>
							</div>
						</div>
					</div>
				</Section>
				{info && info[0].AdditionalMedia.data && (
					<Section classes='o-info_media -padding-lg'>
						<div className='o-info_image-wrapper'>
							<img
								src={
									info &&
									info[0].AdditionalMedia.data &&
									info[0].AdditionalMedia.attributes.url
								}
								alt={
									info &&
									info[0].AdditionalMedia.data &&
									info[0].AdditionalMedia.attributes.alternativeText
								}
							/>
						</div>
					</Section>
				)}
			</Container>
			<Container>
				<Section classes='o-info_about -padding-lg'>
					<div>
						<h4 className='o-h4 -bold'>About the Artist</h4>
						<p className='o-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							labore delectus error at vero! Molestias ullam distinctio dolore
							fuga laudantium ducimus nam, alias et explicabo facilis illo sed!
							Consequatur facilis, quis eos dolorum aliquam mollitia nemo
							perspiciatis, asperiores, illum commodi in.
						</p>
					</div>
					<div>
						<h4 className='o-h4 -bold'>About the the Company</h4>
						<p className='o-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							labore delectus error at vero! Molestias ullam distinctio dolore
							fuga laudantium ducimus nam, alias et explicabo facilis illo sed!
							Consequatur facilis, quis eos dolorum aliquam mollitia nemo
							perspiciatis, asperiores, illum commodi in.
						</p>
					</div>
				</Section>
			</Container>
			<Container classes='o-additional-media -bg-light'>
				<Section classes='-padding-lg'>
					<div className='c-grid'>
						{info &&
							info[0].AdditionalMedia.data &&
							info[0].AdditionalMedia.map(image => {
								return (
									<div className='c-grid_item'>
										<div className='c-grid_img-wrapper'>
											<img
												src={image.attributes.url}
												alt={Math.random()}
												className='c-grid_img'
											/>
										</div>
									</div>
								);
							})}
					</div>
				</Section>
			</Container>

			<Link
				classes={`o-next -stretchX -stretchY -padding-lg`}
				isRouterLink
				href={info && info.nextPost && `/projects/${info.nextPost[0].id}`}
			>
				<Arrow />
				<div className='o-next_title'>
					{info && info.nextPost && info.nextPost[0].title}
				</div>
			</Link>
		</div>
	);
}

export default SingleProjectPage;
