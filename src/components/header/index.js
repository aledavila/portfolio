import Link from 'next/link';

export default function Header() {
  return ( 
    <div role='nav' className='nav w-full px-6 lg:px-12 xl:px-20 pt-5 md:pt-8 z-70 flex flex-row justify-between'>
      <div className='nav--logo'>
        <Link href='/' className='home--link uppercase sm:text-2xl md:text-4xl'>
          AD.
        </Link>
      </div>
      <nav className='nav--links flex items-center'>
        <Link href='/about' className='nav--link-button mr-4 px-2 rounded'>About</Link>
        <Link href='/projects' className='nav--link-button mr-4 px-2 rounded'>Projects</Link>
        <Link href='Alessandra_Davila_Resume.pdf' className='nav--link-button mr-4 px-2 rounded'>Resume</Link>
        <Link href='https://blog.aledavila.com/' className='nav--link-button px-2 rounded'>Resources</Link>
      </nav>
    </div>
  )
}
