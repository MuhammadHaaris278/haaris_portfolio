"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Code2, Briefcase, Target } from "lucide-react";

interface SuggestedPromptsProps {
  onPromptSelect: (prompt: string) => void;
}

const suggestedPrompts = [
  {
    icon: Briefcase,
    title: "Tell me about your experience",
    prompt: "What is your professional experience and current role?",
  },
  {
    icon: Code2,
    title: "Show your projects",
    prompt: "What are some of your notable projects and what technologies did you use?",
  },
  {
    icon: Sparkles,
    title: "AI & ML expertise",
    prompt: "What is your expertise in AI and machine learning?",
  },
  {
    icon: Target,
    title: "How can you help?",
    prompt: "What services can you offer and how can you help with AI/ML and web development projects?",
  },
];

export default function SuggestedPrompts({
  onPromptSelect,
}: SuggestedPromptsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
      {suggestedPrompts.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              onClick={() => onPromptSelect(item.prompt)}
              className="w-full h-full p-4 text-left border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 justify-start gap-3 group transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {item.prompt}
                </div>
              </div>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
