import { useState } from 'react'
import {CanvasScene} from './components'
import { useSnapshot } from 'valtio'
import state from './store'

function App() {
  const snap = useSnapshot(state);

  const onChecked = () => {
    if (snap.darkMode) {
      state.darkMode = false
    } else state.darkMode = true;
  }

  const diveIn = () => {
      let inter = setInterval(() => {
        state.cameraZoomLevel += 0.03;
        if (state.cameraZoomLevel >= 4) {
          state.cameraZoomLevel = 1;
          state.intro = false;
          clearInterval(inter)
        }
      }, 30);
  }

  return (
    <main className='w-screen h-screen relative'>

      {/* The dark mode toggle button */}
      <div className='absolute right-5 top-5 z-50'>
        <label className="switch absolute">
          <input type="checkbox" onChange={() => onChecked()} checked={state.darkMode}/>
          <span className="slider"></span>
        </label>
      </div>

      {/* The 3D canvas secene */}
      <CanvasScene />

      {/* The Dive in button */}
      {snap.intro && (
        <div className='w-full flex justify-center'>
          <button onClick={diveIn} className='button absolute bottom-10'>
            Dive in
          </button>
        </div>
      )}
    </main>
  )
}

export default App
 