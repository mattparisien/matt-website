import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

function Filter({ categories }) {
	const [selected, setSelected] = useState("Software");

	return (
		<div className='c-filter -flex -align-center -justify-center'>
			{categories &&
				categories.map((category, i) => {
					return (
						<div className='c-filter_item'>
							<Button
								onClick={() => setSelected(category.name)}
								selected={category.name === selected}
								key={i}
								number={category.length}
							>
								{category.name}
							</Button>
						</div>
					);
				})}
		</div>
	);
}

export default Filter;
