import { FormGroup, TextField, useMediaQuery } from "@material-ui/core";
import { Close, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import RectangleButton from "../Button/RectangleButton";
import Layout from "../Containers/Layout";

function ContactModal({ isShow }) {
	const theme = useTheme();
	const matches = useMediaQuery("(max-width: 980px)", {noSsr: true});
	const mobile = useMediaQuery("(max-width: 600px)", {noSsr: true});

	const socialList = [
		{
			name: "Instagram",
			path: "https://instagram.com/matt.parisien",
			component: Instagram,
		},
		{
			name: "LinkedIn",
			path: "https://www.linkedin.com/in/matthew-parisien-365572130/",
			component: LinkedIn,
		},
		{
			name: "Github",
			path: "https://github.com/mattparisien/matt-website",
			component: GitHub,
		},
	];

	const [isCollapsed, setCollapsed] = useState(true);
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		location: "",
		subject: "",
		message: "",
	});
	const [error, setError] = useState({
		name: null,
		email: null,
		location: null,
		subject: null,
		message: null,
	});

	const [success, setSuccess] = useState(false);

	const container = {
		display: isShow ? "block" : "none",
		overflow: "scroll",
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		backgroundColor: theme.colors.pink,
		zIndex: 9999999,

		color: theme.colors.purple,
		height: "100%",
		"& .success-msg": {
			margin: 0,
			"& p, & p .line": {
				textAlign: "center !important",
			},
		},
	};

	const flexContainer = {
		display: "flex",
		flexDirection: mobile ? "column" : "row",
		"& .ParagraphLayout": {
			alignItems: "start !important",
			justifyContent: "start",
			margin: 0,
			width: "100%",
			"&__2": {
				marginLeft: "none",
				"& p": {
					width: "100%",
					marginLeft: "0px",
				},
			},
		},
	};

	const button = {
		width: "100%",
		height: "8rem",
		position: "relative",
		fontSize: matches ? "1rem" : "2rem",
		lineHeight: matches ? "1rem" : "2rem",
		fontFamily: "Neue Mtl",
		textTransform: "none",
		justifyContent: matches ? "start" : "center",
		textAlign: "left",
		color: theme.colors.purple,
		"&:hover .button-bg": {
			transform: mobile ? "none" : "scaleY(1)",
		},

		"& span": {
			marginRight: "3rem",
		},

		"&:hover": {
			color: theme.colors.light,
		},
		"& .button-bg": {
			position: "absolute",
			transition: "500ms ease",
			top: 0,
			left: 0,
			backgroundColor: theme.colors.purple,
			width: "100%",
			height: "100%",
			transform: "scaleY(0.0001)",
			transformOrigin: "top",
			zIndex: -1,
		},
	};

	const collapsibleSection = {
		display: isCollapsed ? "none" : "block",
		position: "absolute",
		width: "100%",
		height: "100%",
	};

	const handleChange = e => {
		setError(prev => ({ ...prev, [e.target.name]: null }));
		setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		const checkEmptyFields = () => {
			let hasError = false;

			Object.entries(formValues).forEach(entry => {
				if (!entry[1] || entry[1] === "") {
					setError(prev => ({
						...prev,
						[entry[0]]: `${entry[0]
							.slice(0, 1)
							.toUpperCase()
							.concat(entry[0].slice(1, entry[0].length))} cannot be empty`,
					}));
					hasError = true;
				}
			});

			return hasError;
		};

		const emptyFields = checkEmptyFields();

		if (emptyFields) {
			return;
		}

		axios
			.post(`${process.env.REACT_APP_API_URL}/email/submit`, formValues)
			.then(
				res =>
					res.data === "success!" &&
					res.status === 200 &&
					(setSuccess(true),
					setFormValues({
						name: "",
						email: "",
						location: "",
						message: "",
					}))
			)
			.catch(err => console.log(err));
	};

	const handleCollapsedClick = () => {
		setCollapsed(!isCollapsed);
		success && setSuccess(false);
	};

	const paragraphLeft = {
		fontSize: matches ? "1rem" : "2rem",
	};

	const paragraphRight = {
		fontSize: matches ? "2.5rem" : "5rem",
		lineHeight: matches ? "2.5rem" : "5rem",
		width: mobile ? "100%" : "50%",
		margin: 0,
	};

	const heading = {
		fontSize: matches ? "2.5rem" : "5rem",
		fontFamily: "Neue Mtl",
		fontWeight: "lighter",
		display: matches ? "none" : "block",
		margin: 0,
	};

	const background = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors.pink,
		transformOrigin: "top",
		// animation: `${bgEntryAnim} 600ms ease-in-out forwards`,
		zIndex: -999,
	};

	const content = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
	};

	// const lineRefs = useRef([]);
	// lineRefs.current = [];

	// const addToLineRefs = el => {
	// 	if (el && !lineRefs.current.includes(el)) {
	// 		lineRefs.current.push(el);
	// 	}
	// };

	// const star = {};

	// const line = {
	// 	fill: theme.colors.dark,
	// 	color: theme.colors.dark,
	// 	fill: "none",
	// 	stroke: "#231f20",
	// 	strokeMiterlimit: 10,
	// 	strokeWidth: "1px",
	// };

	// // const starTimeline = useRef(gsap.timeline());

	// useEffect(() => {
	// 	if (lineRefs.current) {
	// 		const degrees = ["360"];

	// 		gsap.set(lineRefs.current, { transformOrigin: "center" });

	// 		let rotation = 180;
	// 		let delay = 0.1;

	// 		for (let i = lineRefs.current.length; i >= 0; i--) {
	// 			gsap.to(lineRefs.current[i], {
	// 				duration: 5,
	// 				ease: "expo.inOut",
	// 				repeat: -1,
	// 				repeatDelay: 0,
	// 				rotation: `${rotation}deg`,
	// 				delay: delay,
	// 				yoyo: true,
	// 			});

	// 			rotation += 26;
	// 			// delay+=0.1
	// 		}

	// 		// .to(lineRefs.current[lineRefs.current.length - 1], {

	// 		// 	duration: 2,
	// 		// 	rotation: `${360}deg`,
	// 		// 	ease: "expo.inOut",
	// 		// 	stagger: 0.1,
	// 		// 	repeat: -1,
	// 		// 	repeatDelay: 0,
	// 		// })
	// 		// .to(lineRefs.current[lineRefs.current.length - 2], {
	// 		// 	duration: 2,
	// 		// 	rotation: `${360 + 26}deg`,
	// 		// 	ease: "expo.inOut",
	// 		// 	stagger: 0.1,
	// 		// 	repeat: -1,
	// 		// 	repeatDelay: 0,
	// 		// })
	// 		// .to(lineRefs.current[lineRefs.current.length - 3], {
	// 		// 	duration: 2,
	// 		// 	rotation: `${360 + 52}deg`,
	// 		// 	ease: "expo.inOut",
	// 		// 	stagger: 0.1,
	// 		// 	repeat: -1,
	// 		// 	repeatDelay: 0,
	// 		// })
	// 	}
	// }, [lineRefs.current]);

	return (
		<>
			<Box sx={container} className='modal-container'>
				<Box className='modal-content' sx={content}>
					<Layout bg='transparent' color='purple' height='auto'>
						<Box sx={flexContainer}>
							<Box sx={{ width: mobile ? "100%" : "50%", marginBottom: 3 }}>
								<Box component='h3' sx={heading}>
									Contact
								</Box>
								<Box component='p' sx={paragraphLeft}>
									Montréal, Canada <br></br>
									<a href="mailto:hello@matthewparisien.com?subject=Let's chat.">
										hello@matthewparisien.com
									</a>{" "}
									<br></br>
									514.467.1771
								</Box>
								<Box
									component='ul'
									sx={{
										display: "flex",
										width: "280px",
										justifyContent: "space-between",
										paddingLeft: 0,
										fontFamily: "Neue Mtl",
									}}
								>
									{socialList.map((item, i) => {
										return (
											<>
												<li key={i}>
													<a href={item.path} target='_blank' rel='noreferrer'>
														{item.name}
													</a>
												</li>
											</>
										);
									})}
								</Box>
							</Box>
							<Box component='p' sx={paragraphRight}>
								I would love to talk. Give me a call, join my social fun or fill
								out the form below ↓
							</Box>
						</Box>
					</Layout>
					<Layout bg='tranparent' color='purple' height='auto'>
						<Button sx={button} onClick={handleCollapsedClick}>
							<Box component='span'>
								This form is open 24/7. Literally. Reach us here.
							</Box>
							<Close
								style={{
									position: "absolute",
									right: matches ? "0" : "2rem",
									transform: `rotate(${isCollapsed ? "45deg" : "0"})`,
									transition: "400ms ease",
								}}
							/>
							<Box className='button-bg'></Box>
						</Button>
					</Layout>
					<Box
						className='section-collapsible'
						isCollapsed={isCollapsed}
						sx={collapsibleSection}
					>
						<Layout height='100%' bg={"pink"} color='purple'>
							<Box
								display='flex'
								sx={{
									width: "100%",
									height: "100%",
									justifyContent: !success ? "start" : "center",
									alignItems: success && "center",
								}}
							>
								{!success ? (
									<>
										<Box
											sx={{ flexGrow: 1, display: matches ? "none" : "block" }}
										>
											{/* <svg
												id='svg-star'
												style={star}
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 398.89 407.59'
											>
												<path
													class='cls-1'
													d='M223.11,539.31,388.89,167'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M149.89,484.13l312.22-262'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M108.26,402.44l395.48-98.6'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M106.66,310.77l398.68,84.74'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M145.41,227.67,466.59,478.61'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M216.66,170,395.34,536.31'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
												<path
													class='cls-1'
													d='M306,149.34V556.93'
													transform='translate(-106.56 -149.34)'
													style={line}
													ref={addToLineRefs}
												/>
											</svg> */}
										</Box>
										<Box
											component='form'
											sx={{ flexGrow: 1 }}
											onSubmit={handleSubmit}
										>
											<Stack
												orientation={"vertical"}
												sx={{
													width: "100%",
													height: "100%",
													justifyContent: "space-between",
												}}
											>
												<FormGroup
													style={{
														flexDirection: "row",
														justifyContent: "space-between",
													}}
												>
													<TextField
														placeholder='Name'
														variant='standard'
														label='Name'
														style={{ flexGrow: "1" }}
														name='name'
														value={formValues.name}
														onChange={handleChange}
														error={
															typeof error["name"] === "string" ? true : false
														}
														helperText={error["name"]}
													/>
													<TextField
														placeholder='tessa@example.com'
														variant='standard'
														label='Email'
														style={{ flexGrow: "1" }}
														value={formValues.email}
														name='email'
														onChange={handleChange}
														error={
															typeof error["email"] === "string" ? true : false
														}
														helperText={error["email"]}
													/>
												</FormGroup>
												<TextField
													placeholder='Location'
													variant='standard'
													label='Location'
													name='location'
													value={formValues.location}
													onChange={handleChange}
													error={
														typeof error["location"] === "string" ? true : false
													}
													helperText={error["location"]}
												/>
												<TextField
													placeholder='Subject'
													variant='standard'
													label='Subject'
													name='subject'
													value={formValues.Subject}
													onChange={handleChange}
													error={
														typeof error["subject"] === "string" ? true : false
													}
													helperText={error["subject"]}
												/>
												<TextField
													placeholder='Your message'
													variant='standard'
													label='Message'
													name='message'
													value={formValues.message}
													onChange={handleChange}
													inputProps={{ maxLength: 1000 }}
													error={
														typeof error["message"] === "string" ? true : false
													}
													helperText={error["message"]}
												/>
												<Box
													sx={{
														width: "100%",
														display: "flex",
														justifyContent: "end",
													}}
												>
													<RectangleButton
														color='pink'
														bg='orange'
														hoverBg={"purple"}
														type='submit'
													>
														Send
													</RectangleButton>
												</Box>
											</Stack>
										</Box>
									</>
								) : (
									<>
										<Box sx={{ display: "flex", flexDirection: "column" }}>
											<Box
												component='span'
												className='success-msg'
												sx={{ fontSize: "4rem", fontFamily: "Neue Mtl" }}
											>
												Thank you for your message!
											</Box>
											<Box
												component='span'
												className='success-msg'
												sx={{
													fontSize: "2rem",
													fontFamily: "Neue Mtl",
													textAlign: "center",
												}}
												pt={2}
											>
												We will get back you shortly :)
											</Box>
										</Box>
									</>
								)}
							</Box>
						</Layout>
					</Box>
				</Box>
				<Box className='modal-bg' sx={background}></Box>
			</Box>
		</>
	);
}

export default ContactModal;
