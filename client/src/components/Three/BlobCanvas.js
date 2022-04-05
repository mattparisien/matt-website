import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Blob";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
	Vignette,
} from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function BlobCanvas({ setLoaded }) {




	return (
		<div className='o-hero_scene'>
			<Canvas
			
				onLoaded={() => console.log("loaded")}
				className='o-blobCanvas'
				camera={{ position: [0, -40, 20] }}
				colorManagement
				gl={{
					powerPreference: "high-performance",
					antialias: false,
					stencil: false,
					depth: false,
				}}
			>
				{/* <color attach='background' args={["#00FFFFFF"]} /> */}

				<Suspense fallback={null}>
					{/* <OrbitControls /> */}
					<Scene />
					{/* <Environment background={false}/> */}
				</Suspense>
				<EffectComposer multisampling={0} disableNormalPass={true}>
					{/* <DepthOfField
						focusDistance={0}
						focalLength={0.02}
						bokehScale={2}
						height={480}
					/> */}

					<Noise opacity={0.025} />
					<Vignette eskil={false} offset={0.1} darkness={1.1} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}

export default BlobCanvas;
