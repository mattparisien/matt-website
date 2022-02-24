import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

function AnchorLink({
	isRouterLink,
	to,
	target,
	className,
	children,
	onClick,
	addToRefs,
}) {
	return (
		<>
			{isRouterLink ? (
				<Link
					to={to}
					target={target}
					className={className}
					ref={addToRefs}
					onClick={onClick}
				>
					{children}
				</Link>
			) : (
				<a
					href={to}
					target={target}
					className={className}
					ref={addToRefs}
					onClick={onClick}
				>
					{children}
				</a>
			)}
		</>
	);
}

export default forwardRef(AnchorLink);
