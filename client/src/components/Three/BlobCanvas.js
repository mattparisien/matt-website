import React from "react";
import { Canvas } from "@react-three/fiber";

function BlobCanvas() {
	return (
		<Canvas
			colorManagement
			camera={{ position: [0, 0, 3] }}
			gl={{
				powerPreference: "high-performance",
				alpha: false,
				antialias: false,
				stencil: false,
				depth: false,
			}}
		></Canvas>
	);
}

export default BlobCanvas;
