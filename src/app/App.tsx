import { useState } from 'react';
import { Categories } from '../features/categories';
import { EmojiScreen } from '../features/emoji';
import { Footer, Header } from '../lib/components';
import { UrlCategories } from '../lib/types';

export const App = () => {
  const [category, onChange] = useState<UrlCategories>(UrlCategories.All);

  return (
    <>
      <div className='min-h-screen flex flex-col justify-between bg-background text-typography dark:bg-background-dark dark:text-typography-dark  '>
        <Header />
        <Categories onChange={onChange} />
        <EmojiScreen category={category} />
      </div>
      <Footer />
    </>

  )
}

