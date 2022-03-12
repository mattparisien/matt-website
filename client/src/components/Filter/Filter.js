import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

function Filter({ categories, selected, setSelected }) {
	return (
		<ul className='c-filter -flex -align-center -justify-center'>
			{categories &&
				categories.map((category, i) => {
					return (
						<li className='c-filter_item'>
							<Button
								target='_blank'
								onClick={() => setSelected(category.name)}
								selected={category.name === selected}
								key={i}
								number={category.length}
							>
								{category.name}
							</Button>
						</li>
					);
				})}
		</ul>
	);
}

export default Filter;
