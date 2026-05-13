"use client"

import { profile } from "@/data/portfolio"

export default function MeSection() {
  return (
    <div className="section-content" style={{ paddingTop: "10px" }}>
      <div className="glass-card" style={{ borderRadius: "20px", padding: "24px", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>About Me</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "hsl(var(--muted-foreground))", marginBottom: "20px" }}>
          {profile.summary} I specialize in chatbots, assistants, RAG pipelines, and scalable AI platforms with a focus on clean architecture and production readiness.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <InfoItem label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <InfoItem label="Location" value={profile.location} />
          <InfoItem label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\D/g, "")}`} />
          <InfoItem label="GitHub" value={profile.githubLabel} href={profile.github} />
          <InfoItem label="LinkedIn" value={profile.linkedinLabel} href={profile.linkedin} />
        </div>
      </div>
    </div>
  )
}

function InfoItem({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <span style={{ fontSize: "0.5rem", lineHeight: "1.6rem", color: "hsl(var(--primary))" }}>•</span>
      <div>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, marginRight: "8px" }}>{label}:</span>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ fontSize: "0.85rem", color: "hsl(var(--primary))", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {value}
          </a>
        ) : (
          <span style={{ fontSize: "0.85rem", color: "hsl(var(--muted-foreground))" }}>{value}</span>
        )}
      </div>
    </div>
  )
}
