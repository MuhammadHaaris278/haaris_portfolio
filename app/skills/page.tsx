"use client"

import { motion } from "framer-motion"
import {
  Code,
  Brain,
  Database,
  Globe,
  Server,
  GitBranch,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  Puzzle,
} from "lucide-react"

const technicalSkills = [
  {
    category: "Generative AI / NLP",
    skills: [
      "Google Colab",
      "Hugging Face",
      "Streamlit",
      "Whisper AI",
      "Zonos",
      "Transformers",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Preprocessing",
      "ML Model Training",
      "Fine-Tuning",
    ],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Next.js", "Three.js", "Tailwind CSS"],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Java", "C++", "Python"],
    icon: <Server className="w-6 h-6" />,
  },
  {
    category: "Database",
    skills: ["SQL", "MongoDB", "Firebase"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    icon: <GitBranch className="w-6 h-6" />,
  },
]

const softSkills = [
  {
    skill: "Communication",
    description: "Effective verbal and written communication skills.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    skill: "Leadership",
    description: "Experience leading teams and projects to successful completion.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    skill: "Problem Solving",
    description: "Analytical approach to solving complex problems.",
    icon: <Puzzle className="w-6 h-6" />,
  },
  {
    skill: "Creativity",
    description: "Innovative thinking and creative approach to challenges.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    skill: "Pressure Resilience",
    description: "Ability to work effectively under pressure and tight deadlines.",
    icon: <Clock className="w-6 h-6" />,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                variants={item}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Users className="w-8 h-8 text-primary" />
            Soft Skills
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                variants={item}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.skill}</h3>
                </div>

                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  )
}

