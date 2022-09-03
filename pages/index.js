import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../src/components/layout';

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
  }, [router]);

  return ( 
    <Layout>
      <div className='page w-full h-full lg:px-8 px-5 lg:pt-8 pt-5'>
        <h2>Front-end Developer</h2>
      </div>
    </Layout>
  )
}