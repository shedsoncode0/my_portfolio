/** @format */

import { useEffect, useRef, useState } from "react";
import { CanvasScene } from "./components";
import { useSnapshot } from "valtio";
import state from "./store";
import { gsap } from "gsap";
import MouseAnimation from "./components/MouseAnimation";
import { Joystick } from "react-joystick-component";
import ImageSlider from "./components/ImageSlider";
import ContactMe from "./components/ContactMe";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import MobileControl from "./components/MobileControl";
import { useControls } from "leva";

function App() {
  const { setSpeed } = useContext(AppContext);
  const { walkSpeed, runSpeed } = useControls({
    walkSpeed: { value: 0.00024, min: 0.0001, max: 0.0009 },
    runSpeed: { value: 0.0005, min: 0.00035, max: 0.005 },
  });
  const snap = useSnapshot(state);
  const boxRef = useRef(null);
  const [angle, setAngle] = useState([0, 0]);

  useEffect(() => {
    setSpeed({runSpeed, walkSpeed});
  },[runSpeed, walkSpeed]);

  return (
    <main className="w-screen h-screen relative">
      <CanvasScene />

      {snap.showPopup.name === "projects" && <ImageSlider />}
      {snap.showPopup.name === "contact" && <ContactMe />}
      {!snap.showPopup.show && <MobileControl />}
    </main>
  );
}

export default App;
