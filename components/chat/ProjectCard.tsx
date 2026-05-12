"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  year?: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  highlights,
  year,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4 w-full max-w-md"
    >
      <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/15 p-4 hover:from-white/15 hover:to-white/10 transition-all duration-300">
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-base leading-tight">{title}</h3>
              {year && (
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {year}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {highlights && highlights.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Highlights:</p>
              <ul className="text-xs space-y-1">
                {highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-muted-foreground before:content-['▸'] before:text-primary"
                  >
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-white/10 hover:bg-white/20 border-white/15"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
