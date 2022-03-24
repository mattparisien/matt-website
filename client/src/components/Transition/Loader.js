import classNames from "classnames";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(CSSPlugin, SplitText);

function Loader({ toggleLoading }) {
	const classes = classNames("o-loader");
	const lines = useRef(null);
	const container = useRef(null);
	const [done, setDone] = useState(false);



	useEffect(() => {
		let delay = 0;

		setTimeout(() => {
			if (lines.current) {
				const items = $(lines.current).find(".o-loader_text_line");
				items.each((i, el) => {
					gsap.set(el, { opacity: 1 });
					const chars = $(el).find(".o-loader_text_char");

					gsap
						.timeline({ delay: delay })
						.to(chars, {
							opacity: 1,
							duration: 0.5,
							stagger: 0.03,
							ease: "power3.out",
						})
						.to(chars, {
							opacity: 0,
							stagger: 0.03,
							duration: 0.5,
							ease: "power3.out",
							onComplete: () => {
								i === items.length - 1 &&
									gsap.set(container.current, {
										opacity: 0,
										delay: 1,
										duration: 1,
										onComplete: () => {
											gsap.set(container.current, { display: "none" });
											setDone(true);
										},
									});
							},
						});

					delay += 4;
				});
			}
		}, 200);
	}, [lines, toggleLoading]);

	return (
		<div className={classes} data-theme='party' ref={container}>
			{/* <div className='o-loader_content' ref={content}> */}
			{/* {isActive && <Planet1 isPlaying={isActive} isComplete={!isActive}/>} */}
			<div
				className='o-loader_text o-text -big -split-chars -relative'
				ref={lines}
			>
				<div className='o-loader_text_line'>One moment please</div>
				<div className='o-loader_text_line -absolute -absolute-center'>
					Just getting things ready
				</div>
				<div className='o-loader_text_line -absolute -absolute-center'>
					Almost there
				</div>
				<div className='o-loader_text_line -absolute -absolute-center'>
					Ok here we go
				</div>
			</div>

			{/* </div> */}
			{/* <Box className='o-loader_background' ref={bg}></Box> */}
		</div>
	);
}

export default Loader;
