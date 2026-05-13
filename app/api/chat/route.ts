import OpenAI from "openai"

import { getSystemPrompt } from "@/data/portfolio"

// Vercel serverless function config
export const runtime = "edge"
export const maxDuration = 30

type IncomingMessage = {
  role: "user" | "assistant" | "system"
  content: string
}

function createClient() {
  const githubToken = process.env.GITHUB_TOKEN || process.env.GITHUB_MODELS_TOKEN
  const openAiToken = process.env.OPENAI_API_KEY

  if (githubToken) {
    return {
      client: new OpenAI({
        baseURL: "https://models.github.ai/inference",
        apiKey: githubToken,
      }),
      model: process.env.GITHUB_MODELS_MODEL || "openai/gpt-4.1-mini",
    }
  }

  if (openAiToken) {
    return {
      client: new OpenAI({ apiKey: openAiToken }),
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    }
  }

  return null
}

export async function POST(req: Request) {
  try {
    const provider = createClient()

    if (!provider) {
      return Response.json(
        {
          error:
            "Chat is not configured yet. Add GITHUB_TOKEN, GITHUB_MODELS_TOKEN, or OPENAI_API_KEY to enable free-form AI replies.",
        },
        { status: 503 }
      )
    }

    const { messages } = (await req.json()) as { messages?: IncomingMessage[] }
    const chatMessages = (messages || [])
      .filter((message) => message.role !== "system" && typeof message.content === "string")
      .map((message) => ({
        role: message.role,
        content: message.content,
      }))

    const response = await provider.client.chat.completions.create({
      model: provider.model,
      messages: [{ role: "system", content: getSystemPrompt() }, ...chatMessages],
      temperature: 0.6,
      top_p: 1,
      stream: true,
    })

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`))
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"))
          controller.close()
        } catch (error) {
          console.error("Stream error:", error)
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "X-Accel-Buffering": "no",
      },
    })
  } catch (error) {
    console.error("Chat API error:", error)

    return Response.json(
      { error: "Failed to generate a response. Please try again later." },
      { status: 500 }
    )
  }
}
