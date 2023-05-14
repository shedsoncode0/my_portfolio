import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { angleToRadians } from '../utils/angle';
import { Bounce, Power3 } from 'gsap/all';
import CameraHelper from './CameraHelper';
import Background from './Background';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import state from '../store';
import Boombox from './Box';
import { gsap } from 'gsap';

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state);

  const boomboxRef = useRef(null);
  const cameraRef = useRef(null);

  const boombox = boomboxRef.current;
  const camera = cameraRef.current;

  const tl = gsap.timeline();
  gsap.registerPlugin(Bounce, Power3);

  useEffect(() => {
    if (boombox) {
      // console.log(boomboxRef.current)
      gsap.fromTo(
        boombox.position,
        {
          y: 10,
          duration: 1,
        },
        {
          y: 0,
          duration: 3,
          ease: Bounce.easeOut,
        }
      );
    }
    if (camera) {
      tl.to(camera.position, {
        // Timeline 1
        z: 10,
        duration: 2,
        ease: Power3.easeIn,
      });
      tl.to(camera.position, {
        // Timeline 2
        z: 6,
        duration: 1,
        ease: Power3.easeInOut,
      });
      tl.to(camera.position, {
        // Timeline 3
        y: 3,
        duration: 1,
        ease: Power3.easeInOut,
        onComplete: () => {
          state.startBoomboxAnimation = true;
        },
      });
    }
    state.cameraPosition.z = 9;
  }, [boombox]);

  const zoomInAnimation = () => {
    gsap.to(camera.position, {
      y: 0,
      duration: 3,
    });

    tl.to(boombox.position, {
      y: -0.5,
      duration: 2,
      delay: 3,
      ease: Power3.easeOut,
    });
    tl.to(boombox.position, {
      x: 0.8,
      duration: 2,
      ease: Power3.easeOut,
    });
    tl.to(camera.position, {
      z: 0.1,
      duration: 4,
      ease: Power3.easeOut,
    });
  };

  const clickOnBoomboxCd = () => {
    zoomInAnimation();
  };

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        position={[
          snap.cameraPosition.x,
          snap.cameraPosition.y,
          snap.cameraPosition.z,
        ]}
      />

      {/* OrbitControl to move the secene around */}
      <OrbitControls
        ref={orbitControlsRef}
        makeDefault
        enablePan={false}
        enableRotate={false}
        //  enableZoom={false}
        rotateSpeed={1}
      />
      {/* <Background /> */}
      {/* <ambientLight intensity={0.5}/> */}
      {/* <directionalLight  intensity={1} position={[0,200,300]} castShadow={true} color={"white"}/> */}

      {/* <Center> */}
      <Boombox clickOnBoomboxCd={clickOnBoomboxCd} boomboxRef={boomboxRef} />
      {/* </Center> */}
      {/* <mesh receiveShadow castShadow={true} position={[0,-10,0]} rotation={[0,0,0]}>
          <cylinderGeometry args={[0.8,0.8,20]}/>
          <meshStandardMaterial color={"white"} roughness={0} />
        </mesh> */}

      {/* <CameraHelper /> */}
    </>
  );
};

export default Experience;
