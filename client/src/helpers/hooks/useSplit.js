import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useSplit(refs, options) {
	const [splitText, setSplitText] = useState(null);

	useEffect(() => {
		gsap.registerPlugin(SplitText);

		if (refs[0] && !splitText) {
			setTimeout(() => {
				const mySplitText = new SplitText(refs, options);
				setSplitText(mySplitText);
			}, 200);
		}
	}, [refs, options, splitText]);

	return { splitText };
}
export default useSplit;
