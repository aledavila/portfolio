import Link from 'next/link';

export default function Header() {
  return ( 
    <div className='nav w-full lg:px-8 px-5 lg:pt-8 pt-5 z-70'>
      <Link href="/">
          <a className='home uppercase text-xl'>Ale Davila</a>
        </Link>
    </div>
  )
}