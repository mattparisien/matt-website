import React, { useEffect, setState } from "react";
import gsap from "gsap";
import ClipPathTransition from "../ClipPathTransition";
import Contact from "./Contact";

function Modal({ hideModal, isActive, inner, startPoint }) {
	const modalStyle = {
		display: isActive ? "block" : "none",
	};

	return (
		<ClipPathTransition>
			<div
				className='modal-container -isFixed -isFull -isBgBlue'
				id='modal'
				style={modalStyle}
			>
				<Contact />
			</div>
		</ClipPathTransition>
	);
}

export default Modal;
