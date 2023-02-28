import { useEffect, useState } from 'react'
import { TranslatorScreen } from '../features/translator/TranslatorScreen';
import useColorMode from '../lib/hooks/useColorMode'

export function App() {

  const [colorMode, setColorMode] = useColorMode();


  return (
    <div className='w-screen h-screen bg-background text-typography dark:bg-background-dark dark:text-typography-dark  '>
      <TranslatorScreen />
      {/* <button className='bg-foreground'
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
        Change color
      </button> */}
    </div>
  )
}

