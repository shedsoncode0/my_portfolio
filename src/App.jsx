import { useEffect, useRef, useState } from 'react'
import {CanvasScene} from './components'
import { useSnapshot } from 'valtio'
import state from './store'
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/all';

function App() {
  const snap = useSnapshot(state);
  gsap.registerPlugin(MotionPathPlugin);
  const boxRef = useRef(null);

  const tl = gsap.timeline()

  return (
    <main className='w-screen h-screen relative'>

      {/* The 3D canvas secene */}
      <CanvasScene />

    </main>
  )
}

export default App
 