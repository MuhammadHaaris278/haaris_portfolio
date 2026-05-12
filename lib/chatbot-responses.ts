export interface ResponseOption {
  keywords: string[];
  response: string;
}

const responses: ResponseOption[] = [
  // Greeting responses
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hey there! 👋 I'm Muhammad Haaris's AI assistant. I can tell you about his background, projects, skills, and experience. What would you like to know?",
  },
  
  // Introduction
  {
    keywords: ["who are you", "about you", "tell me about yourself"],
    response: "I'm an AI assistant representing Muhammad Haaris, an AI Engineer and Full-Stack Developer specializing in LLMs, RAG systems, and web development. I'm here to help you learn about his expertise, projects, and professional background. What interests you?",
  },

  // Name
  {
    keywords: ["what is your name", "your name", "who are you"],
    response: "I represent Muhammad Haaris, an AI Engineer and Full-Stack Developer. Feel free to ask me anything about his experience, skills, or projects!",
  },

  // Current role
  {
    keywords: ["what do you do", "current role", "job", "work"],
    response: "Muhammad is currently an AI Engineer at Optikode, where he builds AI solutions using LLMs and RAG systems. He's also a Computer Science student (2021-2025) with a passion for AI, machine learning, and full-stack web development.",
  },

  // Skills - AI/ML
  {
    keywords: ["ai skills", "ml skills", "machine learning", "artificial intelligence", "llm", "rag"],
    response: "Muhammad has extensive expertise in AI/ML including:\n\n• LLMs and Prompt Engineering\n• LangChain and RAG Systems\n• Model Fine-tuning\n• Vector Databases\n• OpenAI and Claude APIs\n• Transformer architectures\n\nHe specializes in building intelligent automation systems and AI-powered applications.",
  },

  // Skills - Backend
  {
    keywords: ["backend skills", "server", "api", "python", "nodejs", "fastapi"],
    response: "His backend expertise includes:\n\n• Python (primary language for AI/ML)\n• Node.js and Express\n• FastAPI for high-performance APIs\n• REST API design\n• WebSockets for real-time applications\n• Database design and optimization\n\nHe's built production-ready APIs and backend systems for various applications.",
  },

  // Skills - Frontend
  {
    keywords: ["frontend skills", "react", "next.js", "ui", "web design", "typescript"],
    response: "On the frontend, he's proficient in:\n\n• React and Next.js\n• TypeScript for type safety\n• Tailwind CSS and Material-UI\n• Framer Motion for animations\n• Responsive design\n• State management (Redux, Context API)\n\nHe builds beautiful, performant web applications with modern frameworks.",
  },

  // Experience
  {
    keywords: ["experience", "background", "work history", "employment"],
    response: "Here's Muhammad's professional journey:\n\n**AI Engineer at Optikode (Current)**\nBuilding AI solutions with LLMs and RAG systems\n\n**Full-Stack Developer Intern at NETSOL (July-Aug 2024)**\nDeveloped MERN stack applications\n\n**Computer Science Student (2021-2025)**\nFocusing on AI, ML, and Web Development\n\nHe has 20+ completed projects and deep expertise across multiple domains.",
  },

  // Projects - General
  {
    keywords: ["projects", "portfolio", "what have you built", "work examples"],
    response: "Muhammad has built impressive projects across AI and Web Development:\n\n🤖 **AI Projects:**\n• HybridChatbot - Multi-LLM system with RAG\n• Medical QA System - Fine-tuned domain-specific model\n• VLM Fine-Tuning Pipeline - Vision model training\n\n🌐 **Web Projects:**\n• Portfolio Dashboard - Full-stack analytics platform\n• E-commerce Platform - MERN with Stripe integration\n• Real-time Collaboration Tool - WebSocket-powered\n\nWould you like details on any specific project?",
  },

  // HybridChatbot
  {
    keywords: ["hybridchatbot", "hybrid chatbot"],
    response: "**HybridChatbot** is one of his flagship projects - a sophisticated AI chatbot combining multiple LLMs with retrieval-augmented generation (RAG).\n\n**Key Features:**\n• Multi-LLM support for optimal responses\n• RAG integration for knowledge base queries\n• Real-time streaming responses\n• Context-aware conversations\n\n**Tech Stack:** LangChain, OpenAI, Python, FastAPI, Vector Databases\n\nThis project demonstrates advanced AI engineering capabilities!",
  },

  // Medical QA
  {
    keywords: ["medical", "qa system", "medical qa"],
    response: "The **Medical QA System** is a specialized AI application fine-tuned on medical data.\n\n**Capabilities:**\n• Custom medical knowledge base\n• Accurate domain-specific responses\n• Production-ready API\n• RAG for reliable sourcing\n\n**Tech Stack:** Fine-tuning, RAG, Medical Datasets, Python, OpenAI\n\nThis showcases expertise in domain-specific AI applications and fine-tuning.",
  },

  // VLM Project
  {
    keywords: ["vision", "vlm", "image", "vit", "computer vision"],
    response: "The **VLM Fine-Tuning Pipeline** is a comprehensive tool for training vision language models.\n\n**Features:**\n• Automated data preprocessing\n• Multi-GPU training support\n• Model evaluation metrics\n• Performance optimization\n\n**Tech Stack:** PyTorch, Vision Transformers, Python, CUDA, Hugging Face\n\nThis demonstrates deep expertise in computer vision and model optimization.",
  },

  // E-commerce Project
  {
    keywords: ["ecommerce", "e-commerce", "stripe", "shopping"],
    response: "The **E-commerce Platform** is a full-stack MERN application with payment integration.\n\n**Features:**\n• Secure Stripe payment processing\n• Inventory management system\n• User authentication\n• Responsive design\n• Product catalog\n\n**Tech Stack:** MERN Stack, Stripe, Redux, Material-UI, PostgreSQL\n\nIt's a production-ready solution showcasing full-stack expertise.",
  },

  // Collaboration Tool
  {
    keywords: ["collaboration", "real-time", "websocket", "editing"],
    response: "The **Real-time Collaboration Tool** enables collaborative editing and communication.\n\n**Features:**\n• Real-time synchronization\n• Conflict resolution\n• User presence awareness\n• Persistent storage\n\n**Tech Stack:** WebSockets, React, Node.js, Redis, Yjs\n\nThis demonstrates expertise in building scalable, real-time applications.",
  },

  // Contact/Email
  {
    keywords: ["contact", "email", "reach out", "get in touch"],
    response: "You can reach Muhammad at:\n\n📧 Email: haaris@example.com\n💼 GitHub: github.com/MuhammadHaaris278\n\nFeel free to connect with him on these platforms for collaboration opportunities!",
  },

  // GitHub
  {
    keywords: ["github", "code", "repository", "source code"],
    response: "Check out Muhammad's code on GitHub: **github.com/MuhammadHaaris278**\n\nHis repositories showcase:\n• AI/ML projects and research\n• Web development applications\n• Open-source contributions\n• Best practices and clean code\n\nVisit his GitHub to explore his work in detail!",
  },

  // Education
  {
    keywords: ["education", "degree", "university", "college", "study"],
    response: "Muhammad is a Computer Science student (2021-2025) with a strong focus on:\n\n🎓 **Specializations:**\n• Artificial Intelligence & Machine Learning\n• Web Development\n• Software Engineering\n\nHe's actively pursuing knowledge in cutting-edge AI technologies while building real-world applications.",
  },

  // Tech Stack General
  {
    keywords: ["tech stack", "technologies", "tools", "languages"],
    response: "Muhammad's comprehensive tech stack includes:\n\n**Languages:** Python, JavaScript/TypeScript, Node.js\n**AI/ML:** LangChain, PyTorch, LLMs, RAG Systems\n**Frontend:** React, Next.js, Tailwind CSS, Framer Motion\n**Backend:** FastAPI, Express, REST APIs\n**Databases:** MongoDB, PostgreSQL, Pinecone\n**DevOps:** Docker, Git, Vercel, Linux, CI/CD\n\nHe's adaptable and always learning new technologies!",
  },

  // Statistics
  {
    keywords: ["stats", "statistics", "numbers", "achievements"],
    response: "Here are some impressive stats:\n\n📊 **By The Numbers:**\n• 20+ Projects Completed\n• 5+ AI Models Trained & Fine-tuned\n• 500+ GitHub Commits\n• 15+ Languages/Tools\n• 2+ Years of Professional Experience\n\nThese numbers reflect a commitment to continuous learning and excellence.",
  },

  // Strengths
  {
    keywords: ["strength", "strong", "expertise", "best at"],
    response: "Muhammad's key strengths:\n\n💪 **Core Competencies:**\n• AI/ML Engineering (LLMs, RAG, Fine-tuning)\n• Full-Stack Web Development (MERN)\n• Real-time Application Development\n• API Design & Architecture\n• System Optimization\n• Problem Solving\n\nHe excels at building intelligent, scalable solutions that combine AI and web technologies.",
  },

  // Learning/Growth
  {
    keywords: ["learning", "growth", "improve", "development"],
    response: "Muhammad is passionate about continuous improvement:\n\n📚 **Current Focus:**\n• Advanced LLM techniques\n• Production AI systems\n• System design and architecture\n• New frameworks and tools\n\nHe regularly updates his skills and stays ahead of industry trends in AI and web development.",
  },

  // Default response for unmatched queries
  {
    keywords: [],
    response: "That's an interesting question! I might not have a specific answer about that topic, but I'm here to help with questions about Muhammad's expertise, projects, experience, and skills. What else would you like to know?",
  },
];

export function getResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Find matching response based on keywords
  for (const option of responses) {
    if (option.keywords.length === 0) continue; // Skip default
    
    if (option.keywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    )) {
      return option.response;
    }
  }

  // Return default response
  return responses[responses.length - 1].response;
}

// Function to simulate typing delay and streaming effect
export async function* streamResponse(response: string) {
  const words = response.split(" ");
  for (const word of words) {
    yield word + " ";
    // Small delay between words for natural streaming effect
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}
