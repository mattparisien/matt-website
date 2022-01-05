import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";
import { StyledUnorderedList } from "./styles/StyledUnorderedList";

function UnorderedList({
	listInfo,
	orientation,
	alignItems,
	justifyContent,
	currentPath,
}) {
	const activeLink = useRef(null);

	useEffect(() => {
		console.log(activeLink);
	});

	return (
		<StyledUnorderedList
			flexColumn={orientation === "vertical"}
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
						<a
							href={listItem.url}
							target={listItem.openNewTab ? "_blank" : "_self"}
						>
							{listItem.title}
						</a>
					</li>
				);
			})}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
