import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useSplit from "../helpers/hooks/useSplit";
import $ from "jquery";

function Preloader({ setLoading }) {
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
		if (frameRef.current && sentenceRefs.current && isSplit) {
			const q = gsap.utils.selector(wordsContainer.current);

			const lines = q(".line");
			const lineOneWords = $(lines[0]).find(".word");
			const lineTwoWords = $(lines[1]).find(".word");
			const lineThreeWords = $(lines[2]).find(".word");
			const lineFourWords = $(lines[3]).find(".word");

			tl.current
				.to(lineOneWords, {
					opacity: 1,
					duration: 0.2,
					stagger: 0.1,
				})
				.to(
					lineOneWords,
					{
						opacity: 0,
						duration: 0.2,
						stagger: 0.1,
					},
					0.8
				)
				.to(
					lineTwoWords,
					{
						opacity: 1,
						duration: 0.2,
						stagger: 0.1,
					},
					1.6
				)
				.to(
					lineTwoWords,
					{
						opacity: 0,
						duration: 0.2,
						stagger: 0.1,
					},
					2.4
				)
				.to(
					lineThreeWords,
					{
						opacity: 1,
						duration: 0.2,
						stagger: 0.1,
					},
					3.2
				)
				.to(
					lineThreeWords,
					{
						opacity: 0,
						duration: 0.2,
						stagger: 0.1,
					},
					4
				)
				.to(
					lineFourWords,
					{
						opacity: 1,
						duration: 0.2,
						stagger: 0.1,
					},
					4.8
				)
				.to(
					lineFourWords,
					{
						opacity: 0,
						duration: 0.2,
						stagger: 0.1,
					},
					5.6
				)
				.to(frameRef.current, {
					scale: 1,
					duration: 0.3,
				})
				.set(container.current, {
					display: "none",
					onComplete: () => {
						setLoading(prev => ({ ...prev, isLoading: false }));
					},
				});
		}
	}, [frameRef, sentenceRefs, isSplit, wordsContainer, container]);

	return (
		<div className='preloader' id='preloader' ref={container}>
			<div className='loading-sentence-container'>
				<h3 ref={wordsContainer}>
					<span ref={addToRefs}>Just getting ready...</span>
					<span ref={addToRefs}>One second here...</span>
					<span ref={addToRefs}>Almost there...</span>
					<span ref={addToRefs}>Ok here we go</span>
				</h3>
			</div>
			<div className='preloader__frame' ref={frameRef}></div>
		</div>
	);
}

export default Preloader;
