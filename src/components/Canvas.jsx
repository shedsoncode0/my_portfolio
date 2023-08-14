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
  Loader,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Controls } from "../utils";
import { useMemo } from "react";
import LoadingScreen from "./LoadingScreen";

const CanvasScene = () => {
  const canvasRef = useRef();
  const orbitControlsRef = useRef(null);
  const scroll = useScroll();
  const snap = useSnapshot(state);
  const [start, setStart] = useState(false);
  const [dpr, setDpr] = useState(1.5);

  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.shift, keys: ["Shift"] },
      { name: Controls.space, keys: ["Space"] },
      { name: Controls.enter, keys: ["Enter"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas shadows ref={canvasRef} className="w-screen h-screen canvas">
        <color attach={"background"} args={[state.canvasColor]} />
        {/* <fog attach="fog" args={["#fff4e7", 3, 18]} /> */}
        <Suspense fallback={null}>
          <Physics>
            <Experience start={start} orbitControlsRef={orbitControlsRef} />
          </Physics>
        </Suspense>
      </Canvas>
      {/* <LoadingScreen started={start} onStarted={() => setStart(true)} /> */}
      <Loader />
    </KeyboardControls>
  );
};

export default CanvasScene;
