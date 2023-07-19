/** @format */

import {
  AccumulativeShadows,
  BakeShadows,
  Box,
  Center,
  Cloud,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sky,
  SoftShadows,
  Stars,
  useEnvironment,
  useHelper,
  useKeyboardControls,
  useScroll,
} from "@react-three/drei";
import { motion as m } from "framer-motion";
import { Bounce, Power3, Power4 } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { angleToRadians } from "../utils/angle";

import Me from "./models/MyCharacter";
import { Bmw, Shop, Jeep, Town, City, CityD } from "./models";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../store";
import { gsap } from "gsap";

import Character from "./Character";
import { useFrame } from "@react-three/fiber";
import Background from "./Background";
import { Controls } from "../utils";
import Lights from "./Lights";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state);

  // Element Refrence
  const cameraRef = useRef(null);
  const characterRef = useRef(null);

  const backwardPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  // useFrame hook
  useFrame((states) => {
    // state.car.position.x = carModelRef.current.parent.position.x;
    // state.car.position.y = carModelRef.current.parent.position.y;
    // state.car.position.z = carModelRef.current.parent.position.z;
    // This is the camera position with offset behind the car
    //  carCameraPosition.set(
    //   carModelRef.current.parent.position.x,
    //   carModelRef.current.parent.position.y + snap.camera.offset.y,
    //   carModelRef.current.parent.position.z + snap.camera.offset.z
    // );
    // const carLightPosition = new THREE.Vector3(
    //   carModelRef.current.parent.position.x,
    //   60,
    //   carModelRef.current.parent.position.z
    // );
    // Make the camera copy the car position
    // cameraRef.current.lookAt(
    //   carModelRef.current.parent.position.x ,
    //   carModelRef.current.parent.position.y,
    //   carModelRef.current.parent.position.z - 3
    // )
    // lightRef.current.target = carModelRef.current
    // if (cameraRef.current) {
    //   cameraRef.current.position.copy(carCameraPosition)
    //   }
    // if (forwardPressed) {
    //   moveObjectByImpulse({object: carRigidBodyRef, x: 0, y: 0, z: -10})
    // }
    // if (backwardPressed) {
    //   moveObjectByImpulse({object: carRigidBodyRef, x: 0, y: 0, z: 10})
    // }
    // if (leftPressed) {
    //   moveObjectByImpulse({object: carRigidBodyRef, x: -10, y: 0, z: 0})
    // }
    // if (rightPressed) {
    //   moveObjectByImpulse({object: carRigidBodyRef, x: 10, y: 0, z: 0})
    // }
  });
  const envMap = useEnvironment({ files: "/industrial_sunset_puresky_4k.hdr" });
  return (
    <>
      <PerspectiveCamera
        fov={43}
        position={[0, 0, 9]}
        makeDefault
        ref={cameraRef}
      />
      <Lights />
      <OrbitControls
        // enableZoom={false}
        // enableRotate={false}
        makeDefault
        enablePan={false}
        rotateSpeed={1}
      />
      <Sky
        azimuth={1}
        turbidity={10}
        rayleigh={0.5}
        inclination={0.6}
        distance={100}
      />
      <Character scale={1} position={[10, 5.55, 0]} />
      <RigidBody
        ref={characterRef}
        position={[0, 0, 0]}
        type="fixed"
        canSleep={false}
        colliders={false}
        angularDamping={1}
        linearDamping={0.3}
        lockRotations
        // enabledRotations={[false,true,false]}
      >
        <CuboidCollider position={[0, -1, 0]} args={[5, 0.4, 8]} />
        <Center>
          <CityD rotation={[0, angleToRadians(180), 0]} scale={0.1} />
        </Center>
      </RigidBody>
      <Cloud segments={1} position={[-4, -2, -25]} speed={0.2} opacity={1} />
      <Cloud segments={1} position={[4, 2, -15]} speed={0.2} opacity={0.5} />
      <Cloud segments={1} position={[-4, 2, -10]} speed={0.2} opacity={1} />
      <Cloud segments={1} position={[4, -2, -5]} speed={0.2} opacity={0.5} />
      <Cloud segments={1} position={[4, 2, 0]} speed={0.2} opacity={0.75} />
      <Stars radius={500} depth={50} count={1000} factor={10} />
      <SoftShadows size={130} samples={20} focus={0} />

      {/* <Environment map={envMap} blur={0} /> */}
      {/* <Background /> */}
    </>
  );
};

export default Experience;
