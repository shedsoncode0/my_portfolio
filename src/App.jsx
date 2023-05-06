import { useState } from 'react'
import {CanvasScene} from './components'

function App() {

  return (
    <main className='w-screen h-screen relative'>
      <div className='absolute right-5 top-5 z-50'>
        <label className="switch absolute">
          <input type="checkbox"/>
          <span className="slider"></span>
        </label>
      </div>
      <CanvasScene />
      <div className='w-full flex justify-center'>
        <button className='button absolute bottom-10'>
          Explore
        </button>
      </div>
    </main>
  )
}

export default App
 