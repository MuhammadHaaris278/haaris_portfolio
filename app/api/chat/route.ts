import { getResponse } from "@/lib/chatbot-responses";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Get the last user message
  const lastMessage = messages[messages.length - 1];
  const userInput = lastMessage?.content || "";

  // Get the appropriate response based on user input
  const response = getResponse(userInput);

  // Create a readable stream that sends the response word by word
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const words = response.split(" ");
      
      for (const word of words) {
        // Send word with a small delay for streaming effect
        const text = word + " ";
        controller.enqueue(encoder.encode(`0:"${text}"\n`));
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
