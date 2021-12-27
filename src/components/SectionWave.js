import React, { forwardRef } from "react";

function SectionWave(props, ref) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1440 320'
			className='wave'
		>
			<path
				fill='#0099ff'
				d='M0,256L60,266.7C120,277,240,299,360,288C480,277,600,235,720,224C840,213,960,235,1080,256C1200,277,1320,299,1380,309.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
				ref={ref}
			></path>
		</svg>
	);
}

export default forwardRef(SectionWave);
