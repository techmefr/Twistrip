import { useState } from 'react'
import Choix from "./components/Choix"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <Choix />
    </>
  )
}

export default App
