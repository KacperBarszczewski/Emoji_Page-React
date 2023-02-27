import { useState } from 'react'
import useColorMode from '../hooks/useColorMode'

export function App() {

  const [colorMode, setColorMode]= useColorMode();

  return (
    <div className='w-screen h-screen bg-background dark:bg-background-dark '>
      <h1 className="text-3xl font-bold text-typography dark:text-typography-dark">
        Hello &#129303;
      </h1>
      <button className='bg-primary'
      onClick={()=>setColorMode(colorMode==='light'?'dark':'light')}>
        Change color
      </button>
    </div>
  )
}

