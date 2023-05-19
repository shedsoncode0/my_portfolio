/** @format */

import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Bounce, Power3, Power4 } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { angleToRadians } from "../utils/angle";
import CameraHelper from "./CameraHelper";
import Background from "./Background";
import { useSnapshot } from "valtio";
import TestCity from "./Test_city";
import * as THREE from "three";
import state from "../store";
import Boombox from "./Box";
import { gsap } from "gsap";
import {
  boomboxBounce,
  boomboxCameraBounceZoomAnimation,
  boomboxZoomAnimation,
} from "../utils/animations";

import {
  Controls,
  setCameraToCityView,
  setModelAndCameraToMobileViwe,
  setModelAndCameraToNormalView,
} from "../utils";
import Jeep from "./Jeep";
import { RigidBody } from "@react-three/rapier";
import Character from "./Character";

const Experience = ({ orbitControlsRef }) => {
  const [boomboxScale, setBoomboxScale] = useState(1);
  // valtio data
  const snap = useSnapshot(state);

  // Window size "width"
  let windowsWidth;

  // Element Refrence
  const boomboxRef = useRef(null);
  const cameraRef = useRef(null);

  // Resize the screen based on the phone size
  window.addEventListener("resize", (e) => {});

  // Ref objects
  const boombox = boomboxRef.current;
  const camera = cameraRef.current;

  // Gsap
  gsap.registerPlugin(Bounce);

  // useFrame hook
  useFrame(() => {
    windowsWidth = window.innerWidth;

    // Resizeing the screen to make it responsive
    if (camera) {
      if (windowsWidth < snap.deviceSize.mobile_phone) {
        if (state.intro) {
          setBoomboxScale(0.6);
        }
      } else {
        setBoomboxScale(1);
      }
    }
  });

  // Animation for boombox bounce and camera bounce zoom
  useEffect(() => {
    // if (boombox) boomboxBounce(boombox);
    // if (camera) boomboxCameraBounceZoomAnimation(state.cameraPosition);
    state.cameraPosition.z = 6;
  }, [boombox]);

  // Click event for the CD
  if (state.diveIn) {
    boomboxZoomAnimation(boombox, state.cameraPosition);
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
        color="white"
      />

      {/* Main Character */}
      <Character />

      <TestCity
        position={[
          snap.city.position.x,
          snap.city.position.y,
          snap.city.position.z,
        ]}
        castShadow
        receiveShadow
      />
      {/* <Boombox scale={boomboxScale} boomboxRef={boomboxRef} /> */}
      {/* </Center> */}

      {/* <CameraHelper cameraP={state.cameraPosition} /> */}
    </>
  );
};

export default Experience;
