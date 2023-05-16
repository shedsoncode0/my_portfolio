/** @format */

import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../utils/angle";
import { Bounce, Power3, Power4 } from "gsap/all";
import CameraHelper from "./CameraHelper";
import Background from "./Background";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../store";
import Boombox from "./Box";
import { gsap } from "gsap";
import City from "./City";
import {
  boomboxBounce,
  boomboxCameraBounceZoomAnimation,
  boomboxZoomAnimation,
} from "../utils/animations";
import { setCameraToCityView } from "../utils";

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state);

  // Window size
  let WindowsSize;

  useFrame(() => {
    WindowsSize = window.innerWidth;
    if (camera) {
      if (WindowsSize < 700) {
        camera.zoom = 0.6;
      } else {
        camera.zoom = 1;
      }
    }
  });

  // useEffect(() => {
  //   setCameraToCityView(snap);
  // }, []);

  // Element Refrence
  const boomboxRef = useRef(null);
  const cameraRef = useRef(null);

  // Ref objects
  const boombox = boomboxRef.current;
  const camera = cameraRef.current;

  // Gsap
  const tl = gsap.timeline();
  gsap.registerPlugin(Bounce);

  // useEffect(() => {
  //   if (camera) {
  //     setCameraToCityView(snap);
  //     gsap.to(camera.position, {
  //       z: 40,
  //       duration: 3,
  //     });
  //   }
  // }, [camera]);

  // Animation for boombox bounce and camera bounce zoom
  useEffect(() => {
    if (boombox) boomboxBounce(boombox);
    if (camera) boomboxCameraBounceZoomAnimation(state.cameraPosition);
    state.cameraPosition.z = 9;
  }, [boombox]);

  // Animation for when you click the CD
  const zoomInAnimation = () => {
    boomboxZoomAnimation(boombox, state.cameraPosition);
  };

  // Click event for the CD
  if (state.diveIn) {
    zoomInAnimation();
  }

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
        // enableRotate={false}
        // enableZoom={false}
        rotateSpeed={1}
      />
      {/* <Background /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight
        intensity={1}
        position={[0, 200, 300]}
        castShadow={true}
        receiveShadow
        color={"white"}
      />

      {/* <Center> */}
      {/* <City castShadow receiveShadow position={[12, 0, 0]} /> */}
      <Boombox boomboxRef={boomboxRef} />
      {/* </Center> */}

      {/* <CameraHelper cameraP={camera} /> */}
    </>
  );
};

export default Experience;
