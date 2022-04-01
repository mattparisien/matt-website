import {
	GradientTexture, Icosahedron,
	MeshDistortMaterial,
	useTexture
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { blobConfig } from "./config";

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
			args={[1.2, 100]}
			ref={main}
			material={material}
			position={[0, 0, 0]}
			scale={12}
		/>
	);
}
function Instances({ material }) {
	const [sphereRefs] = useState(() => []);

	const initialPositions = [
		[-4, 20, -12],
		[-10, 12, -4],
		[-11, -12, -23],
		[-16, -6, -10],
		[12, -2, -3],
		[13, 4, -12],
		[14, -2, -23],
		[8, 10, -20],
	];

	useFrame(() => {
		sphereRefs.forEach(el => {
			el.position.y += 0.02;
			if (el.position.y > 19) el.position.y = -18;
			el.rotation.x += 0.06;
			el.rotation.y += 0.06;
			el.rotation.z += 0.02;
		});
	});
	return (
		<>
			<MainSphere material={material} />
			{/* {initialPositions.map((pos, i) => (
				<Icosahedron
					args={[1, 4]}
					position={[pos[0], pos[1], pos[2]]}
					material={material}
					key={i}
					ref={ref => (sphereRefs[i] = ref)}
				/>
			))} */}
		</>
	);
}

export default function Scene() {
	const [material, set] = useState();

	const bumpMap = useTexture("/bumps.jpg");

	return (
		<>
			<>
				{/* <pointLight position={[140, 0, 130]} intensity={2} /> */}
				{/* <pointLight position={[0, -400, 500]} intensity={2} color="blue" /> */}
				{/* <directionalLight position={[-800, -400, 500]} intensity={2} shadowCameraLeft={-3000} /> */}
				<ambientLight intensity={1} />
				<spotLight
					intensity={0.6}
					position={[30, 30, 50]}
					angle={0.2}
					penumbra={1}
					castShadow
				/>
				<pointLight position={[0, 60, -100]} intensity={20} />
				<pointLight position={[-50, 0, -50]} intensity={2} />

				{/* <directionalLight position={[2000, 0, 100]} intensity={1} color='pink'/> */}
				{/* <ambientLight position={[0, 600, 100]} intensity={2} /> */}
				{/* <ambientLight intensity={2} /> */}
				{/* <rectAreaLight
					width={200}
					height={200}
					color={"WHITE"}
					intensity={3}
					position={[-2, 12, 25]}
					// lookAt={[0, 0, 0]}
					// penumbra={1}
					// castShadow
				/> */}
			</>
			{/* <ambientLight intensity={1.6} position={[2000, 0, 100]} /> */}
			<MeshDistortMaterial
				ref={set}
				// color={blobColor}
				// bumpMap={bumpMap}
				roughness={0.2}
				metalness={0.2}
				bumpScale={0.06}
				radius={1.2}
				clearcoat={3}
				clearcoatRoughness={3}
				distort={0.4}
			>
				<GradientTexture
					stops={blobConfig.blobGradientStops}
					colors={blobConfig.blobGradientColors}
					size={1024}
				/>
			</MeshDistortMaterial>
			{/* <GradientTexture
				stops={blobConfig.blobGradientStops}
				colors={blobConfig.blobGradientColors}
				size={1024}
			/> */}
			{material && <Instances material={material} />}
		</>
	);
}
