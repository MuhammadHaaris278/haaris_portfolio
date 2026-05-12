"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Urdu Poetry Generator",
    description: "LSTM-based poetry generator with a Streamlit UI.",
    tags: ["AI", "LSTM", "Streamlit", "NLP"],
    github: "https://github.com/MuhammadHaaris278/urdu-poetry-generator",
    demo: null,
  },
  {
    id: 2,
    title: "AI Summarizer",
    description: "Uses Whisper AI & Sumy for summarization of text, speech, and documents.",
    tags: ["Whisper AI", "Sumy", "NLP", "Python"],
    github: "https://github.com/MuhammadHaaris278/ai-summarizer",
    demo: null,
  },
  {
    id: 3,
    title: "AutoPartBazaar",
    description: "A 3D car spare parts visualization using Next.js & Three.js.",
    tags: ["Next.js", "Three.js", "3D", "WebGL"],
    github: "https://github.com/MuhammadHaaris278/autopartbazaar",
    demo: "https://autopartbazaar.vercel.app",
  },
]

export default function ProjectsPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                {project.title.includes("AI") || project.title.includes("Generator") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : project.title.includes("3D") || project.title.includes("Visualization") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto pt-2 border-t border-border/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

