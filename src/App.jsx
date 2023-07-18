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
      <CanvasScene />
    </main>
  );
}

export default App;
