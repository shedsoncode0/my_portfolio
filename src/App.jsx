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

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(boxRef.current, {x: 100, duration: 1});
tl.to(boxRef.current, {y: 50, duration: 1});
tl.to(boxRef.current, {opacity: 0, duration: 1});

tl.pause();
tl.resume();
  }, [])

  return (
    <main className='w-screen h-screen relative'>

      {/* The 3D canvas secene */}
      {/* <CanvasScene /> */}

      <div ref={boxRef} className='w-20 h-20 rounded-lg bg-blue-900'>
        Hello
      </div>

    </main>
  )
}

export default App
 