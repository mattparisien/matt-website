import React from "react";
import { Box } from "@mui/material";

function Section(props) {

  const sectionStyle = {
    width: "100%",
    height: "100vh",
		position: 'relative'
  }

	return (
		<Box component='section' className='Section' sx={sectionStyle}>
			{props.children}
		</Box>
	);
}

export default Section;
