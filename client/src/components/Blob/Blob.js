import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Blob(props) {
	const ref = useRef(null);

	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);

	

	const canvasStyle = {
		minHeight: "100vh",
		backgroundColor: "blue",
	};
	return (
		<Canvas
			style={canvasStyle}
			className='blob-canvas'
			camera={{ position: [0, -40, 20] }}
			colorManagement
			gl={{
				powerPreference: "high-performance",
				antialias: false,
				stencil: false,
				depth: false,
			}}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<mesh
      scale={50}
				{...props}
				ref={ref}
				scale={clicked ? 1.5 : 1}
				onClick={event => click(!clicked)}
				onPointerOver={event => hover(true)}
				onPointerOut={event => hover(false)}
			>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
			</mesh>
			{/* <Icosahedron
				args={[1, 10]}
				scale={20}
				// material={<Material/>}
				position={[0, 0, 0]}
			/> */}
		</Canvas>
	);
}

export default Blob;
