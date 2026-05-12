"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "AI / Machine Learning", percentage: 90 },
  { name: "React / Next.js", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "Three.js / WebGL", percentage: 70 },
  { name: "Database Management", percentage: 75 },
]

export default function SkillsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <div key={index} className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">{skill.name}</h3>
            <span className="text-primary font-bold">{skill.percentage}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

