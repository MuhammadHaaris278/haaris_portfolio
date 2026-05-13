import { ExternalLink } from "lucide-react"

import { projects } from "@/data/portfolio"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A focused collection of AI, RAG, automation, and full-stack work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-border/50"
            >
              <h2 className="text-xl font-bold mb-3">{project.title}</h2>
              <p className="text-muted-foreground text-sm leading-6 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
