import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const CanvasScene = () => {
  return (
    <Canvas
      camera={{
        position: [0,0,10],
        fov:30
      }}
     className='w-screen h-screen'>
      
      <color attach={"background"} args={["black"]} />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  )
}

export default CanvasScene;