'use client'

import { ThemeContext, themes } from "@/contexts/ThemeContext"
import { useState, useEffect } from "react"

const getTheme = () => {
  return themes.dark
}

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [ theme, setTheme ] = useState(getTheme)

 useEffect(() => {
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