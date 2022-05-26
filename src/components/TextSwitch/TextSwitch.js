import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function TextSwitch({ words, classes, variant }) {
	gsap.registerPlugin(SplitText);

	const [word, setWord] = useState(words[0]);
	const [isSplit, setIsSplit] = useState(false);
	const textClasses = classNames(`o-${variant} -text-switch`, {[classes]: classes});

	const split = useRef(null);

	useEffect(() => {
		if (split.current) {
			const splitText = new SplitText(split.current, {
				type: "chars, lines",
				charsClass: "c-char",
			});

			setIsSplit(true);

			if (splitText.chars) {
				const tl = gsap.timeline();
				tl.set(split.current, {
					opacity: 1,
				})
					.to(splitText.chars, {
						y: 0,
						duration: 1,
						ease: "expo.inOut",
						delay: 0.1,
						stagger: 0.03,
            opacity: 1
					})
					.to(splitText.chars, {
						y: "-100%",
						duration: 1,
						ease: "expo.inOut",
						delay: 0.1,
						stagger: 0.03,
            opacity: 0
					});
			}
		}
	}, [split, isSplit, word]);

	useEffect(() => {
		setInterval(() => {
			setWord(
				prev =>
					words[
						words.indexOf(prev) === words.length - 1
							? 1
							: words.indexOf(prev) + 1
					]
			);
			setIsSplit(false)
		}, 3000);
	}, [words]);
	return <h2 className={textClasses} ref={split} style={{opacity: !isSplit ? 0 : 1}}>{word}</h2>;
}

export default TextSwitch;
