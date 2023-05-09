import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
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
    canvas.addEventListener("pointerup", () => {
      if (snap.darkMode) {
        orbitControlsRef.current.setAzimuthalAngle(angleToRadians(snap.orbitBackView))
      } else {
        orbitControlsRef.current.setAzimuthalAngle(angleToRadians(snap.orbitFrontView))
      }
    })

    // When you click on the checkbox rotate the earth model
    if (!!orbitControlsRef.current) {
      if (snap.darkMode) {
        orbitControlsRef.current.setAzimuthalAngle(angleToRadians(snap.orbitBackView))
      } else {
        orbitControlsRef.current.setAzimuthalAngle(angleToRadians(snap.orbitFrontView))
      }
    }
  })

  return (
    <Canvas
      ref={canvasRef}
      camera={{
        position: [0,0,10],
        fov:30
      }}
     className='w-screen h-screen'
    >
      <color attach={"background"} args={["black"]} />
      <Suspense fallback={null}>
        <Experience orbitControlsRef={orbitControlsRef} />
      </Suspense>
    </Canvas>
  )
}

export default CanvasScene;