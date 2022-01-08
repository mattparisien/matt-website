export default function animateContentEntry(timeline, refs) {
	timeline
		.set(refs.header, { display: "flex" })
		.set(refs.menuBtn, { display: "block" })
		.to(refs.titleChars, {
			opacity: 1,
			y: 0,
			delay: 0.2,
			stagger: 0.04,
			duration: 0.8,
			ease: "power3.out",
		})
		.to(
			refs.menuBtn,
			{
				opacity: 1,
				duration: 0.5,
			},
			0.5
		)
		.to(
			refs.mainContent,
			{
				opacity: 1,
				y: 0,
				duration: 0.1,
			},
			1
		)
		

	return timeline;
}
