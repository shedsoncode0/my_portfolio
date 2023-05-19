/** @format */

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useSnapshot } from "valtio";
import state from "../store";
import { angleToRadians } from "../utils/angle";
import { Gradient } from "lamina";
import {
  KeyboardControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Controls } from "../utils";
import { useMemo } from "react";

const CanvasScene = () => {
  const canvasRef = useRef();
  const orbitControlsRef = useRef(null);
  const scroll = useScroll();
  const snap = useSnapshot(state);

  useEffect(() => {
    const canvas = canvasRef.current;
    // addEventListener("pointerup")
    // canvas.addEventListener('pointerup', () => {
    //   if (snap.darkMode) {
    //     orbitControlsRef.current.setAzimuthalAngle(
    //       angleToRadians(snap.orbitBackView)
    //     );
    //   } else {
    //     orbitControlsRef.current.setAzimuthalAngle(
    //       angleToRadians(snap.orbitFrontView)
    //     );
    //   }
    // });
  }, []);

  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas shadows ref={canvasRef} className="w-screen h-screen canvas">
        <ScrollControls damping={2} eps={20}>
          <color attach={"background"} args={[state.canvasColor]} />
          <Suspense fallback={null}>
            <Physics debug>
              <Experience orbitControlsRef={orbitControlsRef} />
            </Physics>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </KeyboardControls>
  );
};

export default CanvasScene;
