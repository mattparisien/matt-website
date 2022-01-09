import React from 'react'

function Box() {
  return (
   <mesh rotation={[90, 0, 20]}>
     <boxBufferGeometry attach="geometry"/>
     <meshLambertMaterial attach="material" color="blue"/>
   </mesh>
  )
}

export default Box
