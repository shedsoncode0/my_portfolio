import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import {angleToRadians} from '../utils/angle'
import { Bounce, Power3 } from 'gsap/all';
import CameraHelper from './CameraHelper';
import Background from './Background';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import state from '../store'
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
  gsap.registerPlugin(Bounce, Power3);

  useEffect(() => {
    if (boombox) {
      // console.log(boomboxRef.current)
          gsap.fromTo(boombox.position, {
        y: 10,
        duration: 1
      },
      {
        y: 0,
        duration: 3,
        ease: Bounce.easeOut,
      })
    }
    if (camera) {
      tl.to(camera.position, { // Timeline 1
        z: 10,
        duration: 2,
        ease: Power3.easeIn
      });
      tl.to(camera.position, { // Timeline 2
        z: 6,
        duration: 1,
        ease: Power3.easeInOut
      })
      tl.to(camera.position, { // Timeline 3
        y: 3,
        duration: 1,
        ease: Power3.easeInOut
      })
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
      <directionalLight  intensity={1} position={[0,200,300]} castShadow={true} color={"white"}/>
      
     
        <Boombox boomboxRef={boomboxRef}/>
        <mesh receiveShadow castShadow={true} position={[0,-10,0]} rotation={[0,0,0]}>
          <cylinderGeometry args={[0.8,0.8,20]}/>
          <meshStandardMaterial color={"pink"} roughness={0} />
        </mesh>
     
      {/* <CameraHelper /> */}
    </>
  )
}


export default Experience;