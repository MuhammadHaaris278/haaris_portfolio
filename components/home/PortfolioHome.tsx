"use client"

import Image from "next/image"
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { ArrowUp, ChevronUp, ChevronDown, FileText } from "lucide-react"

import {
  portfolioNav,
  profile,
  type PortfolioResponseType,
  type PortfolioTab,
} from "@/data/portfolio"
import RichPortfolioResponse from "./RichPortfolioResponse"
import FluidCanvas from "./FluidCanvas"

type HomeMode = "landing" | "chatting" | "results"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content?: string
  responseType?: PortfolioResponseType
}

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export default function PortfolioHome() {
  const [mode, setMode] = useState<HomeMode>("landing")
  const [activeTab, setActiveTab] = useState<PortfolioTab>("me")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [navExpanded, setNavExpanded] = useState(true)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const shellClass = useMemo(() => {
    const classes = ["portfolio-shell", `is-${mode}`]
    if (messages.length > 0) classes.push("has-messages")
    if (mode === "results") classes.push("has-results")
    if (!navExpanded) classes.push("nav-collapsed")
    return classes.join(" ")
  }, [messages.length, mode, navExpanded])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isTyping])

  async function streamScriptedResponse(tab: PortfolioTab) {
    if (isTyping) return

    const navItem = portfolioNav.find((item) => item.id === tab)
    if (!navItem) return

    setMode("chatting")
    setActiveTab(tab)
    setIsTyping(true)
    setNavExpanded(false) // Auto-collapse nav when section clicked

    const userMessage: ChatMessage = {
      id: createId("section-user"),
      role: "user",
      content: navItem.prompt,
    }
    const assistantMessage: ChatMessage = {
      id: createId("section-assistant"),
      role: "assistant",
      responseType: navItem.responseType,
    }

    setMessages((prev) => [...prev, userMessage])
    await new Promise((resolve) => setTimeout(resolve, 680))
    setMessages((prev) => [...prev, assistantMessage])
    setMode("results")
    setIsTyping(false)
  }

  async function streamApiResponse(userText: string) {
    if (!userText.trim() || isTyping) return

    const userMessage: ChatMessage = {
      id: createId("free-user"),
      role: "user",
      content: userText.trim(),
    }
    const assistantId = createId("free-assistant")

    setInput("")
    setMode("chatting")
    setIsTyping(true)
    setNavExpanded(false) // Auto-collapse nav

    setMessages((prev) => [...prev, userMessage])

    try {
      const allMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content || "",
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error || "Failed to get a response")
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response stream was returned")

      const decoder = new TextDecoder()
      let fullText = ""
      let buffer = ""

      setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split("\n\n")
        buffer = events.pop() || ""

        for (const event of events) {
          const data = event
            .split("\n")
            .find((line) => line.trim().startsWith("data: "))
            ?.slice(6)
            .trim()

          if (!data || data === "[DONE]") continue

          try {
            const parsed = JSON.parse(data)
            const token = parsed.choices?.[0]?.delta?.content || ""
            if (!token) continue

            fullText += token
            setMessages((current) =>
              current.map((message) =>
                message.id === assistantId ? { ...message, content: fullText } : message
              )
            )
          } catch {
            // Ignore malformed events
          }
        }
      }

      if (!fullText.trim()) throw new Error("The AI response was empty")
    } catch (error) {
      const fallback =
        error instanceof Error && error.message
          ? error.message
          : "The chat service is unavailable right now."

      setMessages((prev) => {
        const cleaned = prev.filter((m) => m.id !== assistantId)
        return [
          ...cleaned,
          {
            id: assistantId,
            role: "assistant" as const,
            content: `${fallback}\n\nUse the section cards below for instant portfolio answers without an API key.`,
          },
        ]
      })
    } finally {
      setMode("results")
      setIsTyping(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    streamApiResponse(input)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault()
      streamApiResponse(input)
    }
  }

  function resetLanding() {
    if (isTyping) return
    setMode("landing")
    setMessages([])
    setActiveTab("me")
    setNavExpanded(true)
  }

  return (
    <main className={shellClass}>
      <FluidCanvas />

      <div className="portfolio-watermark">Haaris</div>

      <a className="portfolio-cv-button" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
        <FileText aria-hidden="true" />
        <span>CV</span>
      </a>

      <section className="portfolio-hero" aria-label="Portfolio introduction">
        <p className="portfolio-greeting">Hey, I&apos;m {profile.shortName} 👋</p>
        <h1>{profile.title}</h1>
      </section>

      <div className="portfolio-stage" aria-hidden="true">
        <div className="portfolio-avatar-halo" />
        <button
          type="button"
          className="portfolio-avatar-button"
          onClick={mode !== "landing" ? resetLanding : undefined}
          aria-label={mode !== "landing" ? "Return to home" : undefined}
          style={{ cursor: mode !== "landing" ? "pointer" : "default" }}
        >
          <Image
            className="portfolio-avatar-image"
            src="/images/memoji-face.png"
            alt=""
            width={1290}
            height={913}
            priority
            sizes="(max-width: 640px) 340px, 520px"
          />
        </button>
      </div>

      <section className="portfolio-conversation" aria-label="Chat with Haaris portfolio assistant">
        <div className="portfolio-chat-scroll">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`portfolio-message ${message.role === "user" ? "is-user" : "is-assistant"}`}
            >
              {message.role === "user" ? (
                <div className="portfolio-user-bubble">{message.content}</div>
              ) : (
                <RichPortfolioResponse type={message.responseType} markdown={message.content} />
              )}
            </article>
          ))}

          {isTyping && (
            <article className="portfolio-message is-assistant" aria-label="Assistant is typing">
              <div className="portfolio-typing-bubble">
                <TypingDots />
              </div>
            </article>
          )}
          <div ref={chatEndRef} />
        </div>
      </section>

      <div className="portfolio-controls">
        {/* Chevron toggles nav visibility in chat mode */}
        {mode !== "landing" && (
          <button
            className="portfolio-collapse"
            type="button"
            onClick={() => setNavExpanded((prev) => !prev)}
            aria-label={navExpanded ? "Collapse navigation" : "Expand navigation"}
          >
            {navExpanded ? <ChevronDown aria-hidden="true" /> : <ChevronUp aria-hidden="true" />}
          </button>
        )}

        <nav
          className={`portfolio-bottom-nav ${!navExpanded && mode !== "landing" ? "is-hidden" : ""}`}
          aria-label="Portfolio sections"
        >
          {portfolioNav.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                type="button"
                className={isActive ? "active" : ""}
                style={{ "--tab-accent": item.accent } as CSSProperties}
                onClick={() => streamScriptedResponse(item.id)}
                disabled={isTyping}
                aria-pressed={isActive}
              >
                <span className="portfolio-nav-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <form className="portfolio-input-bar" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isTyping ? "Processing..." : "Ask me anything..."}
            aria-label="Ask about Haaris"
            disabled={isTyping}
          />
          <button type="submit" disabled={!input.trim() || isTyping} aria-label="Send message">
            <ArrowUp aria-hidden="true" />
          </button>
        </form>
      </div>
    </main>
  )
}

function TypingDots() {
  return (
    <span className="portfolio-typing" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}
