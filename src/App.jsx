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

function App() {
  const snap = useSnapshot(state);
  const boxRef = useRef(null);
  const [angle, setAngle] = useState([0, 0]);

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
