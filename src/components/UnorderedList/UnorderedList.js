import React from "react";
import { StyledUnorderedList } from "./styles/StyledUnorderedList";

function UnorderedList({ listInfo }) {
	return (
		<StyledUnorderedList>
			{listInfo.map(listItem => {
				return (
					<li>
						<a
							href={listItem.url}
							target={listItem.openNewTab ? "_blank" : "_self"}
						>{listItem.title}</a>
					</li>
				);
			})}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
