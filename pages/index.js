import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../src/components/layout';
import About from '../src/components/about';

export default function HomePage() {
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
  }, [router]);

  return ( 
    <Layout>
      <div className='page w-full h-full px-6 lg:px-12 xl:px-20 flex items-center'>
        <h1 className='home text-2xl sm:text-5xl md:text-8xl'>Alessandra Davila</h1>
      </div>
    </Layout>
  )
}