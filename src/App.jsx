/** @format */

import { useEffect, useRef, useState } from "react";
import { CanvasScene } from "./components";
import { useSnapshot } from "valtio";
import state from "./store";
import { gsap } from "gsap";
import MouseAnimation from "./components/MouseAnimation";
import { Joystick } from "react-joystick-component";

function App() {
  const snap = useSnapshot(state);
  const boxRef = useRef(null);
  const [angle, setAngle] = useState([0, 0]);

  const onMove = (stick) => {
    setAngle([stick.x, stick.y]);
  };
  const onStop = (stick) => {
    setAngle([0, 0]);
  };

  const tl = gsap.timeline();

  return (
    <main className="w-screen h-screen relative">
      <CanvasScene />
      <div className="w-screen flex justify-center h-screen fixed top-0 p-10 left-0 bg-black/90 backdrop-blur-sm">
        <div className="max-w-xl flex-col w-full flex justify-center items-center gap-10">
          <div className="w-full text-center text-white">
            <h1 className="font-bold text-2xl">Mileekee</h1>
            <p>Fin-tech - Mobile/Web</p>
          </div>
          <div className="w-full max-w-2xl bg-slate-400 flex-1 rounded-lg "></div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <div className="w-full flex justify-between">
            <div className="p-3 rounded-md bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="p-3 rounded-md bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
