"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Muhammad Haaris - Generative AI & Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Haaris, a Generative AI & Web Developer specializing in AI model development, fine-tuning, and full-stack web development."
        />
      </head>
      <body className={inter.className}>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

