import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Haaris - AI Engineer & Full-Stack Developer",
  description:
    "Meet Muhammad Haaris - AI Engineer specializing in LLMs, RAG systems, and full-stack web development. Explore his projects and expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-background">
      <head></head>
      <body className={`${inter.className} dark`}>
        {children}
      </body>
    </html>
  )
}
