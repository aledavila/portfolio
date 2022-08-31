import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Header from '../src/components/header';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode ===  65) {
        router.push('/projects')
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return ( 
    <div className='flex flex-col items-start justify-start w-full h-screen'>
      <Header />
      <p>Thats it. That's my portfolio.</p>
    </div>
  )
}