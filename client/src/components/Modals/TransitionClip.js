import React, {forwardRef} from "react";

function TransitionClip(props, ref) {
	return (
		<svg
			className='transition-clipPath'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 956.39 577.3'
		>
			<defs>
				<clipPath
					id='transition-clipPath__clip'
					clipPathUnits={"objectBoundingBox"}
				>
					<path
						className='transition-clipPath__path'
						d="M1031.55,768.1H75.16v-1.24l956.39.39Z"
						transform='translate(-75.16 -190.8)'
						ref={ref}
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export default forwardRef(TransitionClip);
