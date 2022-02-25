import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { StyledScene } from "./styles/StyledScene";
import { OrbitControls } from "@react-three/drei";
import Glossier from "./Glossier";
import Sphere from "./Sphere";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
	Vignette,
} from "@react-three/postprocessing";
import Mesh from "./Mesh";

function Scene() {
	return (
		<StyledScene className='scene-wrapper'>
			<Canvas
				className='canvas'
				colorManagement
				camera={{ position: [0, 0, 3] }}
				gl={{
					powerPreference: "high-performance",
					alpha: false,
					antialias: false,
					stencil: false,
					depth: false,
				}}
			>

				<color  color={"fffff"}></color>
				
				<pointLight position={[10, 10, 10]} />
				<ambientLight intensity={2} />
				<Suspense fallback={null}>
					<Glossier/>
				</Suspense>
				
			</Canvas>
		</StyledScene>
	);
}

export default Scene;
