import classNames from "classnames";
import React, { forwardRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CursorContext } from "../../App/App";
import variables from "../../styles/scss/_vars.module.scss";
import { LoadingContext } from "../../App/App";


function Link(props, ref) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
		'-split': props.split
	});

	const navigate = useNavigate();
	const { setTransitioning } = useContext(LoadingContext);
	const { hovering, setHovering } = useContext(CursorContext);

	const handleNavigate = e => {
		
		props.onClick && props.onClick(e);
		e.preventDefault();

		setTransitioning()

		setTimeout(() => {
			navigate(props.href);
		}, variables.loaderDuration.replace(".", "").concat("00"));
	};

	

	const handleMouseEnter = () => {
		setHovering(!hovering)
	};

	const handleMouseLeave = () => {
		setHovering(!hovering)
	};

	return (
		<a
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={classes}
			href={props.href}
			target={props.target}
			onClick={!props.isRouterLink ? props.onClick : handleNavigate}
			ref={ref}
		>
			{props.children}
		</a>
	);
}

export default forwardRef(Link);
