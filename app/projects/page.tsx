import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Urdu Poetry Generator",
    description: "LSTM-based poetry generator with a Streamlit UI. Generates poetry on different topics",
    tags: ["AI", "LSTM", "Streamlit", "NLP"],
    github: "https://github.com/MuhammadHaaris278/urdu-poetry-generator",
    demo: null,
  },
  {
    id: 2,
    title: "AI Summarizer",
    description: "Uses Whisper AI & Sumy for summarization of text, speech, and documents.",
    tags: ["Whisper AI", "Sumy", "NLP", "Python"],
    github: "https://github.com/MuhammadHaaris278/smart-ai-summarizer",
    demo: null,
  },
  {
    id: 3,
    title: "Pseudocode to Code Generator",
    description: "AI model fine tuned to generate C++ code from pseudocode. Used Llama for this purpose",
    tags: ["AI", "NLP", "C++", "Code Generation"],
    github: "https://github.com/MuhammadHaaris278/Psuedocodetocode",
    demo: "https://huggingface.co/spaces/MuhammadHaaris278/Riddle_generator_trained",
  },
  {
    id: 4,
    title: "Riddle Generator",
    description: "Math riddle generator trained on problem-solving datasets.",
    tags: ["AI", "Math", "NLP", "Python"],
    github: null,
    demo: "https://huggingface.co/spaces/MuhammadHaaris278/Riddle_generator_trained",
  },
  {
    id: 5,
    title: "Math Meme Correction",
    description: "Llama model fine tuned on riddles dataset to solve math riddles ",
    tags: ["AI", "Math", "Generative AI", "Python"],
    github: null,
    demo: "https://huggingface.co/spaces/MuhammadHaaris278/Math_Meme_Correction",
  },
  {
    id: 6,
    title: "AutoPartBazaar",
    description: "A 3D car spare parts visualization using Next.js & Three.js.",
    tags: ["Next.js", "Three.js", "3D", "WebGL"],
    github: "https://github.com/abubakarO1/AutoPartBazaar",
    demo: null,
  },
  {
    id: 7,
    title: "Paqzy",
    description: "A static e-commerce site using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    github: "https://github.com/mustafaBaiig/Paqzy",
    demo: null,
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing skills and projects in AI and Web Development.",
    tags: ["Next.js", "Tailwind", "React", "Responsive Design"],
    github: "https://github.com/MuhammadHaaris278/portfolio_website",
    demo: null,
  },
  {
    id: 9,
     title: "Old Portfolio Website",
    description: "Personal portfolio website showcasing skills, made as a project for Web Development Course.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/MuhammadHaaris278/Portfolio",
    demo: "https://muhammadhaaris278.github.io/Portfolio/",
  },
  {
    id: 10,
    title: "Notepad with Huffman Encoding",
    description: "A text compression tool. Made for Data Structures project",
    tags: ["C++", "Huffman Encoding", "Data Compression", "Algorithms"],
    github: "https://github.com/MuhammadHaaris278/NotePad-main",
    demo: null,
  },
  {
    id: 11,
    title: "Covid Vaccine Management System",
    description: "OOP-based vaccine scheduling system.",
    tags: ["OOP", "C++", "Data Structures", "Algorithms"],
    github: "https://github.com/MuhammadHaaris278/COVID-19-Vaccine-Process-Management-System-main",
    demo: null,
  },
  {
    id: 12,
    title: "Python Chatbot",
    description: "An NLP-based chatbot using NLTK and spaCy for intent recognition.",
    tags: ["Python", "NLP", "Chatbot", "NLTK"],
    github: "https://github.com/MuhammadHaaris278/PythonChatbot",
    demo: null,
  },
  {
    id: 13,
    title: "Stock Portfolio Tracker",
    description: "A Tkinter-based GUI to manage and track stock investments with real-time price updates.",
    tags: ["Python", "Tkinter", "Finance", "API"],
    github: "https://github.com/MuhammadHaaris278/StockPortfolioTracker",
    demo: null,
  },
  {
    id: 14,
    title: "Hangman Game",
    description: "A classic Hangman game with a Tkinter-based GUI and interactive hints.",
    tags: ["Python", "Tkinter", "Game Development"],
    github: "https://github.com/MuhammadHaaris278/HangmanGame_Python",
    demo: null,
  },
  {
    id: 15,
    title: "Ticon Management System",
    description: "A Windows Forms application integrated with an Oracle backend for data management.",
    tags: ["C#", "Windows Forms", "Oracle", "Database"],
    github: "https://github.com/MuhammadHaaris278/Ticon-Management-system---Data-Base-main",
    demo: null,
  },
  {
    id: 16,
    title: "Potion Explosion Game",
    description: "A digital adaptation of the Potion Explosion board game for Ubuntu with system-level programming.",
    tags: ["C", "Game Development", "Ubuntu"],
    github: "https://github.com/MuhammadHaaris278/Potion-Explosion-Game---Operating-System-main",
    demo: null,
  },
   {
    id: 17,
    title: "SynChat Web App",
    description: "Real-time chat application. Made for Computer Network project",
    tags: ["React", "Firebase", "WebSockets", "Real-time"],
    github: "https://github.com/mrQur3Sh1/SynChat-App",
    demo: null,
  },
  {
    id: 18,
    title: "Snake Game in Assembly",
    description: "A classic Snake game built in Assembly language.",
    tags: ["Assembly", "Game Development"],
    github: "https://github.com/MuhammadHaaris278/Snake-Game-main",
    demo: null,
  }
]


export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in AI model development, web applications, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border/50"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                    {project.title.includes("AI") || project.title.includes("Generator") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
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
                    ) : project.title.includes("3D") || project.title.includes("Visualization") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
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
                    ) : project.title.includes("Chat") || project.title.includes("SynChat") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    ) : project.title.includes("E-commerce") || project.title.includes("Paqzy") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    ) : project.title.includes("Covid") || project.title.includes("Vaccine") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ) : project.title.includes("Notepad") || project.title.includes("Encoding") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
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
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-2 border-t border-border/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

