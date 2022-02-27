import { useState, useEffect } from "react";

export const useProgressiveImage = sources => {
	const [sourceLoaded, setSourceLoaded] = useState();

	useEffect(() => {
		if (sources) {
			const array = sources.data || sources;

			array.forEach(image => {
				const img = new Image();
				img.src = image.src || image.featureImage;
				console.log(image)
				img.onload = () =>
					setSourceLoaded(prev => ({
						...prev,
						[image.id]: image.featureImage || image.src,
					}));
			});
		}
	}, [sources]);

	return sourceLoaded;
};
