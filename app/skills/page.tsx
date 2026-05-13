import { Brain, Code, Database, Server } from "lucide-react"

import { skillCategories } from "@/data/portfolio"

const icons = [Brain, Code, Server, Database]

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical AI engineering, machine learning, full-stack, and infrastructure skills.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = icons[index] || Code

              return (
                <article key={category.title} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-muted hover:bg-muted/80 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
