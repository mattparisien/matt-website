import classNames from "classnames";
import React, { forwardRef, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CursorContext } from "../../App/App";
import variables from "../../styles/scss/_vars.module.scss";
import { LoadingContext } from "../../App/App";
import gsap from "gsap";
import $ from "jquery";
import useDevice from "../../helpers/hooks/useDevice";

function Link(props, ref) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
		"-split": props.split,
		"js-hoverChars": props.hoverEffect === "chars",
	});

	const device = useDevice();
	const hoverTl = useRef(gsap.timeline());
	const navigate = useNavigate();
	const { setTransitioning } = useContext(LoadingContext);
	const { hovering, setHovering } = useContext(CursorContext);

	const handleNavigate = e => {
		props.onClick && props.onClick(e);
		e.preventDefault();

		setTransitioning();

		setTimeout(() => {
			navigate(props.href);
		}, variables.loaderDuration.replace(".", "").concat("00"));
	};

	const handleMouseEnter = e => {
		setHovering(!hovering);

		const chars = $(e.target).find(".c-char");

		if (props.hoverEffect === "chars" && device === "desktop") {
			gsap.to(
				chars,

				{
					y: "-100%",
					duration: 0.5,
					stagger: 0.03,
					ease: "power3.in",
				}
			);

			setTimeout(() => {
				gsap.fromTo(
					chars,

					{
						y: "100%",
					},
					{
						y: "0",
						duration: 0.5,
						stagger: 0.03,
						ease: "power3.out",
					}
				);
			}, 900);
		}
	};

	const handleMouseLeave = () => {
		setHovering(!hovering);
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
			<span className='c-link_label'>{props.children}</span>
		</a>
	);
}

export default forwardRef(Link);
