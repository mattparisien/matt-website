import React from "react";
import Container from "../Containers/Container";
import Section from "../Containers/Section";

function Header() {
	return (
		<header className='c-header'>
			<Container>
				<Section>
					<div className='c-header_content'>
						<h1 className='o-h1 -split'>
							Hi, I'm
							<br></br>
							Matt Parisien
						</h1>
						
						<div className='-text-tiny'>
							*Actually, I'm a website. But I was built by Matt Parisien.
						</div>
					</div>
				</Section>
			</Container>
		</header>
	);
}

export default Header;
