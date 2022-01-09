import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { StyledScene } from "./styles/StyledScene";
import { OrbitControls } from "@react-three/drei";

function Scene() {
	return (
		<StyledScene className='scene-wrapper'>
			<Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={0.5} />
				<Box />
			</Canvas>
		</StyledScene>
	);
}

export default Scene;
