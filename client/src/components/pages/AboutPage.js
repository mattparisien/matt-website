import React, { useEffect, useMemo, useState } from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import SpinnerCard from "../Spinner/SpinnerCard";
import Revealer from "../Revealer/Revealer";

function AboutPage({ photos, setPageTheme, toggleLoading }) {
	const [loaded, setLoaded] = useState(false);
	const words = useMemo(
		() => ["developer", "designer", "bagel lover", "dancer", "montrealer"],
		[]
	);

	useEffect(() => {
		setPageTheme("fancy");
		setTimeout(() => {
			toggleLoading();
		}, 500);
	}, []);

	return (
		<div className='o-page o-page_about'>
			<Container>
				<Section classes='o-about_bio' data-scroll-section>
					<h3 className='o-h3'>
						{" "}
						Hi. My name is Matt. I am a Montreal-based full-stack developer in
						love with with digital products and passionate about crafting great
						user experiences. I'm also a former commercial photographer and
						still dabble in graphic design on my free time. Let's talk about our
						dogs and work hard together.
					</h3>
				</Section>
				<Section classes='o-about_extendedBio -padding-lg' data-scroll-section>
					<div className='o-about_image' data-scroll data-scroll-speed={2}>
						{!loaded && <SpinnerCard />}
						<img
							src={
								photos && photos.slice(photos.length - 1, photos.length)[0].url
							}
							alt='self'
							onLoad={() => setLoaded(true)}
						/>
						<Revealer />
						{/* <Eyes /> */}
					</div>
					<p className='o-text'>
						I believe that a team of people who love creating, learning and
						growing together have the ability to transcend the workplace. Having
						recently graduated from Lighthouse Labs in software development and
						after completing my BFA at Concordia University in Art History, I’ve
						developed exceptional analytical skills and an ability to operate
						effectively both individually and within the framework of a team.
					</p>
				</Section>
			</Container>
		</div>
	);
}

export default AboutPage;
