import classNames from "classnames";
import React, { useCallback, useContext, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ColorContext, CursorContext } from "../../App/App";
import { useMediaQuery } from "@mui/material";

function Grid({ items }) {
	const { setPageTheme } = useContext(ColorContext);
	const { setCursorState } = useContext(CursorContext);
	const tablet = useMediaQuery("(max-width: 768px)");

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
		if (!tablet) {
			setPageTheme(themes[getRandomIndex()]);
			setCursorState("hovering");
		}
	};

	const handleMouseLeave = () => {
		if (!tablet) {
			setPageTheme("regular");
			setCursorState("following");
		}
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
							alt={item.alt}
							previewText={item.PreviewText}
							title={item.Title}
							url={item.Location}
						/>
					);
				})}
		</div>
	);
}

function Item({
	onMouseEnter,
	onMouseLeave,
	src,
	alt,
	previewText,
	title,
	url,
}) {
	const ref = useRef(null);
	const [inViewRef, inView] = useInView({ threshold: 0.5 });

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
			href={url}
			target='_blank'
			rel='noreferrer'
			ref={setRefs}
		>
			<div className='c-grid_img-wrapper'>
				<img src={src} alt={Math.random()} className='c-grid_img' />
			</div>
			<div className='c-grid_info'>
				<h3 className='c-grid_title'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>
		</a>
	);
}

export default Grid;
