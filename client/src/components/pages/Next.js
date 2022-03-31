import React, { useRef } from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Arrow from "../Vector/Arrow";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";


function Next({ color, nextPost }) {
	const container = useRef(null);

	return (
		<>
			<Fade>
				<Section classes='o-next' data-theme={color} ref={container}>
					{/* <FlowyImage
						container={container.current}
						imageSrc={nextPost && nextPost.media.featureImage.url}
					/> */}
					<Link
						classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
						isRouterLink
						href={nextPost && `/projects/${nextPost.id}`}
					>
						<div className='c-link_inner'>
							<Container classes='-relative -flex -align-center -justify-between'>
								<Fade bottom>
									<h2 className='o-h1 -padding-bottom-huge'>Next</h2>
								</Fade>
								<Arrow color='light' />
							</Container>
							<Fade bottom>
								<Marquee gradient={false} direction={"right"}>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.title}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.subtitle}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.title}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.subtitle}
									</div>
								</Marquee>
							</Fade>
						</div>
					</Link>
				</Section>
			</Fade>
		</>
	);
}

export default Next;
