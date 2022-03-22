import React from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import WaveSection from "../Layouts/WaveSection";
import Link from "../Link/Link";

function Work({ projects }) {
	// const [currentImage, setCurrentImage] = useState(null);
	// const [isInView, setInView] = useState(null);

	// const handleMouseEnter = imageUrl => {
	// 	setInView(true);
	// 	setCurrentImage(imageUrl);
	// };
	// const handleMouseLeave = () => {
	// 	setInView(false);
	// };

	const [location] = useMouseMove();

	return (
		<WaveSection
			classes='o-work '
			waveTop='light'
			waveBottom='purple'
			dataTheme='banana'
		>
			<ul className='o-work_list -padding-huge'>
				{projects &&
					projects.slice(0, 4).map(project => {
						return (
							<li
								key={project.id}
								className='o-h2'
								// onMouseEnter={() => handleMouseEnter(project.Cover.image.url)}
								// onMouseLeave={handleMouseLeave}
							>
								<Link href={project.Location} target='_blank'>
									<span>{project.Title}</span>
									<span className='o-text -block '>{project.PreviewText}</span>
								</Link>
							</li>
						);
					})}
			</ul>
			<div
				className='o-work_image -absolute -absolute-center'
				style={{
					// backgroundImage: `url(${currentImage})`,
					opacity: 0 ,
					left: location.pageX,
					top: location.pageY,
					transform: "translate(-50%, -50%)",
					transformOrigin: "center",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
		</WaveSection>
	);
}

export default Work;
