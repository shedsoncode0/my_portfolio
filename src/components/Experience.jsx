/** @format */

import {
  Center,
  Cloud,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  SoftShadows,
  Stars,
  useEnvironment,
  useKeyboardControls,
} from "@react-three/drei";
import { motion as m } from "framer-motion";
import { Bounce, Power3, Power4 } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { angleToRadians } from "../utils/angle";

import { CityD, Me } from "./models";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../store";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import Background from "./Background";
import { Controls, moveObjectByImpulse } from "../utils";
import Lights from "./Lights";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Experience = ({ orbitControlsRef }) => {
  // valtio data
  const snap = useSnapshot(state);

  const [animationName, setAnimationName] = useState("Idle");
  const [direction, setDirection] = useState("front");

  // Element Refrence
  const cameraRef = useRef(null);
  const characterRef = useRef(null);
  const characterModelRef = useRef(null);

  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backwardPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const shift = useKeyboardControls((state) => state[Controls.shift]);

  const ps = new THREE.Vector3();
  const cameraLookAtVector = new THREE.Vector3();
  const cameraPositionVector = new THREE.Vector3();

  // useFrame hook
  useFrame((states) => {
    switch (direction) {
      case "left":
        if (characterModelRef.current) {
          cameraLookAtVector.set(
            characterModelRef.current.parent.position.x - 300,
            characterModelRef.current.parent.position.y - 3,
            characterModelRef.current.parent.position.z - 20
          );
        }
        break;
      case "right":
        if (characterModelRef.current) {
          cameraLookAtVector.set(
            characterModelRef.current.parent.position.x + 300,
            characterModelRef.current.parent.position.y - 3,
            characterModelRef.current.parent.position.z - 20
          );
        }
        break;
      case "front":
        if (characterModelRef.current) {
          cameraLookAtVector.set(
            characterModelRef.current.parent.position.x,
            characterModelRef.current.parent.position.y - 3,
            characterModelRef.current.parent.position.z - 20
          );
        }

        break;

      default:
        break;
    }

    switch (direction) {
      case "left":
        if (characterModelRef.current) {
          ps.set(
            characterModelRef.current.parent.position.x + 1.3,
            characterModelRef.current.parent.position.y + 0.5, // 0.5
            characterModelRef.current.parent.position.z + 0.0008
          );
        }
        break;
      case "right":
        if (characterModelRef.current) {
          ps.set(
            characterModelRef.current.parent.position.x - 1.3,
            characterModelRef.current.parent.position.y + 0.5, // 0.5
            characterModelRef.current.parent.position.z - 0.0008
          );
        }
        break;
      case "front":
        if (characterModelRef.current) {
          ps.set(
            characterModelRef.current.parent.position.x,
            characterModelRef.current.parent.position.y + 0.5, // 0.5
            characterModelRef.current.parent.position.z + 1
          );
        }

        break;

      default:
        break;
    }

    if (characterModelRef.current) {
      cameraRef.current.lookAt(cameraLookAtVector);
    }

    if (cameraRef.current) {
      cameraRef.current.position.copy(ps);
    }

    if (shift) {
    }

    if (characterRef.current) {
      if (forwardPressed) {
        setAnimationName("Walking");
        moveObjectByImpulse({ object: characterRef, x: 0, y: 0, z: -0.0005 });
        characterModelRef.current.rotation.y = angleToRadians(180);
        setDirection("front");
      }
      if (backwardPressed) {
        moveObjectByImpulse({ object: characterRef, x: 0, y: 0, z: 0.0005 });
        characterModelRef.current.rotation.y = angleToRadians(0);
        setDirection("back");
      }
      if (leftPressed) {
        moveObjectByImpulse({ object: characterRef, x: -0.0005, y: 0, z: 0 });
        characterModelRef.current.rotation.y = angleToRadians(-80);
        setDirection("left");
      }
      if (rightPressed) {
        moveObjectByImpulse({ object: characterRef, x: 0.0005, y: 0, z: 0 });
        characterModelRef.current.rotation.y = angleToRadians(80);
        setDirection("right");
      }
    }
  });
  const envMap = useEnvironment({ files: "/industrial_sunset_puresky_4k.hdr" });
  return (
    <>
      <PerspectiveCamera
        fov={43}
        position={[
          snap.camera.position.x,
          snap.camera.position.y,
          snap.camera.position.z,
        ]}
        makeDefault
        ref={cameraRef}
      />
      <Lights />
      <OrbitControls
        // enableZoom={false}
        // enableRotate={false}
        // enableDamping={false}
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

      <RigidBody
        ref={characterRef}
        colliders={false}
        position={[0, -0.5, 7]}
        type="dynamic"
        canSleep={false}
        linearVelocity={[0.5, 0.5, 0.5]}
        linearDamping={3}
        lockRotations
      >
        <CuboidCollider position={[0, 0.1, 0]} args={[0.05, 0.1, 0.05]} />
        <Me animation={animationName} characterRef={characterModelRef} />
      </RigidBody>

      <RigidBody
        position={[0, 0, 0]}
        type="fixed"
        canSleep={false}
        colliders={false}
        angularDamping={1}
        linearDamping={0.3}
        lockRotations
        // enabledRotations={[false,true,false]}
      >
        <CuboidCollider
          friction={0.2}
          position={[0, -0.96, 0]}
          args={[5, 0.4, 8]}
        />
        <Center>
          <CityD rotation={[0, angleToRadians(180), 0]} scale={0.1} />
        </Center>
      </RigidBody>
      {/* <Cloud segments={20} position={[-4, -2, -25]} speed={0.2} opacity={1} /> */}
      {/* <Cloud segments={1} position={[4, 2, -15]} speed={0.2} opacity={0.5} />
      <Cloud segments={1} position={[-4, 2, -10]} speed={0.2} opacity={1} />
      <Cloud segments={1} position={[4, -2, -5]} speed={0.2} opacity={0.5} />
      <Cloud segments={1} position={[4, 2, 0]} speed={0.2} opacity={0.75} /> */}
      <Stars radius={500} depth={50} count={1000} factor={10} />
      <SoftShadows size={130} samples={20} focus={0} />

      {/* <Environment map={envMap} blur={0} /> */}
      {/* <Background /> */}
    </>
  );
};

export default Experience;
