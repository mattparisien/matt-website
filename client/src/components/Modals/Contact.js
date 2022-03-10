import React, { useRef } from "react";
import Form from "./Form/Form";
import useSplit from "../../helpers/hooks/useSplit";
import { useEffect } from "react/cjs/react.development";
import Section from "../Section";

function Contact() {
	const headingRef = useRef([]);

	return (
		<div className='modal__contact  -isLSectionOne -hasPaddingSmall -isTextPink'>
			{/* <h4
				className='modal__contact__heading -isTextPink -isUppercase -textAlignLeft'
				ref={headingRef}
			>
				Get in touch!
			</h4>
			<div className='modal__contact__info-wrapper -isFull -isFlex -flexColumn'>
				<div className='info-group__location'>
					<h4 className='-isOpposit -isUppercase'>
						<span>Montréal,</span> <span>Canada</span>
					</h4>
				</div>
				<div className='btn-group'>
					<Button
						style={"regular"}
						bg={"Orange"}
						text={"Light"}
						type={"button"}
						mailTo={"hello@matthewparisien.com"}
					>
						Email me
					</Button>
					<Button
						style={"regular"}
						bg={"Orange"}
						text={"Light"}
						type={"button"}
					>
						Call me
					</Button>
				</div>
			</div> */}
			<Form />
		</div>
	);
}

export default Contact;
