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
				<Section classes='o-next -padding-top-huge' data-theme={color} ref={container}>
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
									<h2 className='o-h2'>Up next</h2>
								</Fade>
								<svg
									className='c-arrow_svg'
									viewBox='0 0 84 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
									<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
								</svg>
							</Container>
							<Fade bottom>
								<Marquee gradient={false} direction={"right"}>
									<div className='o-h2 marquee-item'>
										{nextPost && nextPost.Title}
									</div>
									<div className='o-h2 marquee-item'>
										{nextPost && nextPost.Subtitle}
									</div>
									<div className='o-h2 marquee-item'>
										{nextPost && nextPost.Title}
									</div>
									<div className='o-h2 marquee-item'>
										{nextPost && nextPost.Subtitle}
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
