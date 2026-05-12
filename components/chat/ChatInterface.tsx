"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendIcon, Sparkles, Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import SuggestedPrompts from "./SuggestedPrompts";

export default function ChatInterface() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSuggestedPrompt = (prompt: string) => {
    const newMessages = [
      ...messages,
      { id: Math.random().toString(), role: "user" as const, content: prompt },
    ];
    const event = new Event("submit", { bubbles: true });
    Object.defineProperty(event, "target", {
      value: { elements: { namedItem: () => ({ value: prompt }) } },
      enumerable: true,
    });
    
    // Use the chat hook's internal handler
    const formData = new FormData();
    formData.append("message", prompt);
    handleSubmit({
      preventDefault: () => {},
    } as any);
  };

  if (!isInitialized) return null;

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Header */}
      <div className="border-b border-white/10 backdrop-blur-xl bg-background/80 sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsKK0GGZKODN8QLJUdTs3pOGNB5Xwm.png"
            alt="Muhammad Haaris"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold">Muhammad Haaris</h1>
            <p className="text-xs text-muted-foreground">AI Engineer & Developer</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {messages.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-96 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Hello there!</h2>
                <p className="text-muted-foreground max-w-md mb-8">
                  I&apos;m Muhammad&apos;s AI assistant. Ask me about his experience, projects, skills, or anything else you&apos;d like to know.
                </p>
                <SuggestedPrompts onPromptSelect={handleSuggestedPrompt} />
              </motion.div>
            ) : (
              <motion.div
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ChatMessage message={message} />
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-muted-foreground py-4"
                  >
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Thinking...</span>
                  </motion.div>
                )}
                <div ref={scrollRef} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-white/10 backdrop-blur-xl bg-background/80 sticky bottom-0">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 bg-white/5 border-white/10 placeholder:text-white/40 focus:bg-white/10 focus:border-white/20 transition-colors"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              {isLoading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <SendIcon className="w-4 h-4" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
