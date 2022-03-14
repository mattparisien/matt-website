import React from "react";
import { useContext, useRef, useCallback } from "react";
import { ColorContext, CursorContext } from "../../App/App";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

function Grid({ items }) {
	const { setPageTheme, pageTheme } = useContext(ColorContext);
	const { setCursorState } = useContext(CursorContext);

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
		setCursorState('hovering')
	};

	const handleMouseLeave = () => {
		setPageTheme("regular");
		setCursorState('following')
	};

	return (
		<div className='c-grid'>
			{items &&
				items.map((item, i) => {
					return (
						<Item
							key={i}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							src={item.Cover.image.url}
							alt={""}
							previewText={item.PreviewText}
							title={item.Title}
						/>
					);
				})}
		</div>
	);
}

function Item({ onMouseEnter, onMouseLeave, src, alt, previewText, title }) {
	const ref = useRef(null);
	const [inViewRef, inView] = useInView({threshold: 0.5});

	const setRefs = useCallback(
		node => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			inViewRef(node);
		},
		[inViewRef]
	);

	const itemClasses = classNames("c-grid_item", { "is-in-view": inView });

	return (
		<a
			className={itemClasses}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			ref={setRefs}
		>
			<div className='c-grid_img-wrapper'>
				<img src={src} alt='project-image' className='c-grid_img' />
			</div>
			<div className='c-grid_info'>
				<h3 className='c-grid_title'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>
		</a>
	);
}

export default Grid;
