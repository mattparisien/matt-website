import React from "react";
import Marquee from "react-fast-marquee";
import WaveSection from "../Layouts/WaveSection";

function Values({ photos }) {
	// const [hoverWord, setHoverWord] = useState(null);

	const words = [
		"ice cream",
		"gaming",
		"design",
		"dogs",
		"friends",
		"movies",
		"photography",
		"running",
		"code",
	];

	// const [location] = useMouseMove();
	// const [prev, setPrev] = useState({
	// 	pageX: 0,
	// 	pageY: 0
	// })

	// const handleMouseEnter = word => {
	// 	setHoverWord(word);
	// };

// useEffect(() => {


// 	function lerp(min, max, value) {
// 		return (max - min) * value + min
// 	}

// 	$("[data-word='gaming']").css({
// 		opacity: 1,
// 		left: lerp(0, location.pageX, 0.3),
// 		top: lerp(0, location.pageY, 0.3)
// 	})

// })

	return (
		<WaveSection
			waveTop='yellow'
			classes='o-values -flex -align-center -justify-center -flex-column'
			dataTheme='orangeCrush'
		>
			<div className='c-marquee'>
				<Marquee gradient={false}>
					{words.map((word, i) => {
						return (
							<div
								className='marquee-item o-text -big -fk'
								key={i}
								// onMouseEnter={() => handleMouseEnter(word)}
							>
								{word}
							</div>
						);
					})}
				</Marquee>
			</div>
			<div className='c-marquee'>
				<Marquee gradient={false} direction='right'>
					{words.map((word, i) => {
						return (
							<div className='marquee-item o-text -big -fk' key={i}>
								{word}
							</div>
						);
					})}
				</Marquee>
			</div>
			<div className='c-marquee'>
				<Marquee gradient={false}>
					{words.map((word, i) => {
						return (
							<div className='marquee-item o-text -big -fk' key={i}>
								{word}
							</div>
						);
					})}
				</Marquee>
			</div>

			{/* <div className='o-images'>
				{photos &&
					photos.map(photo => {
						return (
							<img
								data-word={photo.name}
								key={photo.id}
								src={photo.src}
								style={{
									left: location.pageX,
									top: location.pageY,
									opacity: 0,
								}}
							></img>
						);
					})}
			</div> */}
		</WaveSection>
	);
}

export default Values;
