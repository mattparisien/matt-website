import { useMediaQuery } from "@mui/material";
import classNames from "classnames";
import gsapCore from "gsap/gsap-core";
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useInView } from "react-intersection-observer";
import { ColorContext, CursorContext, LoadingContext } from "../../App/App";
import Link from "../Link/Link";
import SpinnerCard from "../Spinner/SpinnerCard";
import gsap from "gsap";

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
		if (!tablet && category === "software") {
			setPageTheme(themes[getRandomIndex()]);
			setCursorState("hovering");
		}
	};

	const handleMouseLeave = () => {
		if (!tablet && category === "software") {
			setPageTheme("regular");
			setCursorState("following");
		}
	};

	return (
		<div className={classes}>
			{items &&
				items[currentGrid || "software"].map((item, i) => {
					return (
						<Item
							key={i}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							src={item.url || item.Cover.image.url}
							alt={item.alt || item.alternativeText}
							previewText={item.PreviewText || null}
							title={item.Title || null}
							href={`/work/${item.id}`}
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
	href,
}) {
	
	// const [ref, inView, entry] = useInView();
	const [loaded, setLoaded] = useState(false);
	const { isLoading, toggleLoading } = useContext(LoadingContext);

	const itemClasses = classNames("c-grid_item");

	// const handleLoad = () => {
	// 	isLoading && toggleLoading();
	// 	setLoaded(true);
	// };

	// useEffect(() => {
	// 	inView && gsap.to(entry.target, {
	// 		y: 0,
	// 		opacity: 1,
	// 		ease: 'power4.out',
	// 		duration: 1.3
	// 	})
	// }, [inView, entry])

	return (
		<div className={itemClasses}>
			<Link
				isRouterLink
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				href={href}
				target='_blank'
				rel='noreferrer'
				
			>
				{!loaded && <SpinnerCard />}
				<div className='c-grid_img-wrapper'>
					<img
						src={src}
						alt={Math.random()}
						className='c-grid_img'
						onLoad={handleLoad}
					/>
				</div>
				<div className='c-grid_info'>
					<h3 className='c-grid_title'>{title}</h3>
					<p className='c-grid_description -text-tiny'>{previewText}</p>
				</div>
			</Link>
		</div>
	);
}

export default Grid;
