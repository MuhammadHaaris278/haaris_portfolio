import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { profile } from "@/data/portfolio"
import "./globals.css"

export const metadata: Metadata = {
  title: `${profile.name} - AI Portfolio`,
  description:
    "AI Engineer specializing in LLMs, RAG systems, intelligent automation, and production-ready AI products.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
