import React from "react";
import { useContext } from "react";
import { CursorContext } from "../../App/App";

function Nav() {

  const { setCursorState } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorState("nav-hovering")
  }


  const handleMouseLeave = () => {
    setCursorState("following")
  }

	return (
		<div className='c-nav' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<a href='#' className='c-nav_link'>
				<div className='c-nav_burger-top'></div>
				<div className='c-nav_burger-bottom'></div>
			</a>
		</div>
	);
}

export default Nav;
