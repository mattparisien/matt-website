import React, { useCallback, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import $ from "jquery";

function IntroCard() {


	const words = useRef([
		"",
		"· Hola!",
		"· Hello",
		"· Bonjour",
		"· Ciao",
		"· Hallo",
		"· 你好",
		"שלום ·",
		"· สวัสดี",
		"· Aloha",
	]);
	const card = useRef(null);
	const [word, setWord] = useState(words.current[0]);
	const interval = useRef(300);
	const tl = useRef(gsap.timeline());

	const changeWords = useCallback(() => {
		setWord(prev => words.current[words.current.indexOf(prev) + 1]);
	}, [word]);

	useEffect(() => {
		setTimeout(() => {
			words.current.indexOf(word) < words.current.length - 1
				? changeWords()
				: tl.current
						.to(card.current, {
							y: "-100%",
							duration: 1,
							ease: "expo.inOut",
						})
						.to(
							$(card.current).find("span"),
							{
								opacity: 0,
							},
							0
						)
						.to(
							$(".o-page_home"),
							{
								y: 0,
								duration: 1,
								ease: 'expo.inOut'
							},
							0
						);
		}, interval.current);
	}, [word]);
	return (
		<div className='o-introCard' ref={card}>
			<span>{word}</span>
		</div>
	);
}

export default IntroCard;
