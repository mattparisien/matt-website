import { useEffect, useState } from "react";

function useIntersect(arrayOfRefs, options) {
	const [state, setState] = useState({
		isIntersecting: false,
		target: null,
	});

	useEffect(() => {
		//Handle possible errors
		if (!arrayOfRefs || !options) {
			console.error("useIntersection: You are either missing refs or options");
			return;
		} else if (!Array.isArray(arrayOfRefs)) {
			console.error("useIntersection: you must provide an array of refs");
			return;
		} else if (!arrayOfRefs[0]) {
			console.error("Ref cannot be null");
			return;
		}
		const handleIntersection = entries => {
			entries.forEach(entry => {
			
				const isIntersecting = entry.isIntersecting;

				if (isIntersecting && !state.isIntersecting) {
					setState({
						isIntersecting: true,
						target: entry.target,
					});
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		arrayOfRefs.forEach(item => {
			observer.observe(item);
			state.target && observer.unobserve(state.target);
		});

		return () => {
			observer.disconnect();
		};
	}, [arrayOfRefs]);

	return [state.isIntersecting, state.target];
}

export { useIntersect };
