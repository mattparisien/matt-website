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
		<StyledScene
			className='scene-wrapper'
			style={{ backgroundColor: "purple" }}
		>
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
				<color attach='background' args={["#050505"]} />
				<fog color='#161616' attach='fog' near={8} far={30} />

				<Suspense fallback={null}>
					<Mesh />
				</Suspense>
				<EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
			</Canvas>
		</StyledScene>
	);
}

export default Scene;
