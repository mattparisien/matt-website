import gsap from "gsap";

export const pageTransitionAnimation = (
	timeline,
	transitionCard,
	morphPath
) => {
	const tl = timeline.current;
	const container = transitionCard.current;
	const path = morphPath.current;

	

	tl.set(container, { display: "block" });
	tl.set(path, { attr: { d: "M1031.55,768.1H75.16v-1.24l956.39.39Z" } })
		.addLabel(">", "isStart")
		.to(path, {
			morphSVG:
				"M1031.55,768.1H75.16V479.45c297.87-290.93,614-328.79,956.39,0Z",
			duration: 0.5,
			ease: "power3.in",
		})
		.to(path, {
			morphSVG: "M1031.55,768.1H75.16V190.8h956.39Z",
			duration: 0.5,
			ease: "power3.out",
		})
		.addLabel(">", "isHalfway")
		.to(path, {
			morphSVG:
				"M1031.55,588.51c-325.63-357-644.29-358.79-956.39,0V190.8h956.39Z",
			duration: 0.5,
			ease: "power3.in",
		})
		.to(path, {
			morphSVG: "M1031.55,192.36c-421.94.1-539.14-.26-956.39,1v-2.6h956.39Z",
			duration: 0.5,
			ease: "power3.out",
			opacity: 0,
		})
		.to(
			container,
			{
				opacity: 0,
				duration: 0.5,
			},
			4.5
		)
		.set(container, {
			display: "none",
		});

	return tl;
};
