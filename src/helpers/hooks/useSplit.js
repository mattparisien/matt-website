import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useResize from "./useResize";
import { split } from "lodash";
import $ from "jquery";

function useSplit(arrayOfElements, options) {
	const [splitText, setSplitText] = useState(null);
	const [splitCount, setSplitCount] = useState(0);
	const [isSplit, setIsSplit] = useState(false);
	const [chars, setChars] = useState(null);
	const [windowWidth] = useResize();
	const [windowWidthChanged, setWindowWidthChanged] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(SplitText);
		

		if (!arrayOfElements.length) {
			return;
		}

		if (arrayOfElements.length >= 0 && !isSplit) {
			const mySplitText = new SplitText(arrayOfElements, options);
			$(mySplitText.lines).wrap('<div class="line-wrapper"></div>');
			setIsSplit(true);
			setSplitText(mySplitText);
			setSplitCount(1);
			setChars(mySplitText.chars);
		}
	}, [arrayOfElements]);

	useEffect(() => {
		if (splitText) {
			console.log('asasasaS', splitText)
			setSplitText(splitText.revert().split());
			// $(splitText.lines).wrap('<div class="line-wrapper"></div>');
			setSplitCount(prev => prev + 1);
		}
	}, [windowWidth]);

	return [isSplit, chars, splitCount];
}
export default useSplit;
