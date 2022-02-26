import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import ContainerFluid from "../Containers/ContainerFluid";
import Nav from "./Nav";
import { StyledHeader } from "./styles/StyledHeader";
import styled from "styled-components";

function Header(props, ref) {
	const { headerOffset, isMenuActive, isDefaultContentHidden } = props;
	const [innerHeight, setInnerHeight] = useState(null);


	return (
		<StyledHeader headerHeight={headerOffset} ref={ref} height={innerHeight}>
			<ContainerFluid flex>
				<div className='header-logo'>
					<Link to='/'>Matt Parisien</Link>
					<span className='copyright-symbol'>©</span>
				</div>
				<Nav />
			</ContainerFluid>
		</StyledHeader>
	);
}

export default forwardRef(Header);
