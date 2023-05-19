/** @format */

import { useEffect, useRef, useState } from "react";
import { CanvasScene } from "./components";
import { useSnapshot } from "valtio";
import state from "./store";
import { gsap } from "gsap";
import MouseAnimation from "./components/MouseAnimation";

function App() {
  const snap = useSnapshot(state);
  const boxRef = useRef(null);

  const tl = gsap.timeline();

  return (
    <main className="w-screen h-screen relative">
      {/* <MouseAnimation /> */}
      {/* The 3D canvas secene */}
      <CanvasScene />
      <div className="absolute  bottom-10 left-0 w-full flex justify-center">
        {state.button == "dive_in" ? (
          <button
            onClick={() => (state.diveIn = true)}
            className="px-4 button py-2 rounded-full font-semibold bg-white"
          >
            Dive in
          </button>
        ) : (
          ""
        )}
        {/* {state.button == "dive_out" ? (
          <button
            onClick={() => (state.diveOut = true)}
            className="px-4 button py-2 rounded-full font-semibold bg-white"
          >
            Dive out
          </button>
        ) : (
          ""
        )} */}
      </div>
    </main>
  );
}

export default App;
