export default function animatePreloader(timeline, refs, setLoading, setHasVisited) {
	timeline
		.to(refs.lineOneWords, {
			opacity: 1,
			duration: 0.2,
			stagger: 0.1,
		})
		.to(
			refs.lineOneWords,
			{
				opacity: 0,
				duration: 0.2,
				stagger: 0.1,
			},
			0.8
		)
		.to(
			refs.lineTwoWords,
			{
				opacity: 1,
				duration: 0.2,
				stagger: 0.1,
			},
			1.6
		)
		.to(
			refs.lineTwoWords,
			{
				opacity: 0,
				duration: 0.2,
				stagger: 0.1,
			},
			2.4
		)
		.to(
			refs.lineThreeWords,
			{
				opacity: 1,
				duration: 0.2,
				stagger: 0.1,
			},
			3.2
		)
		.to(
			refs.lineThreeWords,
			{
				opacity: 0,
				duration: 0.2,
				stagger: 0.1,
			},
			4
		)
		.to(
			refs.lineFourWords,
			{
				opacity: 1,
				duration: 0.2,
				stagger: 0.1,
			},
			4.8
		)
		.to(
			refs.lineFourWords,
			{
				opacity: 0,
				duration: 0.2,
				stagger: 0.1,
			},
			5.6
		)
		.to(refs.frame, {
			scale: 1,
			duration: 0.3,
		})
		.set(refs.containerRef, {
			display: "none",
			onComplete: () => {
				setLoading((prev) => ({ ...prev, isLoading: false }));
			},
		});
}
