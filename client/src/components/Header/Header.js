import React from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Logo from "../Logo/Logo";

function Header() {
	return (
		<header className='c-header'>
			<Container>
			<Logo/>
				<Section>
				
					<div className='c-header_content'>
						
						<h1 className='o-h1 -split'>
							Hi, I am
							<br></br>
							Matt Parisien
						</h1>

						<div className='-text-tiny -fade-up-load'>
							*Actually, I'm a website. But I was built by Matt Parisien.
						</div>
					</div>
				</Section>
			</Container>
		</header>
	);
}

export default Header;
