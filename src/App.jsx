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
      <div className='absolute  bottom-10 left-0 w-full flex justify-center'>
        <button className='px-4 button py-2 rounded-full font-semibold bg-white'>
          Dive in
        </button>
      </div>
    </main>
  )
}

export default App
 