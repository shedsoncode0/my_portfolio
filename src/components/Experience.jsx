import { OrbitControls } from '@react-three/drei';
import React from 'react'
import Background from './Background';
import Planet from './Planet'

const Experience = () => {
  return (
    <>
      <OrbitControls
       makeDefault  
       maxPolarAngle={2} 
       mminAzimuthAngle={Math.PI * 2}
       minPolarAngle={1}
       enableZoom={false}
       panSpeed={2}

      />
      <Background />
      {/* <ambientLight intensity={1}/> */}
      {/* <directionalLight  intensity={1} position={[-100,30,40]} castShadow color={"yellow"}/> */}
      <Planet />
    </>
  )
}


export default Experience;