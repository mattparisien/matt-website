import classNames from "classnames";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useEffect, useRef, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import $ from "jquery";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(CSSPlugin, SplitText);

function Loader({ isActive }) {
	const classes = classNames("o-loader", { "is-active": isActive });
	return (
		<div className={classes}>
			{/* <div className='o-loader_content' ref={content}> */}
			{/* {isActive && <Planet1 isPlaying={isActive} isComplete={!isActive}/>} */}
			<div className='o-loader_background'></div>
			<div className='o-loader_text'>
				<h2 className='o-h2'>Work hard</h2>
			</div>

			{/* </div> */}
			{/* <Box className='o-loader_background' ref={bg}></Box> */}
		</div>
	);
}

export default Loader;
