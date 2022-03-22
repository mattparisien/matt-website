import React from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import DesktopNav from "../Nav/DesktopNav";

function Header({color}) {
	return (
		<header className='c-header' data-color={color}>
			<Container classes={"-stretchX -stretchY"}>
				<Logo />
				<DesktopNav />
				<Nav/>
			</Container>
		</header>
	);
}

export default Header;
