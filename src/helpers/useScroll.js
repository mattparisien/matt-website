import { useState, useEffect, useMemo } from "react";
import _, { debounce } from "lodash";
import $ from "jquery";

export default function useScroll(scroller) {
	const [scrollDirection, setScrollDirection] = useState(null);
	const [lastScroll, setLastScroll] = useState(new Date());
	const [isScrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(null);


	const toggleScrollDirection = e => {
		if (e.direction !== scrollDirection) {
			setScrollDirection(e.direction);
		}
	};

	const listenForScroll = () => {
		if (lastScroll.getTime() < new Date().getTime() - 300) {
		}
	};

	useEffect(() => {
		if (scroller) {
			console.log(scroller);
			scroller.on("scroll", e => toggleScrollDirection(e));
		}

		return () => {
			window.removeEventListener("scroll", toggleScrollDirection);
		};
	}, [scroller]);

	const handleEndScroll = useMemo(
		() => _.debounce(() => setScrolling(false), 200),
		[]
	);

  const handleScrollTop = () => {
    setScrollTop($(window).scrollTop())
  }

	const handleScroll = () => {
		setScrolling(true);
		handleEndScroll();
    handleScrollTop();
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", listenForScroll);
		};
	});

	return [isScrolling, scrollDirection, scrollTop];
}