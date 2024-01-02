import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import AllBooks from './AllBooks';

function Home() {
  const [query, setQuery] = useState('');
  return (
    <>
      <h1 className="text-5xl text-primary font-bold text-center headline lg:pb-10">
        Books Catelog
      </h1>
      <div className="flex">
        <div className="md:basis-1/4  w-full">
          <Sidebar setQuery={setQuery}></Sidebar>
        </div>

        <div className="md:basis-3/4  w-full">
          <AllBooks query={query}></AllBooks>
        </div>
      </div>
    </>
  );
}

export default Home;
