import Link from "next/link"
import { ArrowRight, Code, Users, Award, Briefcase, ChevronRight, Star } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProjectsPreview from "@/components/projects-preview"
import SkillsShowcase from "@/components/skills-showcase"
import CountUp from "@/components/count-up"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-purple-500/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={20} duration={2} />+
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={5} duration={2} />+
              </div>
              <p className="text-muted-foreground">AI Models Trained</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={500} duration={2} />+
              </div>
              <p className="text-muted-foreground">Github commits</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={15} duration={2} />+
              </div>
              <p className="text-muted-foreground">Tools used</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Ideas into Digital Reality</h2>
            <p className="text-muted-foreground mb-6">
              I am a versatile and results-driven engineer with expertise in Generative AI and Web Development. With a strong foundation in problem-solving and innovation, I am committed to delivering high-quality solutions across diverse domains. Continuously expanding my skill set, I am open to opportunities that leverage technology to drive meaningful impact.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Specialized Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep knowledge in AI model development, fine-tuning, and web technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Client-Focused Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicated to understanding client needs and delivering tailored solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Clean, Efficient Code</h3>
                  <p className="text-muted-foreground text-sm">
                    Writing maintainable, scalable code that follows best practices.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative pl-8 border-l border-primary/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-10 mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Code className="w-3 h-3 text-white" />
                </div>
                <div className="bg-card p-5 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">Full-Stack Developer</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">July 2024 - Aug 2024</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    MERN stack intern at NETSOL. Completed the internship to gain expertise in React.js.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-10 mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <div className="bg-card p-5 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">Computer Science Student</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2021 - 2025</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Studied Computer Science with focus on Artificial Intelligence, Machine Learning, and Web
                    Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and expertise in various technologies and tools.
            </p>
          </div>

          <SkillsShowcase />

          <div className="text-center mt-10">
            <Link href="/skills" className="inline-flex items-center gap-2 text-primary hover:underline">
              View All Skills
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my recent work in AI model development and web applications.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProjectsPreview />
      </section>

      {/* My Expertise */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in AI model development, fine-tuning, and full-stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-border/10">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Model Development</h3>
            <p className="text-muted-foreground mb-4">
              Creating and fine-tuning custom AI models for specific use cases and applications.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Natural Language Processing
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Computer Vision
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Model Fine-tuning
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-border/10">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
            <p className="text-muted-foreground mb-4">
              Building responsive, modern web applications with React, Next.js, and Node.js.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Responsive Web Design
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                API Development
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Database Integration
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-border/10">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">3D Visualization</h3>
            <p className="text-muted-foreground mb-4">
              Creating immersive 3D experiences and visualizations using Three.js and WebGL.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                Interactive 3D Models
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                WebGL Animations
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-primary" />
                </div>
                3D Data Visualization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:bg-muted transition-all"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/60"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

