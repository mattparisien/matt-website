import React, {useRef, Suspense} from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
	// Uniform
	{
		uTime: 0,
		uColor: new THREE.Color(0.2, 0.0, 0.6),
		uTexture: new THREE.Texture(),
	},
	// Vertex Shader
	glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
	// Fragment Shader
	glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
      float wave = vWave * 0.2;
      // vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(uColor, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = ({imageUrl}) => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  // const [image] = useLoader(THREE.TextureLoader, [
  //   imageUrl,
  // ]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial ref={ref}  />
    </mesh>
  );
};


function HeroCanvas({imageUrl}) {
	
	return (
		<div className='hero-scene'>
			<Canvas camera={{ fov: 10, position: [1, 1, 5] }}>
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
        <Wave imageUrl={imageUrl && imageUrl[0].url}/>
      </Suspense>
			</Canvas>
		</div>
	);
}

export default HeroCanvas;
