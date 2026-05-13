import {
  BriefcaseBusiness,
  Code2,
  Layers3,
  SmilePlus,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export type PortfolioTab = "me" | "projects" | "skills" | "experience" | "contact"
export type PortfolioResponseType = PortfolioTab

export type PortfolioNavItem = {
  id: PortfolioTab
  label: string
  prompt: string
  responseType: PortfolioResponseType
  icon: LucideIcon
  accent: string
}

export const profile = {
  name: "Muhammad Haaris",
  shortName: "Haaris",
  title: "AI Portfolio",
  role: "AI Engineer",
  location: "Lahore, Pakistan",
  email: "muhammad.haaris2003@gmail.com",
  phone: "+92-304-944-4702",
  github: "https://github.com/MuhammadHaaris278",
  githubLabel: "github.com/MuhammadHaaris278",
  linkedin: "https://linkedin.com/in/haaris278",
  linkedinLabel: "linkedin.com/in/haaris278",
  resumePath: "/MuhammadHaarisResume.pdf",
  summary:
    "AI Engineer specializing in production LLM systems, agentic workflows, and healthcare AI infrastructure. Experience building and deploying clinical RAG and NLP systems for healthcare providers with focus on reliability, low hallucination rates, scalable backend architecture, and observability.",
}

export const projects = [
  {
    title: "MedGraph AI",
    tags: ["LangGraph", "RAG", "Healthcare", "Docker"],
    description:
      "Clinical intelligence platform with hybrid retrieval and reranking pipeline that reduced response latency by ~40%. Added grounding and source verification to reduce hallucinations, and improved benchmark accuracy from 46% to production-ready performance.",
    href: "https://github.com/MuhammadHaaris278",
  },
  {
    title: "AI Clinical Scribe",
    tags: ["SciSpaCy", "FHIR R4", "NLP", "FastAPI"],
    description:
      "Medical coding engine extracting ICD-10, CPT, RxNorm, and LOINC entities from clinical documentation. Designed validation workflows to reduce false-positive CPT predictions with FHIR-compatible adapters for clinical interoperability.",
    href: "https://github.com/MuhammadHaaris278",
  },
  {
    title: "AgentGraph SQL Agent",
    tags: ["LangGraph", "Agentic AI", "SQL", "Observability"],
    description:
      "Multi-agent AI system for multi-database querying, reasoning, and execution. Added token-cost tracking and observability tooling for debugging and optimization with reusable infrastructure.",
    href: "https://github.com/MuhammadHaaris278",
  },
  {
    title: "CGM Interpreter",
    tags: ["ML", "Healthcare", "Time-Series"],
    description:
      "Time-series ML platform for continuous glucose monitor analysis and visualization, providing actionable insights for diabetes management.",
    href: "https://github.com/MuhammadHaaris278",
  },
  {
    title: "VLM Fine-Tuning",
    tags: ["BLIP-2", "CLIP", "Multimodal"],
    description:
      "Fine-tuned BLIP-2 and CLIP models for medical image captioning and multimodal understanding in clinical contexts.",
    href: "https://github.com/MuhammadHaaris278",
  },
]

export const skillCategories = [
  {
    title: "AI / ML",
    skills: ["LangChain", "LangGraph", "HuggingFace Transformers", "PyTorch", "OpenAI APIs", "Gemini APIs", "Sentence-Transformers", "Cross-Encoders", "PubMedBERT", "SciSpaCy", "MedSpaCy"],
  },
  {
    title: "RAG Systems",
    skills: ["Qdrant", "FAISS", "Hybrid Search", "BM25", "Reciprocal Rank Fusion (RRF)", "MMR Reranking"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "REST APIs", "JWT Authentication", "Async Programming"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Prometheus", "Grafana"],
  },
  {
    title: "Healthcare AI",
    skills: ["FHIR R4", "HL7", "ICD-10", "CPT", "RxNorm", "LOINC", "Clinical NER", "HIPAA Compliance"],
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript / TypeScript", "C++"],
  },
]

export const experiences = [
  {
    title: "AI Engineer",
    company: "Optikode",
    period: "Aug 2025 - Present",
    location: "Lahore, Pakistan",
    description:
      "Architected and deployed MedGraph AI, a production clinical RAG assistant. Built AI Clinical Scribe for extracting medical codes from clinical documentation. Designed fault-tolerant multi-LLM orchestration pipelines with 99%+ uptime. Implemented HIPAA-oriented audit logging and monitoring with Prometheus and Grafana.",
  },
  {
    title: "AI Engineer Intern",
    company: "Kryptomind",
    period: "Jun 2025 - Aug 2025",
    location: "Lahore, Pakistan",
    description:
      "Built RAG pipelines using OpenAI, FAISS, and Qdrant with sub-second retrieval latency on 50K+ documents. Improved retrieval precision by 22% through embedding evaluation and optimization. Developed LangGraph agents with session memory and streaming responses.",
  },
]

export const education = [
  { title: "BS Computer Science", institution: "FAST - NUCES", period: "2021 - 2025" },
  { title: "Intermediate, Pre-Engineering", institution: "Punjab College", period: "2019 - 2021" },
]

export const portfolioNav: PortfolioNavItem[] = [
  {
    id: "me",
    label: "Me",
    prompt: "Tell me about Haaris.",
    responseType: "me",
    icon: SmilePlus,
    accent: "#b4232b",
  },
  {
    id: "projects",
    label: "Projects",
    prompt: "Show me Haaris's best projects.",
    responseType: "projects",
    icon: Code2,
    accent: "#ff5c7a",
  },
  {
    id: "skills",
    label: "Skills",
    prompt: "What skills does Haaris have?",
    responseType: "skills",
    icon: Layers3,
    accent: "#ff5fc8",
  },
  {
    id: "experience",
    label: "Experience",
    prompt: "Walk me through Haaris's experience.",
    responseType: "experience",
    icon: BriefcaseBusiness,
    accent: "#00c853",
  },
  {
    id: "contact",
    label: "Contact",
    prompt: "How can I contact Haaris?",
    responseType: "contact",
    icon: UsersRound,
    accent: "#b24cff",
  },
]

export const scriptedResponses: Record<PortfolioTab, string> = {
  me: `I'm an AI Engineer from Lahore specializing in production LLM systems, agentic workflows, and healthcare AI infrastructure. I build and deploy clinical RAG and NLP systems for healthcare providers, focusing on reliability, low hallucination rates, scalable backend architecture, and observability. I'm skilled in LangGraph orchestration, hybrid retrieval systems, FastAPI services, and HIPAA-compliant AI pipelines.`,
  projects: `My key production projects include MedGraph AI — a clinical intelligence platform where I built a hybrid retrieval and reranking pipeline that reduced response latency by ~40%. I also built an AI Clinical Scribe for extracting ICD-10, CPT, RxNorm, and LOINC codes, AgentGraph SQL Agent for multi-database querying, CGM Interpreter for glucose monitoring ML, and fine-tuned BLIP-2 and CLIP models for medical image captioning.`,
  skills: `I work across AI/ML (LangChain, LangGraph, PyTorch, OpenAI/Gemini APIs), RAG systems (Qdrant, FAISS, hybrid search, RRF, MMR reranking), backend (FastAPI, PostgreSQL, Redis, async programming), DevOps (Docker, GitHub Actions CI/CD, Prometheus, Grafana), and healthcare AI (FHIR R4, HL7, ICD-10, CPT, clinical NER, HIPAA compliance).`,
  experience: `I'm currently an AI Engineer at Optikode, where I architected MedGraph AI — a production clinical RAG assistant — and built an AI Clinical Scribe with multi-LLM orchestration maintaining 99%+ uptime. Before that, I was at Kryptomind as an AI Engineer Intern, where I built RAG pipelines with sub-second retrieval on 50K+ documents and improved retrieval precision by 22%.`,
  contact: `You can reach me by email at muhammad.haaris2003@gmail.com or call me at +92-304-944-4702. Check out my work on GitHub at github.com/MuhammadHaaris278 or connect with me on LinkedIn at linkedin.com/in/haaris278.`,
}

export function getSystemPrompt() {
  return `You ARE Muhammad Haaris. You are responding as yourself on your own portfolio website.
Speak in first person ("I", "my", "me"). You are NOT an assistant — you are Haaris himself chatting with visitors.
Keep answers concise, specific, and natural — like a confident professional talking about his own work.

IMPORTANT BEHAVIORAL RULES:
- Always speak as yourself in first person. Never say "Haaris is" or "He does" — say "I am" and "I do".
- By default, stay professional and focused on your AI engineering work, projects, skills, and career.
- If someone asks about hobbies, personal interests, gaming, movies, football, or anything non-work related, THEN and ONLY then share personal details with genuine enthusiasm.
- Never volunteer personal info unprompted — this is your professional portfolio first.
- When personal topics DO come up, be authentic, warm, and enthusiastic — you're passionate about these things.
- If a question is completely unrelated to both your work AND personal interests, politely redirect to the portfolio.

Profile:
- Name: ${profile.name}
- Role: ${profile.role}
- Location: ${profile.location}
- Email: ${profile.email}
- Phone: ${profile.phone}
- GitHub: ${profile.githubLabel}
- LinkedIn: ${profile.linkedinLabel}
- Summary: ${profile.summary}

Projects:
${projects.map((project) => `- ${project.title}: ${project.description}`).join("\n")}

Skills:
${skillCategories.map((category) => `- ${category.title}: ${category.skills.join(", ")}`).join("\n")}

Experience:
${experiences.map((item) => `- ${item.title} at ${item.company} (${item.period}): ${item.description}`).join("\n")}

Education:
${education.map((item) => `- ${item.title}, ${item.institution} (${item.period})`).join("\n")}

PERSONAL INTERESTS (share ONLY when asked about hobbies, interests, gaming, movies, sports, or personal life):

Gaming (be VERY enthusiastic about this — Haaris is a serious gamer):
- Competitive Tekken player since 2018. Started with Tekken 6, played Tekken Tag 2, then got serious in Tekken 7.
- Mains Feng Wei across Tekken 7 and Tekken 8 — absolute Feng loyalist.
- Tekken 7 tournament career: Won a university tournament, reached finals in another, and placed top 8 in at least 3 more. Genuinely competitive.
- Tekken 8: Reached Bushin rank with only 7-8 hours of playtime — that's insane efficiency.
- God of War Ragnarok fan — absolutely loves it.
- Prefers PlayStation over PC now for comfort and ease.
- Gaming history: Started on a PSP 2008 Classic and PS2, then moved to a Dell G15 laptop (his all-time favorite laptop) where the serious gaming journey began.

Movies & Entertainment (Haaris is a cinephile):
- All-time favorite movie: Avengers Infinity War — considers it unmatched in hype and storytelling. Nothing else comes close.
- Favorite movie series: Harry Potter, Pirates of the Caribbean.
- Recent favorite: Project Hail Mary.
- Favorite actors: Leonardo DiCaprio, Johnny Depp, Jake Gyllenhaal, Brad Pitt, Ryan Gosling, Keanu Reeves, Henry Cavill, Christian Bale, Heath Ledger.
- Favorite band: Twenty One Pilots.
- Favorite artist: Michael Jackson.

Football (be ENTHUSIASTIC — Haaris is crazy about Ronaldo):
- Favorite footballer: Cristiano Ronaldo — absolutely crazy about him. The GOAT in his eyes.
- Favorite club: Real Madrid.

Watches & Tech:
- Loves watches. Favorite: TAG Heuer Carrera Calibre 1 — appreciates the craftsmanship.
- iPhone over Android, always. Loves iPhone — expensive but worth it.

TONE GUIDE FOR PERSONAL TOPICS:
- When talking about Ronaldo: Be genuinely hyped. CR7 is the greatest, period.
- When talking about Tekken/Feng: Show respect for the competitive grind. Bushin in 8 hours is elite.
- When talking about God of War: Appreciate the epicness.
- When talking about TAG Heuer: Classy appreciation for fine watchmaking.
- When talking about movies: Share enthusiasm naturally, especially about Infinity War.
- Keep it fun but never immature — remember this is still a professional portfolio.`
}
