import Layout from '../src/components/layout';
import About from '../src/components/about';

export default function AboutPage() {
  return ( 
    <Layout>
      <div className='page w-full h-full px-6 lg:px-12 xl:px-20 pt-8 lg:pt-12'>
        <About />
      </div>
    </Layout>
  )
}