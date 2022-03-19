import React, { useMemo, useState } from "react";
import CircleButton from "../Button/CircleButton";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import SpinnerCard from "../Spinner/SpinnerCard";
import TextSwitch from "../TextSwitch/TextSwitch";
import { Planet4 } from "../Vector/Planets";

function AboutPage({ photos }) {
	const [loaded, setLoaded] = useState(false);
	const words = useMemo(
		() => ["developer", "designer", "bagel lover", "dancer", "montrealer"],
		[]
	);

	return (
		<Container classes='o-about'>
			<Section>
				<div className='o-about_content'>
					<TextSwitch words={words} classes='-mobile' variant='h1' />
					<div className='o-about_image'>
						{!loaded && <SpinnerCard />}
						<img
							src={photos && photos.slice(photos.length - 1, photos.length)[0].url}
							alt='self'
							onLoad={() => setLoaded(true)}
						/>
						<Planet4 />
					</div>
					<div className='o-about_text '>
						<div className='-text-tiny -fade-up-load -delay-1'>
							MATT PARISIEN — EST. 1997
						</div>
						<TextSwitch words={words} classes='-desktop' variant='h2' />
						<h3 className='o-h3 -fade-up-load -delay-3'>
							A developer who wants to use his skills and knowledge to make
							other people's jobs easier and more productive.
						</h3>
						<p className='o-text -fade-up-load -delay-4'>
							I'm a full stack web developer and graphic designer with great
							analytical skills and the ability to manage the dynamic of a
							rapidly changing environment.
						</p>
						<p className='o-text -fade-up-load -delay-5'>
							Skilled in writing clean, reusable code with a responsive, mobile
							friendly approach. I love throwing around ideas with a team!
						</p>
						<p className='o-text -fade-up-load -delay-6'>
							If you have any exciting projects to talk about, or just want to
							be friends, feel free to hit me up.
						</p>
						<CircleButton
							classes='-fade-up-load -delay-7'
							color='dark'
							href="mailto:hello@matthewparisien.com?subject=Let's talk"
							text='Talk to me'
						/>
					</div>
				</div>
			</Section>
		</Container>
	);
}

export default AboutPage;
