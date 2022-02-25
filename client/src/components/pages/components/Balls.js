import React from "react";
import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import useResize from "../../../helpers/hooks/useResize";
import { StyledBalls } from "./styles/StyledBalls";
import { random } from "gsap/gsap-core";

function Balls() {
	const [windowWidth, isResized] = useResize();
	const ballRef = useRef(null);

	return (
		<StyledBalls className={"floating-items-wrapper -isAbsolute -isFull'"}>
			<div className='floating-item' ref={ballRef}></div>
			<div className='floating-item'></div>
		</StyledBalls>
	);
}

export default Balls;
