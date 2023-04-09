import { useEffect, useState } from 'react'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'

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
    <div className="fixed top-4 right-4">
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleTheme()
          }
        }}
        tabIndex="0"
      >
        <span className="sr-only">
          {isDark ? 'Disable dark mode' : 'Enable dark mode'}
        </span>
        <span className="text-lg">
          {isDark ? '🌙' : '🌞'}
        </span>
      </button>
    </div>
  )
}

// function DarkModeToggle() {
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     setIsDark(localStorage.getItem('theme') === 'dark')
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = isDark ? 'light' : 'dark'
//     localStorage.setItem('theme', newTheme)
//     setIsDark(!isDark)
//     document.documentElement.classList.toggle('dark')
//   }

//   return (
//     <div className="absolute bottom-4 right-4">
//       <Toggle
//         checked={isDark}
//         icons={{
//           checked: <span className="text-md">🌙</span>,
//           unchecked: <span className="text-md">🌞</span>
//         }}
//         onChange={toggleTheme}
//       />
//     </div>
//   )
// }

export default DarkModeToggle

