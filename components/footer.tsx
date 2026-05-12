import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Muhammad Haaris</h3>
            <p className="text-muted-foreground mb-4">
              Generative AI Engineer, AI Developer, and Web Developer specializing in AI model development and
              full-stack web applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MuhammadHaaris278"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/haaris278"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhammad.haaris2003@gmail.com"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+923449444702" className="text-muted-foreground hover:text-foreground transition-colors">
                  +92-344-9444702
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+923049444702" className="text-muted-foreground hover:text-foreground transition-colors">
                  +92-304-9444702
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:muhammad.haaris2003@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  muhammad.haaris2003@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Allama Iqbal Town, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Haaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

