import { Center, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import Background from './Background';
import state from '../store'
import {angleToRadians} from '../utils/angle'
import { useSnapshot } from 'valtio';
import CameraHelper from './CameraHelper';
import * as THREE from 'three';
import Boombox from './Boombox';

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state)

 


  return (
    <>
      <PerspectiveCamera
       makeDefault 
       zoom={snap.cameraZoomLevel} 
       position={[
        snap.cameraPosition.x,
        snap.cameraPosition.y,
        snap.cameraPosition.z
      ]}  
      />

      {/* OrbitControl to move the secene around */}
      <OrbitControls
      ref={orbitControlsRef}
       makeDefault  
       maxPolarAngle={2} 
       minPolarAngle={1}
      //  enableZoom={false}
       rotateSpeed={1}
       
      />
      <Background />
      {/* <ambientLight intensity={1}/> */}
      {/* <directionalLight  intensity={1} position={[100,200,500]} castShadow color={"white"}/> */}
      <Boombox />
     
      {/* <CameraHelper /> */}
    </>
  )
}


export default Experience;