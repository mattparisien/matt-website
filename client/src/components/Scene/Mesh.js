import React, { useState, useRef } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import { useTexture, useCubeTexture } from "@react-three/drei";
import PlasticTexture from "../../assets/images/Normal.png";
import Instances from "./Instances";

function Mesh() {
	const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
		useTexture([
			PlasticTexture,
			PlasticTexture,
			PlasticTexture,
			PlasticTexture,
			PlasticTexture,
		]);
	const envMap = useCubeTexture(
		["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
		{ path: "/cube/" }
	);
	// We
	const [material, set] = useState();

	return (
		<>
			<MeshDistortMaterial
				ref={set}
				envMap={envMap}
				colorMap={colorMap}
				color={"#f98fdb"}
				roughness={0.1}
				metalness={1}
				bumpScale={0.005}
				clearcoat={1}
				clearcoatRoughness={1}
				radius={2}
				distort={0.4}
			/>
			{material && <Instances material={material} />}
		</>
	);
}

export default Mesh;
