import { useState } from 'react'
import {CanvasScene} from './components'
import { useSnapshot } from 'valtio'
import state from './store'

function App() {
  const snap = useSnapshot(state);

  const onChecked = () => {
    if (state.darkMode === false) state.darkMode = true
    else state.darkMode = false;
  }

  return (
    <main className='w-screen h-screen relative'>
      <div className='absolute right-5 top-5 z-50'>
        <label className="switch absolute">
          <input type="checkbox" onChange={onChecked} checked={snap.darkMode}/>
          <span className="slider"></span>
        </label>
      </div>
      <CanvasScene />
      <div className='w-full flex justify-center'>
        <button className='button absolute bottom-10'>
          Dive in
        </button>
      </div>
    </main>
  )
}

export default App
 