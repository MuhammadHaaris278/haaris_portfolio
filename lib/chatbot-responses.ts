import { scriptedResponses, type PortfolioTab } from "@/data/portfolio"

const keywordMap: Array<{ tab: PortfolioTab; keywords: string[] }> = [
  { tab: "me", keywords: ["hi", "hello", "about", "who are you", "haaris"] },
  { tab: "projects", keywords: ["project", "portfolio", "built", "work examples"] },
  { tab: "skills", keywords: ["skill", "tech stack", "tools", "languages", "ai", "ml", "rag"] },
  { tab: "experience", keywords: ["experience", "job", "work history", "education", "current role"] },
  { tab: "contact", keywords: ["contact", "email", "phone", "linkedin", "github", "reach"] },
]

export function getResponse(userMessage: string): string {
  const normalized = userMessage.toLowerCase()
  const match = keywordMap.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  )

  return scriptedResponses[match?.tab || "me"]
}

export async function* streamResponse(response: string) {
  for (const word of response.split(" ")) {
    yield `${word} `
    await new Promise((resolve) => setTimeout(resolve, 20))
  }
}
