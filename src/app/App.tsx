import { useState } from 'react'
import useColorMode from '../hooks/useColorMode'

export function App() {

  const [colorMode, setColorMode]= useColorMode();

  return (
    <div className='w-screen h-screen bg-slate-400 dark:bg-slate-700 '>
      <h1 className="text-3xl font-bold ">
        Hello &#129303;
      </h1>
      <button className='bg-orange-400'
      onClick={()=>setColorMode(colorMode==='light'?'dark':'light')}>
        Change color
      </button>
    </div>
  )
}

