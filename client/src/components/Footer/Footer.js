import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import Layout from "../Containers/Layout";
import Heading from "../Heading/Heading";
import SocialList from "../Lists/SocialList";
import { Box } from "@mui/material";
import { ListItem } from "@mui/material";
import { Typography } from "@mui/material";

const FooterHeading = styled(Heading)`
	position: absolute;
	bottom: 100%;
	padding-bottom: 10rem;
`;

const socialLinks = [
	{
		name: "LinkedIn",
		path: "/",
	},
	{
		name: "Facebook",
		path: "/",
	},
	{
		name: "Instagram",
		path: "/",
	},
	{
		name: "Github",
		path: "/",
	},
];

function Footer(props, ref) {
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};

	const footerRef = useRef(null);

	return (
		<footer className='Footer'>
			<Layout
				bg='light'
				style={footerStyle}
				ref={(footerRef, ref)}
				height='60vh'
			>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					sx={{ textTransform: "uppercase", height: "100%" }}
				>
					<Typography variant='h1'>Matt</Typography>
					<Box display='flex'>
						<Box sx={{ height: "100%", width: "250px" }}>
							<Box className='remote' pb={2}>
								Available to work remotely or in office
							</Box>
							<Box className='email' pb={2}>
								hello@matthewparisien.com
							</Box>
							<Box className='phone'>514.467.1771</Box>
						</Box>
						<Box
							className='social-links-list'
							component='ul'
							sx={{ margin: 0 }}
						>
							{socialLinks.map((link, i) => {
								return (
									<ListItem
										sx={{
											paddingBottom: i < 3 ? 2 : 0,
											paddingTop: 0,
											paddingLeft: 0,
											paddingRight: 0,
										}}
									>
										<a href={link.path}>{link.name}</a>
									</ListItem>
								);
							})}
						</Box>
					</Box>
				</Box>
			</Layout>
		</footer>
	);
}

export default forwardRef(Footer);
