import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import colorMapp from "../../assets/images/Texture.jpeg";
import Color from "../../assets/images/Color.jpg";
import {
  Html,
  Icosahedron,
  useTexture,
  useCubeTexture,
  MeshDistortMaterial
} from "@react-three/drei";

function Sphere({ material }) {

  const main = useRef(null);

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

	const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    Color, 
    colorMapp,
    colorMapp,
    colorMapp,
    colorMapp,
  ])

	return (
    <Icosahedron
    args={[1, 4]}
    ref={main}
    material={material}
    position={[0, 0, 0]}
  />
	);
}

export default Sphere;
