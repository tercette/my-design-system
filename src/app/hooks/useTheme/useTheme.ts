import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme as string)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
