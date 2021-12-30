import React, { useEffect, setState, useRef } from "react";
import gsap from "gsap";
import ClipPathTransition from "../ClipPathTransition";
import Contact from "./Contact";
import { pageTransitionAnimation } from "../Transition/motion";
import TransitionClip from "./TransitionClip";

function Modal({ hideModal, isActive, inner, startPoint }) {
	const modalStyle = {
		display: isActive ? "block" : "none",
	};

	const container = useRef(null);
	const pathRef = useRef(null);
	const transitionTl = useRef(gsap.timeline({ paused: true }));

	//Modal transition animation
	useEffect(() => {
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
	}, [isActive, transitionTl, container, pathRef]);

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
