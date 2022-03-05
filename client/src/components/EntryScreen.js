import classNames from "classnames";
import gsap from "gsap/all";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import useSplit from "../helpers/hooks/useSplit";
import ClipPathTransition from "./ClipPathTransition";

function EntryScreen(props) {
	const entryScreenClass = classNames(
		"entry-screen -isFixed -isFull -flexCenterAll"
	);

	const [isTransitioning, setIsTransitioning] = useState(false);

	const splitRefs = useRef([]);
	const tl = useRef(gsap.timeline());
	const container = useRef(null);
	const card = useRef(null);

	const addToRefs = el => {
		if (splitRefs.current && !splitRefs.current.includes(el)) {
			splitRefs.current.push(el);
		}
	};

	const [isSplit, chars, splitCount] = useSplit(splitRefs.current, {
		type: "chars, lines",
		charsClass: "char",
		linesClass: "line",
	});

	useEffect(() => {
		if (props.isActive) {
			if (isSplit && splitRefs.current.length) {
				const q = gsap.utils.selector(container.current);

				const charsLinesOne = $(splitRefs.current[0]).find(".char");
				const charsLinesTwo = $(splitRefs.current[1]).find(".char");
				const charsLinesThree = $(splitRefs.current[2]).find(".char");

				tl.current
					.to(charsLinesOne, {
						y: 0,
						opacity: 1,
						duration: 0.5,
						stagger: 0.01,
					})
					.to(
						charsLinesOne,
						{
							y: "-100%",
							opacity: 0,
							duration: 0.5,
							stagger: 0.01,
						},
						2
					)
					.to(
						charsLinesTwo,
						{
							y: "0",
							opacity: 1,
							duration: 0.5,
							stagger: 0.01,
						},
						3
					)
					.to(
						charsLinesTwo,
						{
							y: "-100%",
							opacity: 0,
							duration: 0.5,
							stagger: 0.01,
						},
						5
					)
					.to(
						charsLinesThree,
						{
							y: "0",
							opacity: 1,
							duration: 0.5,
							stagger: 0.01,
						},
						7
					)
					.to(
						charsLinesThree,
						{
							y: "-100%",
							opacity: 0,
							duration: 0.5,
							stagger: 0.01,
							onComplete: () => {
								setIsTransitioning(true);
								props.setState(prev => ({
									...prev,
									entryScreenActive: false,
								}));
							},
						},
						9
					);
			}
		}
	}, [isSplit, splitRefs, container]);

	return (
		<ClipPathTransition
			isTransitioning={isTransitioning}
			container={card.current}
			setTransitioning={setIsTransitioning}
		>
			<div className={entryScreenClass} ref={card}>
				<h2
					className='entry-screen__text -isRelative -flexCenterAll'
					ref={container}
				>
					<div className='entry-screen__text__part' ref={addToRefs}>
						One sec... just getting ready
					</div>
					<div
						className='entry-screen__text__part -isAbsolute -isAbsolute__centered'
						ref={addToRefs}
					>
						Almost ready...
					</div>
					<div
						className='entry-screen__text__part -isAbsolute -isAbsolute__centered'
						ref={addToRefs}
					>
						Oki come in
					</div>
				</h2>
			</div>
		</ClipPathTransition>
	);
}

export default EntryScreen;
