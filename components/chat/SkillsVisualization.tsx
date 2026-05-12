"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Brain, Server, Layout, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsVisualizationProps {
  category: string;
  skills: Skill[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  server: Server,
  layout: Layout,
  database: Database,
  wrench: Wrench,
};

export default function SkillsVisualization({
  category,
  skills,
}: SkillsVisualizationProps) {
  const Icon =
    iconMap[category.toLowerCase().split(" ")[0]] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4 w-full max-w-md"
    >
      <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/15 p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-base">{category}</h3>
        </div>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
