import React from "react";
import { Box } from "@mui/system";
import CircleButton from "./CircleButton";
import { useTheme } from "styled-components";

function ContactButton({ isModalShow }) {
	const theme = useTheme();
	const buttonWrapper = {
		position: "absolute",
		bottom: !isModalShow && 0,
		top: isModalShow && 0,
		zIndex: 9999999,

		right: 0,

		transition: "600ms ease",
	};

	const handleClick = () => {
		// toggleContactModal();
		window.location = "mailto:hello@matthewparisien.com?subject=Let's chat."
	};

	return (
		<Box sx={buttonWrapper} className='button-wrapper'>
			<CircleButton onClick={handleClick}>
				{!isModalShow ? (
					<svg
						width='37'
						height='37'
						viewBox='0 0 37 37'
						fill={theme.colors.light}
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 29.5V37H7.5L29.62 14.88L22.12 7.38L0 29.5ZM35.42 9.08C36.2 8.3 36.2 7.04 35.42 6.26L30.74 1.58C29.96 0.8 28.7 0.8 27.92 1.58L24.26 5.24L31.76 12.74L35.42 9.08V9.08Z'
							fill={theme.colors.light}
						/>
					</svg>
				) : (
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
							fill={theme.colors.light}
						/>
					</svg>
				)}
			</CircleButton>
		</Box>
	);
}

export default ContactButton;
