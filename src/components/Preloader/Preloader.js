import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useSplit from "../../helpers/hooks/useSplit";
import $ from "jquery";
import animatePreloader from "./motion";
import { StyledPreloader } from "./StyledPreloader";

function Preloader({ setLoading, setHasVisited, isActive }) {
	const container = useRef(null);
	const frameRef = useRef(null);
	const sentenceRefs = useRef([]);
	sentenceRefs.current = [];
	const tl = useRef(gsap.timeline());
	const wordsContainer = useRef(null);
	const [isSplit, chars, splitCount] = useSplit(sentenceRefs.current, {
		type: "lines, words",
		linesClass: "line",
		wordsClass: "word",
	});

	const addToRefs = el => {
		if (sentenceRefs.current && !sentenceRefs.current.includes(el)) {
			sentenceRefs.current.push(el);
		}
	};

	useEffect(() => {
		//Set loading to true initially
		

		if (frameRef.current && sentenceRefs.current && isSplit) {
			const q = gsap.utils.selector(wordsContainer.current);

			const lines = q(".line");
			const lineOneWords = $(lines[0]).find(".word");
			const lineTwoWords = $(lines[1]).find(".word");
			const lineThreeWords = $(lines[2]).find(".word");
			const lineFourWords = $(lines[3]).find(".word");
			const containerRef = container.current;
			const frame = frameRef.current;

			const refs = {
				lines,
				lineOneWords,
				lineTwoWords,
				lineThreeWords,
				lineFourWords,
				containerRef,
				frame,
			};

			animatePreloader(tl.current, refs, setLoading, setHasVisited);
		}
	}, [frameRef, sentenceRefs, isSplit, wordsContainer, container]);

	return (
		<StyledPreloader id='preloader' className='preloader' ref={container}>
			<div className='loading-sentence-container'>
				<h3 ref={wordsContainer}>
					<span ref={addToRefs}>Just getting ready...</span>
					<span ref={addToRefs}>One second here...</span>
					<span ref={addToRefs}>Almost there...</span>
					<span ref={addToRefs}>Ok here we go</span>
				</h3>
			</div>
			<div className='preloader__frame' ref={frameRef}></div>
		</StyledPreloader>
	);
}

export default Preloader;
