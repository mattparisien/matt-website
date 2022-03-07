import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import Layout from "../Containers/Layout";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { Close, ContactsOutlined } from "@material-ui/icons";
import { FormLabel, FormGroup, TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import axios from "axios";
import RectangleButton from "../Button/RectangleButton";
import Paragraph from "../Paragraph/Paragraph";

function ContactModal() {
	const theme = useTheme();

	const [isCollapsed, setCollapsed] = useState(true);
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		location: "",
		message: "",
	});
	const [error, setError] = useState({
		name: null,
		email: null,
		location: null,
		message: null,
	});

	const [success, setSuccess] = useState(false);

	const container = {
		overflow: "scroll",
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		zIndex: 9999999,
		backgroundColor: theme.colors.pink,
		color: theme.colors.purple,
		height: "100%",
		"& .success-msg": {
			margin: 0,
			"& p, & p .line": {
				textAlign: "center !important"
			}
		}
	};

	const flexContainer = {
		display: "flex",
		"& .ParagraphLayout": {
			alignItems: "start !important",
			justifyContent: "start",
			"&__2": {
				width: "50%",
				marginLeft: "none",
				"& p": {
					marginRight: "auto",
					marginLeft: "0px",
				},
			},
		},
	};

	const button = {
		width: "100%",
		height: "8rem",
		position: "relative",
		fontSize: "2rem",
		fontFamily: "Neue Mtl",
		textTransform: "none",
		color: theme.colors.purple,
		"&:hover .button-bg": {
			transform: "scaleY(1)",
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
						[entry[0]]: "Please fill out the field",
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
			.post(`http://localhost:8080/api/email/submit`, formValues)
			.then(
				res => res.data === "success!" && res.status === 200 && setSuccess(true)
			)
			.catch(err => console.log(err));
	};

	return (
		<>
			<Box sx={container}>
				<Layout bg='pink' color='purple' height='auto'>
					<Box sx={{ width: "50%" }}>
						<ParagraphLayout variant={1}>Contact</ParagraphLayout>
					</Box>
					<Box sx={flexContainer}>
						<ParagraphLayout variant={2}>
							Montréal, Canada <br></br>
							hello@matthewparisien.com <br></br>
							514.467.1771
						</ParagraphLayout>

						<Box sx={{ width: "50%" }}>
							<ParagraphLayout variant={1}>
								I would love to talk. Give me a call, join my social fun or fill
								out the form below ↓
							</ParagraphLayout>
						</Box>
					</Box>
					<Box></Box>
				</Layout>
				<Layout bg='pink' color='purple' height='auto'>
					<Button sx={button} onClick={() => setCollapsed(!isCollapsed)}>
						This form is open 24/7. Literally. Reach us here.{" "}
						<Close
							style={{
								position: "absolute",
								right: "2rem",
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
					<Layout height='100vh' bg={"pink"} color='purple'>
						<Box display='flex' sx={{ width: "100%", height: "30%" }}>
							<Box sx={{ flexGrow: 1 }}></Box>

							{!success ? (
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
												variant='standard'
												label='Name'
												style={{ flexGrow: "1" }}
												name='name'
												value={formValues.name}
												onChange={handleChange}
												error={typeof error["name"] === "string" ? true : false}
											/>
											<TextField
												variant='standard'
												label='Email'
												style={{ flexGrow: "1" }}
												value={formValues.email}
												name='email'
												onChange={handleChange}
												error={
													typeof error["email"] === "string" ? true : false
												}
											/>
										</FormGroup>
										<TextField
											variant='standard'
											label='Location'
											name='location'
											value={formValues.location}
											onChange={handleChange}
											error={
												typeof error["location"] === "string" ? true : false
											}
										/>
										<TextField
											variant='standard'
											label='Message'
											name='message'
											value={formValues.message}
											onChange={handleChange}
											inputProps={{ maxLength: 1000 }}
											error={
												typeof error["message"] === "string" ? true : false
											}
										/>
									</Stack>
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
								</Box>
							) : (
								<Paragraph variant={2} className="success-msg">
									Thank you!
								</Paragraph>
							)}
						</Box>
					</Layout>
				</Box>
			</Box>
		</>
	);
}

export default ContactModal;
