import React, { useCallback, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import $ from "jquery";

function IntroCard() {
	const words = useRef([
		"· Hello",
		"· Hola!",

		"· Bonjour",
		"· Ciao",
		"· Hallo",
		"· 你好",
		"שלום ·",
		"· สวัสดี",
		"· Aloha",
		"· Olá",
		"· Sveiki",
		"· Xin Chào",
	]);
	const card = useRef(null);
	const title = useRef(null);
	const [isReady, setReady] = useState(false);
	const [word, setWord] = useState(words.current[0]);
	const interval = useRef(150);
	const tl = useRef(gsap.timeline());

	const changeWords = useCallback(() => {
		setWord(prev => words.current[words.current.indexOf(prev) + 1]);
	}, [word]);

	useEffect(() => {
		if (isReady) {
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
									ease: "expo.inOut",
								},
								0
							);
			}, interval.current);
		}
	}, [word, isReady]);

	useEffect(() => {
		gsap.to(title.current, {
			opacity: 1,
			duration: 1,
			onComplete: () => setReady(true),
		});
	}, []);

	return (
		<div className='o-introCard' ref={card}>
			<h3 style={{ opacity: 0 }} ref={title}>
				{word}
			</h3>
		</div>
	);
}

export default IntroCard;
