'use client'

import { ThemeContext, themes } from "@/contexts/ThemeContext"
import { useState, useEffect } from "react"

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [ theme, setTheme ] = useState<string>(themes.system)

 useEffect(() => {
    if (theme === "system") {
      const systemTheme = `${window?.localStorage?.getItem('theme')}`
      if (Object.values(themes).includes(theme)) setTheme(systemTheme)

      const userMediaLight = window.matchMedia('(prefers-color-scheme: light)')
      if (userMediaLight.matches) setTheme(themes.light)

      const userMediaDark = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMediaDark.matches) setTheme(themes.dark)
    }
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider