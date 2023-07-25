import { useState } from "react";
import Link from 'next/link';
import DarkModeToggle from '../darkMode';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// NOTE: for desktop if adding arrow functionality to mobile nav
// function Nav() {
//   return (
//     <nav className="hidden md:flex items-center justify-between">
//       <ul className="space-x-8">
//         <li>
//           <Link href='/about' className='nav--link-button mr-4 px-2 rounded'>About</Link>
//         </li>
//         <li>
//           <Link href='/projects' className='nav--link-button mr-4 px-2 rounded'>Projects</Link>
//         </li>
//         <li>
//           <Link href='Alessandra_Davila_Resume.pdf' className='nav--link-button mr-4 px-2 rounded'>Resume</Link>
//         </li>
//         <li>
//           <Link href='https://blog.aledavila.com/' className='nav--link-button px-2 rounded'>Resources</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setShowMenu(false);
    }
  }

  return (
    <nav className="flex" aria-label='Navigation'>
      <button
        className="nav--toggle md:hidden"
        aria-label={showMenu ? "Close menu" : "Open menu"}
        aria-expanded={showMenu}
        aria-controls="nav-menu"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
      >
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <ul
        id="nav-menu"
        className={`menu--list ${showMenu ? 'menu--list__active' : ''}`}
        onKeyDown={handleKeyDown}
        role="menubar"
        aria-label="Main Navigation"
      >
        <li>
          <Link href='/about' className='nav--link md:mr-4 md:px-2 md:rounded'>About</Link>
        </li>
        <li>
          <Link href='/projects' className='nav--link md:mr-4 md:px-2 md:rounded'>Projects</Link>
        </li>
        <li>
          <a href='Alessandra_Davila_Resume.pdf' className='nav--link md:mr-4 md:px-2 md:rounded'>Resume</a>
        </li>
        <li>
          <a href='https://resources.aledavila.com/' className='nav--link md:mr-4 md:px-2 md:rounded'>Resources</a>
        </li>
        <DarkModeToggle />
      </ul>
    </nav>
  );
};

export default Nav;

