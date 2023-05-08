import { Center, Float, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import Background from './Background';
import Planet from './Planet4'
import state from '../store'
import {angleToRadians} from '../utils/angle'
import { useSnapshot } from 'valtio';

const Experience = () => {
  // valtio data
  const snap = useSnapshot(state)

  // orbitControl ref
  const orbitControlsRef = useRef(null);

  // Rotate the earth when page first load
  useEffect(() => {
    if (!!orbitControlsRef.current) {
      orbitControlsRef.current.setAzimuthalAngle(angleToRadians(40))
      console.log(orbitControlsRef.current)
    }
  }, []);

  return (
    <>

      {/* OrbitControl to move the secene around */}
      <OrbitControls
      ref={orbitControlsRef}
       makeDefault  
       maxPolarAngle={2} 
       minPolarAngle={1}
       minAzimuthAngle={angleToRadians(90 - 30)}
       enableZoom={false}
       rotateSpeed={1}
       mouseButtons={{
        LEFT: "MOUSE",
        MIDDLE: "MOUSE",
        RIGHT: "MOUSE",
       }}
      />
      {/* <Background /> */}
      <ambientLight intensity={1}/>
      <directionalLight  intensity={1} position={[100,200,500]} castShadow color={"white"}/>

      {/* The floating 3D model of planet Earth */}
      <Float speed={0.5}>
        <Center>
          {/* The Model */}
          <Planet receiveShadow/>
        </Center>
      </Float>
    </>
  )
}


export default Experience;