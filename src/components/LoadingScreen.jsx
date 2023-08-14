import { useProgress } from "@react-three/drei";
import React from "react";
import { motion as m } from "framer-motion";
// import Lottie from "react-lottie";
// import animationData from "../../public/animation.json";
import "../styles/button.css";
// import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { Bounce, Power3, Power4 } from "gsap/all";

const LoadingScreen = ({ onStarted, started }) => {
  const tl = gsap.timeline();
  const { progress } = useProgress();
  const [leave, setLeave] = useState(false);
  const buttonRef = useRef();

  // useEffect(() => {

  // },[])

  const explore = () => {
    setLeave(true);
    tl.to(buttonRef.current, { width: "44px" });
    tl.to(buttonRef.current, { y: -20 });
    tl.to(buttonRef.current, { y: 0, ease: Bounce.easeOut });
    tl.to(buttonRef.current, {
      scale: 100,
      opacity: 0,
      ease: Power3.easeInOut,
      duration: 2,
      onComplete: () => {
      },
    });
    onStarted();
  };

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  return (
    <m.div
      className={
        started
          ? "hidden"
          : "fixed z-[9999999999999999] top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center w-screen h-screen "
      }
    >
      <div>
        {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
        <div className="text-center flex justify-center items-center font-medium">
          {" "}
          {
            progress !== 100 ? (
              <h1 className=" text-white">{`%${Math.floor(progress)}`}</h1>
            ) : ( () => 
              explore()
            )
            // <m.button
            //   ref={buttonRef}
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   transition={{ duration: 1 }}
            //   className="btn relative px-4 h-11 overflow-hidden cursor-pointer bg-white rounded-full"
            //   onClick={() => {

            //   }}
            // >
            //   {!leave && "Explore"}
            // </m.button>
          }
        </div>
      </div>
    </m.div>
  );
};

export default LoadingScreen;
