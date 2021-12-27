import React, { forwardRef } from "react";

function HeroClipPath(props, ref) {
	return (
		<svg
			viewBox='0 0 200 200'
			xmlns='http://www.w3.org/2000/svg'
			class='blobOne'
		>
			<defs>
				<clipPath clipPathUnits='objectBoundingBox' id='blobOne__clip'>
					<path
						ref={ref}
						class='blobOne__path'
						fill='#FF0066'
						d='M34.8,-55.3C47.5,-45.9,62,-40.4,72.5,-29.5C83,-18.7,89.5,-2.4,84.8,10.3C80,23,63.9,32.2,51.9,43.6C39.9,54.9,32,68.4,21,71.6C10.1,74.8,-3.9,67.7,-19.4,64.1C-35,60.4,-52.1,60.2,-65.3,52.4C-78.5,44.7,-87.8,29.3,-88.1,13.9C-88.3,-1.5,-79.5,-16.9,-71.1,-31.3C-62.7,-45.7,-54.7,-59.2,-42.9,-69C-31.1,-78.8,-15.6,-85,-2.3,-81.5C11,-78,22,-64.7,34.8,-55.3Z'
						transform='translate(100 100)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export default forwardRef(HeroClipPath);
