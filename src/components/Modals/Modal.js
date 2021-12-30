import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ClipPathTransition from "../ClipPathTransition";
import Contact from "./Contact";
import { pageTransitionAnimation } from "../Transition/motion";
import TransitionClip from "./TransitionClip";

function Modal({ hideModal, isActive, hasBeenActive }) {
	const modalStyle = {
		display: isActive ? "block" : !isActive && !hasBeenActive ? "none" : "",
	};

	const container = useRef(null);
	const pathRef = useRef(null);
	const transitionTl = useRef(gsap.timeline({ paused: true }));

	//Modal transition animation
	useEffect(() => {
		//If modal is opening
		if (
			isActive &&
			transitionTl.current &&
			container.current &&
			pathRef.current
		) {
			pageTransitionAnimation(transitionTl, container, pathRef).tweenFromTo(
				"isStart",
				"isHalfway"
			);
		}

		//If modal is closing (use hasBeenActive to avoid clipPath animation on first render)
		if (
			hasBeenActive &&
			!isActive &&
			transitionTl.current &&
			container.current &&
			pathRef.current
		) {
			pageTransitionAnimation(transitionTl, container, pathRef).tweenFromTo(
				"isHalfway",
				"isEnd"
			);
		}
	}, [isActive, hasBeenActive, transitionTl, container, pathRef]);

	return (
		<div
			className='modal-container -isFixed -isFull -isBgBlue'
			id='modal'
			style={modalStyle}
			ref={container}
		>
			<Contact />
			<TransitionClip ref={pathRef} />
		</div>
	);
}

export default Modal;
