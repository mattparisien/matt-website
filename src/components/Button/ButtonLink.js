import React from "react";

function ButtonLink(props) {
	return (
		<a
			className='button-link'
			href={
				props.linkTo ||
				(props.mailTo && `mailto:${props.mailTo}?subject=Hey there :)`)
			}
		>
			{props.children}
		</a>
	);
}

export default ButtonLink;
