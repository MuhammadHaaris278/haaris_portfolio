"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { profile } from "@/data/portfolio"

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\D/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
]

export default function ContactSection() {
  return (
    <div className="section-content" style={{ paddingTop: "10px" }}>
      <div className="glass-card" style={{ borderRadius: "20px", padding: "24px", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "6px" }}>Get in Touch</h2>
        <p style={{ fontSize: "0.85rem", color: "hsl(var(--muted-foreground))", marginBottom: "20px", lineHeight: 1.6 }}>
          I&apos;m open to discussing AI products, RAG systems, automation workflows, and full-stack opportunities.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href || "#"}
                target={contact.href?.startsWith("http") ? "_blank" : undefined}
                rel={contact.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-link"
                style={{ pointerEvents: contact.href ? "auto" : "none" }}
              >
                <Icon aria-hidden="true" style={{ width: "20px", height: "20px", color: "hsl(var(--primary))" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>{contact.label}</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>{contact.value}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="glass-card" style={{ borderRadius: "20px", padding: "20px", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))" }}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </div>
  )
}
