import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
	Vignette,
} from "@react-three/postprocessing";
import {
	Html,
	Icosahedron,
	useTexture,
	useCubeTexture,
	MeshDistortMaterial,
} from "@react-three/drei";

function Blob() {
	return <div>Blob</div>;
}

function MainSphere({ material }) {
	const main = useRef();
	useFrame(({ clock, mouse }) => {
		main.current.rotation.z = clock.getElapsedTime();
		main.current.rotation.y = THREE.MathUtils.lerp(
			main.current.rotation.y,
			mouse.x * Math.PI,
			0.1
		);
		main.current.rotation.x = THREE.MathUtils.lerp(
			main.current.rotation.x,
			mouse.y * Math.PI,
			0.1
		);
	});
	return (
		<Icosahedron
			args={[1, 4]}
			ref={main}
			material={material}
			position={[0, 0, 0]}
		/>
	);
}

function Scene() {
	const [material, set] = useState();

	const bumpMap = useTexture("/bumps.jpg");

	return (
		<MeshDistortMaterial
			ref={set}
			envMap={envMap}
			bumpMap={bumpMap}
			color={"#010101"}
			roughness={0.1}
			metalness={1}
			bumpScale={0.005}
			clearcoat={1}
			clearcoatRoughness={1}
			radius={1}
			distort={0.4}
		/>
	);
}

export default Blob;
