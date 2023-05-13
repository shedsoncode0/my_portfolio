import { Center, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import Background from './Background';
import state from '../store'
import {angleToRadians} from '../utils/angle'
import { useSnapshot } from 'valtio';
import CameraHelper from './CameraHelper';
import * as THREE from 'three';
import Boombox from './Box';
import { gsap } from 'gsap';

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state)

  const boomboxRef = useRef(null);
  const cameraRef = useRef(null);

  const boombox = boomboxRef.current;
  const camera = cameraRef.current;

  const tl = gsap.timeline();

  useEffect(() => {
    if (boombox) {
      // console.log(boomboxRef.current)
      //     gsap.to(boombox.position, {
      //   x: 1,
      //   duration: 2
      // })
    }
    if (camera) {
      gsap.fromTo(camera.position, {y: 0, duration: 2}, {y: 20, duration: 2, ease: "power3"})
    }
    state.cameraPosition.z = 9
  })

 


  return (
    <>
      <PerspectiveCamera
       makeDefault 
       ref={cameraRef}
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
      {/* <Background /> */}
      {/* <ambientLight intensity={0.5}/> */}
      {/* <directionalLight  intensity={0.5} position={[100,200,500]} castShadow color={"yellow"}/> */}
      
      <Boombox boomboxRef={boomboxRef}/>
     
      {/* <CameraHelper /> */}
    </>
  )
}


export default Experience;