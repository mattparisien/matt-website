import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "styled-components";

function DragCursor() {
	const theme = useTheme();



	const cursor = {
		width: "100px",
		height: "100px",
		backgroundColor: theme.colors.light,
		position: "absolute",

		transform: "translate(-50%, -50%)",
		zIndex: 9999,
		borderRadius: "50%",
	};

	return <Box sx={cursor} className='DragCursor'></Box>;
}

export default DragCursor;
