import { useState } from 'react'
import {Canvas} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Canvas />
    </main>
  )
}

export default App
 