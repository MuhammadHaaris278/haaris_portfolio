"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4 w-full max-w-2xl"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />

        {/* Experiences */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-background flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>

              {/* Card */}
              <Card className="bg-white/8 border-white/15 p-3 hover:bg-white/12 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm">{exp.title}</h4>
                    <p className="text-xs text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {exp.description}
                </p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-white/10 hover:bg-white/20 border-white/15 h-6"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
