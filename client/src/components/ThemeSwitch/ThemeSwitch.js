import React, { useContext } from "react";
import { Switch } from "@mui/material";
import styled from "styled-components";
import ContainerFluid from "../Containers/ContainerFluid";
import { ThemeContext } from "styled-components";

const StyledSwitch = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	${({ theme }) => theme.spacing(1, "margin")};
`;

function ThemeSwitch({ togglePartyMode }) {
	// const themeContext = useContext(ThemeContext);

	// console.log(themeContext)

	// const handleChange = () => {
	// 	console.log('hello!')
	// 	themeContext.colors["light"] = themeContext.colors["pink"]
	// 	console.log(themeContext.colors)
	// }

	return (
		<StyledSwitch className='ThemeSwitch'>
			{/* <ContainerFluid> */}
			<Switch label={"Party mode"} onChange={togglePartyMode} />
			{/* </ContainerFluid> */}
		</StyledSwitch>
	);
}

export default ThemeSwitch;
