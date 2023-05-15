import Link from 'next/link';
import Nav from '../nav';

export default function Header() {
  return ( 
    <header className='w-full px-6 lg:px-12 xl:px-20 pt-5 md:pt-8 z-70 flex flex-row justify-between'>
      <div className='header--logo'>
        <Link href='/' className='home--link uppercase text-xl sm:text-2xl md:text-4xl'>
          AD.
        </Link>
      </div>
      <Nav />
    </header>
  )
}
