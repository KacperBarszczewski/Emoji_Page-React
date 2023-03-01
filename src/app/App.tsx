import { EmojiScreen } from '../features/emoji';
import { Footer, Header } from '../lib/components';

export const App = () => {


  return (
    <div className='w-screen h-screen flex flex-col justify-between bg-background text-typography dark:bg-background-dark dark:text-typography-dark  '>
      <Header />
      <EmojiScreen/>
      <Footer />
    </div>
  )
}

