"use client"

import { skillCategories } from "@/data/portfolio"

export default function SkillsSection() {
  return (
    <div className="section-content" style={{ paddingTop: "10px" }}>
      <div className="glass-card" style={{ borderRadius: "20px", padding: "24px" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "20px" }}>Skills</h2>
        {skillCategories.map((category, index) => (
          <div key={category.title} style={{ marginBottom: index < skillCategories.length - 1 ? "20px" : 0 }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "10px" }}>{category.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
