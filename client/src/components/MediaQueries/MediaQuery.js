import React from "react";
import { useMediaQuery } from "@mui/material";

function MediaQuery() {
	const matches = useMediaQuery("(min-width:600px)");

	return <>{matches ? 2 : 1}</>;
}

export default MediaQuery;
