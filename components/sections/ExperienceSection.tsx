"use client"

import { education, experiences } from "@/data/portfolio"

export default function ExperienceSection() {
  return (
    <div className="section-content" style={{ paddingTop: "10px" }}>
      <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px", paddingLeft: "4px" }}>
        Work Experience
      </h2>
      {experiences.map((exp) => (
        <div key={`${exp.company}-${exp.title}`} className="experience-card" style={{ borderRadius: "20px", marginBottom: "12px", padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{exp.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "hsl(var(--muted-foreground))" }}>{exp.company}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="skill-badge" style={{ fontSize: "0.75rem", padding: "4px 12px" }}>{exp.period}</span>
              <p style={{ fontSize: "0.75rem", color: "hsl(var(--muted-foreground))", marginTop: "4px" }}>• {exp.location}</p>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}>{exp.description}</p>
        </div>
      ))}

      <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px", marginTop: "24px", paddingLeft: "4px" }}>
        Education
      </h2>
      {education.map((edu) => (
        <div key={`${edu.institution}-${edu.title}`} className="experience-card" style={{ borderRadius: "20px", marginBottom: "12px", padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{edu.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "hsl(var(--muted-foreground))" }}>{edu.institution}</p>
            </div>
            <span className="skill-badge" style={{ fontSize: "0.75rem", padding: "4px 12px" }}>{edu.period}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
