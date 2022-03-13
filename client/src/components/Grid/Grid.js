import React from "react";
import { useContext } from "react";
import { ColorContext } from "../../App/App";

function Grid({ items }) {
	const { setPageTheme, pageTheme } = useContext(ColorContext);

	const themes = [
		"strawberry",
		"dark",
		"sunny",
		"blue",
		"fancy",
		"orangeCrush",
	];

	const getRandomIndex = () => {
		return Math.ceil(Math.random() * (themes.length - 0 + 1) - 1);
	};

	const handleMouseEnter = () => {
		setPageTheme(themes[getRandomIndex()]);
	};

	const handleMouseLeave = () => {
		setPageTheme("regular");
	};

	return (
		<div className='c-grid'>
			{items &&
				items.map((item, i) => {
					return (
						<div
							className='c-grid_item'
							key={i}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className='c-grid_img-wrapper'>
								<img
									src={item.Cover.image.url}
									alt='project-image'
									className='c-grid_img'
								/>
							</div>
							<div className='c-grid_info'>
								<h3 className='c-grid_title'>{item.Title}</h3>
								<p className='c-grid_description -text-tiny'>
									{item.PreviewText}
								</p>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default Grid;
