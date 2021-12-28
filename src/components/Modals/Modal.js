import React, { useEffect, setState } from "react";
import gsap from "gsap";
import ClipPathTransition from "../ClipPathTransition";
import Contact from "./Contact";

function Modal({ hideModal, isActive, startPoint }) {
	const modalStyle = {
		display: isActive ? "block" : "none",
	};

	return (
		<ClipPathTransition startPoint={startPoint}>
			<div
				className='modal-container -isFixed -isFull'
				id='modal'
				style={modalStyle}
			>
				<Contact />
			</div>
		</ClipPathTransition>
	);
}

export default Modal;
