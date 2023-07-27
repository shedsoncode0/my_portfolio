/** @format */

import {
  Center,
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sky,
  Text,
  Text3D,
  useKeyboardControls,
} from "@react-three/drei";
import { motion as m } from "framer-motion";
import { Bounce, Power3, Power4 } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { angleToRadians } from "../utils/angle";

import { Billboard, CityD, Me, Pin, Platform, Zeppelin } from "./models";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../store";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { Controls, moveObjectByImpulse } from "../utils";
import Lights from "./Lights";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import Effects from "./Effects";
import EnterBuildingsPlatforms from "./EnterBuildingsPlatforms";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const LINE_NB_POINTS = 12000;

const Experience = () => {
  const { move } = useContext(AppContext);
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  // valtio data
  const snap = useSnapshot(state);

  const [animationName, setAnimationName] = useState("Idle");
  const [direction, setDirection] = useState("front");
  const [landed, setLanded] = useState("falling");

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
  const space = useKeyboardControls((state) => state[Controls.space]);
  const enter = useKeyboardControls((state) => state[Controls.enter]);

  const ps = new THREE.Vector3();
  const cameraLookAtVector = new THREE.Vector3();
  const cameraPositionVector = new THREE.Vector3();

  const locationPin = [
    { name: "Projects", position: [0, 1, 0] },
    { name: "Bio", position: [-3.3, 0.7, -6] },
    { name: "Contact", position: [-3.5, 0.2, 0.7] },
  ];

  // useFrame hook
  useFrame((_state, delta) => {
    // switch (direction) {
    //   case "left":
    //     if (characterModelRef.current) {
    //       ps.set(
    //         characterModelRef.current.parent.position.x + 1.3,
    //         characterModelRef.current.parent.position.y + 0.5, // 0.5
    //         characterModelRef.current.parent.position.z + 0.0008
    //       );
    //     }
    //     break;
    //   case "right":
    //     if (characterModelRef.current) {
    //       ps.set(
    //         characterModelRef.current.parent.position.x - 1.3,
    //         characterModelRef.current.parent.position.y + 0.5, // 0.5
    //         characterModelRef.current.parent.position.z - 0.0008
    //       );
    //     }
    //     break;
    //   case "front":
    //     if (characterModelRef.current) {
    //       ps.set(
    //         characterModelRef.current.parent.position.x,
    //         characterModelRef.current.parent.position.y + 0.5, // 0.5
    //         characterModelRef.current.parent.position.z + 1
    //       );
    //     }

    //     break;

    //   default:
    //     break;
    // }

    if (characterModelRef.current) {
      cameraLookAtVector.set(
        characterModelRef.current.parent.position.x,
        characterModelRef.current.parent.position.y - 3,
        characterModelRef.current.parent.position.z - 20
      );
    }

    if (characterModelRef.current) {
      ps.set(
        characterModelRef.current.parent.position.x,
        characterModelRef.current.parent.position.y + 0.5, // 0.5
        characterModelRef.current.parent.position.z + 1
      );
    }

    if (characterModelRef.current) {
      cameraRef.current.lookAt(cameraLookAtVector);
    }

    if (cameraRef.current) {
      cameraRef.current.position.copy(ps);
    }

    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        characterModelRef.current.rotation.x,
        characterModelRef.current.rotation.y,
        characterModelRef.current.rotation.z
      )
    );

    // cameraRef.current.quaternion.slerp(targetCameraQuaternion, 0.523 * 2);
    if (shift) {
      state.character.speed = 0.00022;
    } else {
      state.character.speed = 0.0005; //0.00017
    }

    if (space || move.jump) {
      // setAnimationName("Walking");
      moveObjectByImpulse({
        object: characterRef,
        x: 0,
        y: 0.002,
        z: 0,
      });
      characterModelRef.current.rotation.y = angleToRadians(0);
      setDirection("front");
    }

    if (forwardPressed || move.forward) {
      setAnimationName("Walking");
      moveObjectByImpulse({
        object: characterRef,
        x: 0,
        y: 0,
        z: -snap.character.speed,
      });
      characterModelRef.current.rotation.y = angleToRadians(0);
      setDirection("front");
    }
    if (backwardPressed || move.backward) {
      setAnimationName("Walking");
      moveObjectByImpulse({
        object: characterRef,
        x: 0,
        y: 0,
        z: snap.character.speed,
      });
      characterModelRef.current.rotation.y = angleToRadians(180);
      setDirection("back");
    }
    if (leftPressed || move.left) {
      moveObjectByImpulse({
        object: characterRef,
        x: -snap.character.speed,
        y: 0,
        z: 0,
      });
      characterModelRef.current.rotation.y = angleToRadians(80);
      setDirection("left");
    }
    if (rightPressed || move.right) {
      moveObjectByImpulse({
        object: characterRef,
        x: snap.character.speed,
        y: 0,
        z: 0,
      });
      characterModelRef.current.rotation.y = angleToRadians(-80);
      setDirection("right");
    }
  });

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
      {/* <Lights /> */}
      <OrbitControls
        // enableZoom={false}
        // enableRotate={false}
        // enableDamping={false}
        makeDefault
        // enablePan={false}
        rotateSpeed={1}
      />
      <Sky
        azimuth={1}
        turbidity={50}
        rayleigh={0.5}
        inclination={0.6}
        distance={50}
      />

      <RigidBody
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "planeLand") {
            setLanded("landed");
            state.introAnimationDone = true;
            state.planeLandPosition.y = -1;
          }

          if (other.rigidBodyObject.name === "projectPlatform") {
            if (enter) {
              alert("dj");
            }

            state.showPopup = { name: "projects", show: true };
          }

          if (other.rigidBodyObject.name === "contactPlatform") {
            state.showPopup = { name: "contact", show: true };
          }
        }}
        onCollisionExit={({ other }) => {
          if (
            other.rigidBodyObject.name === "projectPlatform" ||
            other.rigidBodyObject.name === "contactPlatform"
          ) {
            state.showPopup = { name: "", show: false };
          }
        }}
        ref={characterRef}
        colliders={false}
        position={[0, 14, 7]}
        type="dynamic"
        canSleep={false}
        restitution={0.1}
        // friction={0}
        // linearVelocity={[0.5, 0.5, 0.5]}
        linearDamping={1}
        lockRotations
      >
        <CuboidCollider position={[0, 0.1, 0]} args={[0.05, 0.1, 0.05]} />
        <Me
          setLanded={setLanded}
          landed={landed}
          animation={animationName}
          characterRef={characterModelRef}
        />
      </RigidBody>
      <RigidBody
        position={[
          snap.planeLandPosition.x,
          snap.planeLandPosition.y,
          snap.planeLandPosition.z,
        ]}
        rotation={[angleToRadians(-90), 0, 0]}
        type="fixed"
        canSleep={false}
        linearDamping={5}
        lockRotations
        name="planeLand"
      >
        <Plane args={[1, 0.4, 1]}>
          <meshStandardMaterial opacity={0.0} transparent={true} />
        </Plane>
      </RigidBody>

      <group
        scale={0.1}
        position={[0, -0.5, 0.1]}
        rotation={[0, angleToRadians(-90), 0]}
      >
        <Billboard />
      </group>

      {/* <Line
        points={linePoints}
        color={"white"}
        opacity={0.7}
        transparent
        lineWidth={16}
      /> */}

      <RigidBody
        name="ground"
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
          // friction={0.2}
          position={[0, -0.96, 0]}
          args={[5, 0.4, 8]}
        />
        <Center>
          <CityD rotation={[0, angleToRadians(180), 0]} scale={0.1} />
        </Center>
      </RigidBody>

      <EnterBuildingsPlatforms />

      <Zeppelin />

      {locationPin.map((location) => (
        <Float
          scale={0.5}
          rotationIntensity={1}
          speed={3}
          position={location.position}
        >
          <Pin />
          <Text3D
            position={[-0.6, 0.6, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.008}
            bevelThickness={0.005}
            lineHeight={0.5}
            letterSpacing={0.01}
            size={0.2}
            height={0.05}
            font="/fonts/Inter_Bold.json"
          >
            {location.name}
            <meshStandardMaterial color="white" />
          </Text3D>
        </Float>
      ))}
      <Effects />
    </>
  );
};

export default Experience;
