'use client'

import { useSelectedLayoutSegment } from "next/navigation"
import { useState } from "react"

export default function RootLayout({
    children,
    paralel,
    paralel2
  }: {
    children: React.ReactNode
    paralel: React.ReactNode
    paralel2: React.ReactNode
  })

  {
    const loginSegment = useSelectedLayoutSegment("paralel")
    const [paral, setParal] = useState<boolean>(false)

    return (
      <section>          
        {children}
        <span onClick={() => setParal(!paral)}>Изменить маршрут</span>
        {paral ? paralel : paralel2}
        {loginSegment}
      </section>
    )
  }