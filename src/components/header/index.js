import Link from 'next/link';

export default function Header() {
  return ( 
    <div role='nav' className='nav w-full px-6 lg:px-12 xl:px-20 pt-5 md:pt-8 z-70 flex flex-row justify-between'>
      <div className='nav--logo'>
        <Link href='/'>
          <a className='uppercase text-xl sm:text-2xl'>AD</a>
        </Link>
      </div>
      <div className='nav--links'>
        <Link href='/about'><button className='nav--link-button mr-4 px-2 rounded'>About</button></Link>
        <Link href='/projects'><button className='nav--link-button mr-4 px-2 rounded'>Projects</button></Link>
        <Link href='Alessandra_Davila_Resume.pdf'><button className='nav--link-button px-2 rounded'>Resume</button></Link>
        <Link href='https://blog.aledavila.com/'><button className='nav--link-button px-2 rounded'>Resources</button></Link>
      </div>
    </div>
  )
}
