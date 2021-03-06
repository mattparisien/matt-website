import React, { useRef, useEffect, useState, forwardRef } from "react";
import GalleryItem from "./GalleryItem";
import { useIntersect } from "../../helpers/hooks/useIntersect";
import { StyledGallery } from "./styles/StyledGallery";

function ImageGallery(props, ref) {
	const { data } = props;
	const containerRef = useRef(null);
	const [isVisible, setVisible] = useState(false);

	const imageRefs = useRef(null);
	imageRefs.current = [];

	const addToRefs = el => {
		if (imageRefs.current && !imageRefs.current.includes(el)) {
			imageRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (imageRefs.current) {
			const handleIntersection = entries => {
				entries.forEach(entry => {
					setVisible(entry.isIntersecting);
				});
			};

			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 1,
			});

			imageRefs.current.forEach(image => {
				observer.observe(image);
			});
		}
	}, [imageRefs, isVisible]);

	const images =
		data &&
		data.map(post => {
			return post.attributes.Photo.data.map((image, index) => {
				return (
					<GalleryItem
						image={
							image.attributes.ext !== ".mp4" ? image.attributes.url : null
						}
						video={
							image.attributes.ext === ".mp4" ? image.attributes.url : null
						}
						key={index}
						ref={addToRefs}
						isVisible={isVisible}
					/>
				);
			});
		});

	return <StyledGallery ref={(containerRef, ref)} className="gallery-wrapper">{images}</StyledGallery>;
}

export default forwardRef(ImageGallery);
