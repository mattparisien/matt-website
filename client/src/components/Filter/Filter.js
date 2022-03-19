import React, { useState } from "react";
import Container from "../Containers/Container";

function Filter({ categories, selected, setSelected }) {
	const handleClick = categoryName => {
		setSelected(categoryName);
	};

	return (
		<Container classes="-padding-desktop-none">
			<ul className='c-filter -flex -align-center -justify-center -fade-up-load'>
				{categories &&
					categories.map((category, i) => {
						return (
							<li className='c-filter_item'>
								<button
									target='_blank'
									onClick={() => handleClick(category.name)}
									className={
										category.name.toLowerCase() === selected.toLowerCase()
											? "is-active"
											: ""
									}
									key={i}
									number={category.length}
								>
									{category.name}
								</button>
							</li>
						);
					})}
			</ul>
		</Container>
	);
}

export default Filter;
