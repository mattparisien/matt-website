import React from "react";
import Container from "../Containers/Container";
import TextSwitch from "../TextSwitch/TextSwitch";
import Section from "../Containers/Section";
import CircleButton from "../Button/CircleButton";

function AboutPage() {
	const words = [
		"developer",
		"designer",
		"bagel lover",
		"dancer",
		"montrealer",
	];

	return (
		<Container classes='o-about'>
			<Section>
				<div className='o-about_content'>
					<div
						className='o-about_image'
						style={{
							backgroundImage: `url(https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
						}}
					></div>
					<div className='o-about_text'>
						<div className='-text-tiny'>MATT PARISIEN — EST 1997</div>
						<TextSwitch words={words} />
						<h3 className='o-h3'>
							A developer who thinks “multi-disciplinary” is a buzzword and
							wonders why we write bios in third-person.
						</h3>
						<p className='o-text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
							architecto placeat labore, asperiores earum ea? Dolorem veniam
							quod tenetur.
						</p>
						<p className='o-text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
							architecto placeat labore, asperiores earum ea? Dolorem veniam
							quod tenetur.
						</p>
						<p className='o-text'>
							If you have any exciting projects to talk about, or just want to
							be friends, feel free to hit me up.
						</p>
						<CircleButton
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
