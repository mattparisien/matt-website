import React from "react";
import Container from "../Containers/Container";
import Logo from "../Logo/Logo";
import DesktopNav from "../Nav/DesktopNav";
import Nav from "../Nav/Nav";

function Header({ color }) {
	return (
		<header className='c-header' data-theme={color}>
			<Container classes={"-stretchX -stretchY"}>
				{/* <Logo /> */}
				<DesktopNav />
				<Nav />
			</Container>
		</header>
	);
}

export default Header;
