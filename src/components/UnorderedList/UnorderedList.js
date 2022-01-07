import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";
import { StyledUnorderedList } from "./styles/StyledUnorderedList";
import AnchorLink from "../AnchorLink/AnchorLink";

function UnorderedList({
	listInfo,
	isVertical,
	alignItems,
	justifyContent,
	currentPath,
	addToRefs,
	hasRouterLinks,
	onClick,
}) {
	const activeLink = useRef(null);

	return (
		<StyledUnorderedList
			flexColumn={isVertical}
			alignItems={alignItems}
			justifyContent={justifyContent}
			activeLink={activeLink.current}
			className='unordered-list'
		>
			{listInfo.map((listItem, i) => {
				return (
					<li
						className='list-item'
						ref={() =>
							listItem.url === currentPath ? (activeLink.current = i + 1) : null
						}
					>
						<AnchorLink
							to={listItem.url}
							target={listItem.openNewTab ? "_blank" : "_self"}
							addToRefs={addToRefs}
							onClick={onClick}
							isRouterLink={hasRouterLinks}
						>
							{listItem.title}
							{listItem.vector}
						</AnchorLink>
					</li>
				);
			})}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
