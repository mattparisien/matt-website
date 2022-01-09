import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { StyledScene } from "./styles/StyledScene";
import { OrbitControls } from "@react-three/drei";
import Polaroid from "./Polaroid";


function Scene() {
	return (
    
		<StyledScene className='scene-wrapper'>
			<Canvas className='canvas'>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={3} />
				<directionalLight position={[-2, 5, 2]} intensity={0.5} />
				<Suspense fallback={null}>
					<Polaroid/>
				</Suspense>
			</Canvas>
		</StyledScene>
    
	);
}

export default Scene;
