import Link from 'next/link';

export default function Header() {
  return ( 
    <div role='nav' className='nav w-full px-6 lg:px-12 xl:px-20 pt-5 md:pt-8 z-70'>
      <Link href="/">
          <a className='home uppercase text-xl'>Ale Davila</a>
        </Link>
    </div>
  )
}