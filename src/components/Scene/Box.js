import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from "../../assets/images/Texture.jpg";

function Box() {

  const colorMap = useLoader(TextureLoader, texture);

  return (
   <mesh rotation={[90, 0, 20]}>
     <boxBufferGeometry attach="geometry"/>
     <meshNormalMaterial attach="material" />
   </mesh>
  )
}

export default Box
