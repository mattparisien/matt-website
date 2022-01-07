import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";
import { StyledUnorderedList } from "./styles/StyledUnorderedList";
import { Link } from "react-router-dom";

function UnorderedList(
	{ listInfo, isVertical, alignItems, justifyContent, currentPath, addToRefs },
	ref
) {
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
						<Link
							to={listItem.url}
							target={listItem.openNewTab ? "_blank" : "_self"}
							ref={addToRefs}
						>
							{listItem.title}
							{listItem.vector}
						</Link>
					</li>
				);
			})}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
