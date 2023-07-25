import { useEffect, useState } from 'react'
import 'react-toggle/style.css';
import { FiMoon, FiSun } from 'react-icons/fi';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(localStorage.getItem('theme') === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      className='nav--link md:mr-4 md:px-2 md:rounded'
      type="button"
      aria-label={isDark ? 'Disable dark mode' : 'Enable dark mode'}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        console.log(e);
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme
        }
      }}
      tabIndex="0"
    >
      {isDark ? <FiMoon aria-hidden='true' /> : <FiSun aria-hidden='true' />}
    </button>
  )
}

export default DarkModeToggle

