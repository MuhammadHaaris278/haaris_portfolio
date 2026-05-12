"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:muhammad.haaris2003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    muhammad.haaris2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/haaris278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/haaris278
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a
                    href="https://github.com/MuhammadHaaris278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/MuhammadHaaris278
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/haaris278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/MuhammadHaaris278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:muhammad.haaris2003@gmail.com"
                  className="p-3 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

           <form 
  action="https://formsubmit.co/muhammad.haaris2003@gmail.com" 
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" />
  
  <div>
    <label htmlFor="name" className="block mb-2 font-medium">
      Name
    </label>
    <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your name"
      required
    />
  </div>

  <div>
    <label htmlFor="email" className="block mb-2 font-medium">
      Email
    </label>
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your email"
      required
    />
  </div>

  <div>
    <label htmlFor="message" className="block mb-2 font-medium">
      Message
    </label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your message"
      rows={6}
      required
    />
  </div>

  <Button type="submit" className="w-full">
    Send Message
    <Send className="ml-2 w-4 h-4" />
  </Button>
</form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

