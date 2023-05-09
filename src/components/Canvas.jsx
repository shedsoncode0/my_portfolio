import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { useSnapshot } from 'valtio';
import state from '../store';
import { angleToRadians } from '../utils/angle';

const CanvasScene = () => {
  const [cameraPosition, setCameraPosition] = useState({
    x: 0,
    y: 0,
    z: 10
  })
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

    if (snap.diveIn) {

    }
  })

  const diveIn = () => {
    
    setCameraPosition({z: 30})
  
}

  return (
    <Canvas
      ref={canvasRef}
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