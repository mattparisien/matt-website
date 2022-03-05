import { useEffect, useState } from "react";
import useResize from "./useResize";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

function useSplit(refs, options) {
	const [splitText, setSplitText] = useState(null);
	const [windowWidth] = useResize();

	useEffect(() => {
		gsap.registerPlugin(SplitText);

		if (refs[0] && !splitText) {
			const mySplitText = new SplitText(refs, options);
			setSplitText(mySplitText);
		}
	}, [windowWidth, refs]);

	return { splitText };
}
export default useSplit;
