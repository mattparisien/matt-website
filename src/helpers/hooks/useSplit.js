import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useSplit(arrayOfElements, options) {
	const [splitText, setSplitText] = useState(null);

	const [isSplit, setIsSplit] = useState(false);

	const [windowWidth] = useResize();

	useEffect(() => {
		gsap.registerPlugin(SplitText);

		if (!arrayOfElements.length || !arrayOfElements[0]) {
			return;
		}

		if (arrayOfElements.length >= 0 && !isSplit) {
			const mySplitText = new SplitText(arrayOfElements, options);
			$(mySplitText.lines).wrap('<div class="line-wrapper"></div>');
			setIsSplit(true);
			setSplitText(mySplitText);
		}
	}, [arrayOfElements, isSplit, options, splitText]);

	useEffect(() => {
		if (splitText) {
			setSplitText(splitText.revert().split());
			// $(splitText.lines).wrap('<div class="line-wrapper"></div>');
		}
	}, [windowWidth, isSplit, options]);

	return [isSplit, splitText];
}
export default useSplit;
