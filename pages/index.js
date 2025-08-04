import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../src/components/layout';

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
      <main className='relative page w-full h-full px-6 lg:px-12 xl:px-20 flex items-center bg-light'>
        <h2 className='home achiko text-2xl sm:text-5xl md:text-8xl'>Alessandra Davila</h2>
      </main>
    </Layout>
  )
}
