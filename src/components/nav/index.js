import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import cx from "classnames";
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
  const navRef = useRef(null);
  const menuRef = useRef(null);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setShowMenu(false);
      // if (menuRef.current) {
      //   const toggleButton = menuRef.current.querySelector('button');
      //   if (toggleButton) {
      //     setTimeout(() => {
      //       toggleButton.focus();
      //     }, 0);
      //   }
      // }
    }
  }
  

  function handleMenuBlur(event) {
    if (!navRef.current.contains(event.relatedTarget)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    if (showMenu) {
      navRef.current.querySelector("a").focus();
    }
  }, [showMenu]);

  return (
    <nav className="mobile--nav flex" ref={navRef}>
      <button
        className="nav--toggle md:hidden"
        aria-label={showMenu ? "Close menu" : "Open menu"}
        aria-expanded={showMenu}
        aria-controls="nav-menu"
        onClick={toggleMenu}
      >
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <ul
        id="nav-menu"
        className={`menu--list ${showMenu ? 'menu--list__active' : ''}`}
        onKeyDown={handleKeyDown}
        onBlur={handleMenuBlur}
        ref={menuRef}
        role="menubar"
        aria-label="Main Navigation"
      >
        <li role='none'>
          <Link href='/about' role="menuitem" className='nav--link md:mr-4 md:px-2 md:rounded'>About</Link>
        </li>
        <li role='none'>
        <Link href='/projects' role="menuitem" className='nav--link md:mr-4 md:px-2 md:rounded'>Projects</Link>
        </li>
        <li role='none'>
          <Link href='Alessandra_Davila_Resume.pdf' role="menuitem" className='nav--link md:mr-4 md:px-2 md:rounded'>Resume</Link>
        </li>
        <li role='none'>
          <Link href='https://resources.aledavila.com/' role="menuitem" className='nav--link md:mr-4 md:px-2 md:rounded'>Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

