"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <title>Muhammad Haaris - AI Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="Meet Muhammad Haaris - AI Engineer specializing in LLMs, RAG systems, and full-stack web development. Explore his projects and expertise."
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

