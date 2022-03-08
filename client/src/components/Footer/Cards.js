import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

function Cards(props) {
	const cardRefs = useRef([]);
	cardRefs.current = [];
	const container = useRef(null);

	const cardData = [
		{
			greeting: "Let's start a project?",
		},
		{
			greeting: "Let's have a coffee?",
		},
		{
			greeting: "Let's talk about mental health.",
		},
		{
			greeting: "Let's have a fucking photoshoot.",
		},
		{
			greeting: "What's your favorite movie?",
		},
		{
			greeting: "Can I have your spotify playlist?",
		},
		{
			greeting: "Quit talking and being doing.",
		},
		{
			greeting: "Quit talking and being doing.",
		},
	];

	const addToRefs = el => {
		if (cardRefs.current && !cardRefs.current.includes(el)) {
			cardRefs.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(Draggable);

		if (cardRefs.current && container.current) {
			cardRefs.current.forEach(card => {
				Draggable.create(card, {
					type: "x,y",
					edgeResistance: 0.65,
					bounds: container.current,
					inertia: true,
				});
			});
		}
	}, [cardRefs, container]);

	return (
		<div className={"footer-cards"} ref={container}>
			<div className='footer-cards__wrapper'>
				{cardData.map((card, i) => {
					return <Card greeting={card.greeting} ref={addToRefs} key={i}/>;
				})}
			</div>
		</div>
	);
}

export default Cards;