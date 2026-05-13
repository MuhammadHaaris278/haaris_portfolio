"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Markdown from "react-markdown"

import {
  education,
  experiences,
  profile,
  projects,
  skillCategories,
  type PortfolioResponseType,
} from "@/data/portfolio"

type RichPortfolioResponseProps = {
  type?: PortfolioResponseType
  markdown?: string
}

export default function RichPortfolioResponse({ type, markdown }: RichPortfolioResponseProps) {
  if (!type) {
    return (
      <div className="portfolio-rich-panel markdown-panel">
        <Markdown>{markdown || ""}</Markdown>
      </div>
    )
  }

  if (type === "projects") return <ProjectsPanel />
  if (type === "skills") return <SkillsPanel />
  if (type === "experience") return <ExperiencePanel />
  if (type === "contact") return <ContactPanel />
  return <MePanel />
}

function MePanel() {
  return (
    <section className="portfolio-rich-panel">
      <PanelTitle title="About Me" />
      <p className="portfolio-panel-copy">
        {profile.summary} I specialize in LLM-backed products, retrieval systems, assistants,
        automation workflows, and full-stack AI platforms that are designed to reach production.
      </p>
      <div className="portfolio-meta-grid">
        <InfoPill label="Role" value={profile.role} />
        <InfoPill label="Location" value="Lahore, Pakistan" />
        <InfoPill label="Focus" value="LLMs, RAG, AI products" />
      </div>
    </section>
  )
}

function ProjectsPanel() {
  return (
    <section className="portfolio-rich-panel">
      <PanelTitle title="Projects" />
      <div className="portfolio-project-list">
        {projects.map((project, index) => (
          <article key={project.title} className={`portfolio-project-card ${index === 0 ? "featured" : ""}`}>
            <div className="portfolio-project-header">
              <div>
                <h3>{project.title}</h3>
                <div className="portfolio-chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SkillsPanel() {
  return (
    <section className="portfolio-rich-panel">
      <PanelTitle title="Skills" />
      <div className="portfolio-skill-groups">
        {skillCategories.map((category) => (
          <div key={category.title} className="portfolio-skill-group">
            <h3>{category.title}</h3>
            <div className="portfolio-chip-row">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="portfolio-panel-copy">
        I work across applied AI, model integration, backend APIs, modern frontend delivery,
        and the database layer needed to ship useful AI products.
      </p>
    </section>
  )
}

function ExperiencePanel() {
  return (
    <section className="portfolio-rich-panel">
      <PanelTitle title="Experience" />
      <div className="portfolio-timeline">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.title}`} className="portfolio-timeline-card">
            <div>
              <h3>{item.title}</h3>
              <p>{item.company}</p>
            </div>
            <span>{item.period}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="portfolio-education-row">
        {education.map((item) => (
          <InfoPill key={`${item.institution}-${item.title}`} label={item.title} value={`${item.institution} · ${item.period}`} />
        ))}
      </div>
    </section>
  )
}

function ContactPanel() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\D/g, "")}` },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  ]

  return (
    <section className="portfolio-rich-panel">
      <PanelTitle title="Contact" />
      <div className="portfolio-contact-grid">
        {links.map((link) => {
          const Icon = link.icon
          const content = (
            <>
              <Icon aria-hidden="true" />
              <span>
                <small>{link.label}</small>
                {link.value}
              </span>
            </>
          )

          return link.href ? (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {content}
            </a>
          ) : (
            <div key={link.label}>{content}</div>
          )
        })}
      </div>
    </section>
  )
}

function PanelTitle({ title }: { title: string }) {
  return (
    <div className="portfolio-panel-title">
      <h2>{title}</h2>
    </div>
  )
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="portfolio-info-pill">
      <small>{label}</small>
      <span>{value}</span>
    </div>
  )
}
