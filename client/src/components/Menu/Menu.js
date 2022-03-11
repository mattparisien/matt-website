import { useMediaQuery } from "@material-ui/core";
import { Box } from "@mui/system";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { device } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import TransitionTrigger from "../Transition/TransitionTrigger";
import Container from "../Containers/Container";
import FooterNav from "../Nav/FooterNav";

function Menu(props) {
	const listInfo = [
		{
			url: "/",
			title: "Home",
		},
		{
			url: "/work",
			title: "Projects",
		},
		{
			url: "/about",
			title: "About",
		},
	];

	gsap.registerPlugin(CSSRulePlugin);
	const { isOpen } = props;
	const mobile = useMediaQuery(device.mobileL);
	const tablet = useMediaQuery(device.tablet);
	const menuAnim = useRef(gsap.timeline());
	const navItems = useRef([]);
	const containerRef = useRef(null);
	const infoWrapperRef = useRef(null);

	const addToListRefs = el => {
		if (el && !navItems.current.includes(el)) {
			navItems.current.push(el);
		}
	};

	useEffect(() => {
		if (
			isOpen &&
			containerRef.current &&
			navItems.current &&
			infoWrapperRef.current
		) {
			// const rule = CSSRulePlugin.getRule(".css-io0z2h li::after");
			// const rule2 = CSSRulePlugin.getRule(
			// 	".css-io0z2h li:last-of-type::before"
			// );

			// gsap.set([rule, rule2], {
			// 	width: "0%",
			// });
			menuAnim.current.play();
			menuAnim.current
				.set(containerRef.current, { display: "block" })
				.to(containerRef.current, {
					y: 0,
					duration: 0.8,
					ease: "power3.out",
				})
				.to(
					navItems.current,
					{
						y: 0,
						duration: 0.7,
						stagger: -0.1,
						opacity: 1,
						ease: "power4.out",
					},
					0.4
				)
				// .to(
				// 	[rule, rule2],
				// 	{
				// 		cssRule: { width: "100%" },
				// 		duration: 1,
				// 		ease: "power3.out",
				// 	},
				// 	0.4
				// )
				.to(
					infoWrapperRef.current,
					{
						opacity: 1,
						duration: 0.4,
					},
					0.4
				);
		}

		if (!isOpen && menuAnim.current.progress() !== 0) {
			menuAnim.current.reverse(0.93);
		}
	}, [isOpen, containerRef, navItems, infoWrapperRef]);

	const container = {
		boxSizing: "border-box",
		width: "100vw",
		height: "100vh",
		position: "fixed",
		top: 0,
		left: 0,
		backgroundColor: "black",
		zIndex: 9,
		transform: "translateY(-100%)",
		display: "none",
		paddingTop: "8rem",
		fontSize: "0.8rem",
		color: props.theme.colors.light,
	};

	const listContainer = {
		height: "100%",
		width: "100%",
		fontSize: mobile ? "4rem" : "2.5rem",
		padding: 0,
		color: props.theme.colors.light,

		"& li": {
			overflow: "hidden",
			position: "relative",
			padding: "0.3rem 0",
			transition: "400ms ease",
			"&:hover": {
				backgroundColor: props.theme.colors.light,
				color: props.theme.colors.dark,
			},
			"&::after": {
				position: "absolute",
				content: "''",
				top: 0,
				left: 0,
				width: "100%",
				height: "1px",
				backgroundColor: props.theme.colors.light,
			},
			"&:last-of-type::before": {
				position: "absolute",
				content: "''",
				bottom: 0,
				left: 0,
				width: "100%",
				height: "1px",
				backgroundColor: props.theme.colors.light,
			},
		},
		"& .visibility-wrapper": {
			transform: "translateY(-100%)",
			opacity: 0,
		},
	};

	const contactInfoWrapper = {
		color: props.theme.colors.light,
		display: "flex",
		alignItems: "start",

		opacity: 0,
		position: "absolute",
		bottom: 0,
		left: 0,
		height: "150px",
		width: "100%",
		boxSizing: "border-box",
	};

	const greeting = {
		width: "200px",
	};

	return (
		<div className='Menu -fullHeight -fullWidth -bg-dark' ref={containerRef}>
			<Container>
				<div className='inner' className="-relative -fullHeight">
					<Box component='ul' sx={listContainer} className='menu-list'>
						{listInfo.map((item, i) => {
							return (
								<li key={i} className='menu-list__item'>
									<Box className='visibility-wrapper' ref={addToListRefs}>
										<TransitionTrigger noCircle to={item.url}>
											{item.title}
										</TransitionTrigger>
									</Box>
								</li>
							);
						})}
					</Box>

					{props.data && props.data.contact && props.data.socials && (
						<Box
							sx={contactInfoWrapper}
							className='contact-info-wrapper'
							ref={infoWrapperRef}
						>
							<FooterNav />
							{/* <Box sx={{ marginRight: "30%" }}>
							<Box
								component='ul'
								sx={{ padding: 0, marginTop: 0, marginBottom: "2rem" }}
							>
								{props.data.socials &&
									props.data.socials.map(account => {
										return (
											<li key={account.id}>
												<a href={account.Path} target='_blank' rel='noreferrer'>
													{account.Title}
												</a>
											</li>
										);
									})}
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<Box className='phone'>
								<Box>{props.data.contact.Phone} ↗︎</Box>
							</Box>
							{tablet && (
								<Box className='greeting' sx={{ marginLeft: "auto" }}>
									<Box sx={greeting}>{props.data.contact.Greeting}</Box>
								</Box>
							)}
						</Box> */}
						</Box>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Menu;
