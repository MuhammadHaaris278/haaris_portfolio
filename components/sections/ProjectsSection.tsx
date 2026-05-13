"use client"

import { projects } from "@/data/portfolio"

export default function ProjectsSection() {
  return (
    <div className="section-content" style={{ paddingTop: "10px" }}>
      {projects.map((project, index) => (
        <div key={project.title} className="project-card" style={{ borderRadius: "20px", marginBottom: "12px", padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "10px" }}>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>{project.title}</h3>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "8px 16px", borderRadius: "999px", background: "hsl(var(--foreground))", color: "white", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}
            >
              View Project
            </a>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
