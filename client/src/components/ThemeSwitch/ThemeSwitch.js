import React from "react";
import { Switch } from "@mui/material";
import styled from "styled-components";

const StyledSwitch = styled(Switch)`
	position: fixed;
	bottom: 0;
	left: 0;
`;

function ThemeSwitch() {
	return <StyledSwitch className='ThemeSwitch' />;
}

export default ThemeSwitch;
