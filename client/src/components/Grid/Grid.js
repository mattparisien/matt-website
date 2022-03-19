import { useMediaQuery } from "@mui/material";
import classNames from "classnames";
import React, {
	useCallback,
	useContext,
	useRef,
	useState,
	useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import { ColorContext, CursorContext } from "../../App/App";
import SpinnerCard from "../Spinner/SpinnerCard";

function Grid({ items, category }) {
	const { setPageTheme } = useContext(ColorContext);
	const { setCursorState } = useContext(CursorContext);
	const tablet = useMediaQuery("(max-width: 768px)");
	const [oldGrid, setOldGrid] = useState(null);
	const [newGrid, setNewGrid] = useState(category);
	const [currentGrid, setCurrentGrid] = useState(null);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (!isFirstRender.current) {
			setNewGrid(null);
			setOldGrid(category);

			setTimeout(() => {
				setCurrentGrid(category);
				setOldGrid(null);
				setNewGrid(category);
			}, 1200);
		}

		isFirstRender.current = false;
		// setCurrentGrid(prev => category !== prev && null);
	}, [category]);

	const classes = classNames(`c-grid c-grid_${currentGrid}`, {
		"is-old": oldGrid,
		"is-new": newGrid,
	});

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
		if (!tablet && category === 'software') {
			setPageTheme(themes[getRandomIndex()]);
			setCursorState("hovering");
		}
	};

	const handleMouseLeave = () => {
		if (!tablet && category === 'software') {
			setPageTheme("regular");
			setCursorState("following");
		}
	};

	return (
		<div className={classes}>
			{items &&
				items[currentGrid || "software"].map((item, i) => {
					console.log(item);
					return (
						<Item
							key={i}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							src={item.url || item.Cover.image.url}
							alt={item.alt || item.alternativeText}
							previewText={item.PreviewText || null}
							title={item.Title || null}
							url={item.Location || null}
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
	const [loaded, setLoaded] = useState(false);

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
			{!loaded && <SpinnerCard />}
			<div className='c-grid_img-wrapper'>
				<img
					src={src}
					alt={Math.random()}
					className='c-grid_img'
					onLoad={() => setLoaded(true)}
				/>
			</div>
			<div className='c-grid_info'>
				<h3 className='c-grid_title'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>
		</a>
	);
}

export default Grid;
