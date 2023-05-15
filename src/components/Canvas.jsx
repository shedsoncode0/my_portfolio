import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { useSnapshot } from 'valtio';
import state from '../store';
import { angleToRadians } from '../utils/angle';

const CanvasScene = () => {
  const canvasRef = useRef();
  const orbitControlsRef = useRef(null);
  const snap = useSnapshot(state);

  useEffect(() => {
    const canvas = canvasRef.current;
    // addEventListener("pointerup")
    canvas.addEventListener('pointerup', () => {
      if (snap.darkMode) {
        orbitControlsRef.current.setAzimuthalAngle(
          angleToRadians(snap.orbitBackView)
        );
      } else {
        orbitControlsRef.current.setAzimuthalAngle(
          angleToRadians(snap.orbitFrontView)
        );
      }
    });

    // When you click on the checkbox rotate the earth model
    if (!!orbitControlsRef.current) {
      if (snap.darkMode) {
        orbitControlsRef.current.setAzimuthalAngle(
          angleToRadians(snap.orbitBackView)
        );
      } else {
        orbitControlsRef.current.setAzimuthalAngle(
          angleToRadians(snap.orbitFrontView)
        );
      }
    }
  });

  return (
    <Canvas shadows ref={canvasRef} className='w-screen h-screen'>
      <color attach={'background'} args={['skyblue']} />
      <Suspense fallback={null}>
        <Experience orbitControlsRef={orbitControlsRef} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasScene;
