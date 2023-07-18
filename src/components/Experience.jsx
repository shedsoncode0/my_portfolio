/** @format */

import {
  AccumulativeShadows,
  Box,
  Center,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  SpotLight,
  Stage,
  Text,
  useEnvironment,
  useHelper,
  useScroll,
} from "@react-three/drei";
import { motion as m } from "framer-motion";
import { Bounce, Power3, Power4 } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { angleToRadians } from "../utils/angle";

import SpaceMan from "./models/SpaceMan";
import Moon from "./models/Moon";
import Me from "./models/MyCharacter";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../store";
import { gsap } from "gsap";

import Character from "./Character";
import { useFrame } from "@react-three/fiber";

const Experience = ({ orbitControlsRef }) => {
  const [boomboxScale, setBoomboxScale] = useState(1);
  // const tl = ;
  // valtio data
  const snap = useSnapshot(state);

  // Element Refrence
  const boomboxRef = useRef(null);
  const cameraRef = useRef();
  const introTextRef = useRef(null);

  // Resize the screen based on the phone size
  window.addEventListener("resize", (e) => {});

  // Ref objects
  const boombox = boomboxRef.current;
  const camera = cameraRef.current;
  const boxRef = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useEffect(() => {
    if (camera) {
      gsap.to(camera.position, {
        z: 7,
        y: -1,
        delay: 2,
        duration: 3,
        ease: Power3.easeOut,
        onComplete: () => {
          gsap.fromTo(
            introTextRef.current,
            {
              top: "4px",
            },
            {
              top: "0px",
            }
          );
        },
      });
    }
  }, [cameraRef.current]);

  const envMap = useEnvironment({ files: "/graveyard_pathways_4k.hdr" });
  // useHelper(camera, CameraHelper);
  return (
    <>
      <PerspectiveCamera position={[0, 7, 0]} makeDefault ref={cameraRef} />
      <spotLight angle={Math.PI / 2} intensity={2} />
      <OrbitControls
        enableZoom={false}
        makeDefault
        enablePan={false}
        rotateSpeed={1}
      />
      <SpaceMan scale={0.5} position={[0, -1, 0]} />
      <Moon
        scale={0.4}
        position={[0, -5, 0]}
        rotation={[angleToRadians(90), 0, 0]}
      />
      <Text>I'm shedrach</Text>
      {/* <Environment map={envMap} blur={100} /> */}
    </>
  );
};

export default Experience;
