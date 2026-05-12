# Muhammad Haaris AI Chatbot Portfolio

A premium, Apple-inspired AI chatbot portfolio experience powered by Next.js 15, AI SDK 6, and Framer Motion. This single-page application transforms Muhammad Haaris's professional portfolio into an interactive chat interface with streaming AI responses.

## Features

### Core Features
- **AI-Powered Chat Interface**: Real-time streaming responses using AI SDK 6
- **Premium Dark Theme**: Glassmorphic design with backdrop blur effects
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Message History**: Complete conversation history with smooth animations
- **Suggested Prompts**: Quick-action buttons for common questions
- **Rich Content Rendering**: Display projects, skills, and experience inline

### Technical Highlights
- **Streaming Responses**: Real-time AI text streaming for engaging UX
- **Zero-Config AI Gateway**: Uses Vercel's AI Gateway (no API key setup needed for default models)
- **Professional Typography**: Inter font from Google Fonts
- **Smooth Animations**: Framer Motion for transitions and micro-interactions
- **Tailwind CSS**: Utility-first styling with custom glassmorphic utilities
- **TypeScript**: Full type safety throughout the application

## Architecture

### Directory Structure
```
/app
  /api/chat/route.ts          # AI endpoint with system prompt
  /page.tsx                    # Main chat page
  /layout.tsx                  # Root layout
  /ClientLayout.tsx            # Client-side wrapper
  /globals.css                 # Global styles and theme

/components
  /chat
    /ChatInterface.tsx         # Main chat UI component
    /ChatMessage.tsx           # Individual message renderer
    /SuggestedPrompts.tsx      # Quick action prompts
    /ProjectCard.tsx           # Project showcase card
    /SkillsVisualization.tsx   # Skills with progress bars
    /ExperienceTimeline.tsx    # Experience timeline display
  /ui                          # shadcn/ui components

/data
  /resume.json                 # Professional background
  /projects.json               # Project showcase data
  /skills.json                 # Technical skills and proficiency

/styles
  /globals.css                 # Theme, utilities, animations

/hooks
  /useAIChat.ts                # (Deprecated) AI chat hook
```

### Key Components

#### ChatInterface
Main chat container managing message history, user input, and AI streaming.
- Features: Auto-scroll, loading states, empty state with suggestions
- Animations: Message fade-in, suggested prompts stagger animation

#### ChatMessage
Individual message display with markdown support and styling differentiation.
- User messages: Blue background with rounded corners
- AI messages: Glassmorphic effect with hover state
- Markdown rendering: Support for bold, lists, code blocks, links

#### Rich Content Components
- **ProjectCard**: Showcase projects with technologies and highlights
- **SkillsVisualization**: Display skills with animated progress bars
- **ExperienceTimeline**: Timeline view of professional experience

## Design System

### Color Palette
- **Background**: `hsl(0, 0%, 5.5%)` - Deep dark
- **Primary**: `hsl(217.2, 91.2%, 59.8%)` - Bright blue
- **Surface**: `hsl(0, 0%, 8%)` - Card background
- **Muted**: `hsl(0, 0%, 15%)` - Secondary text
- **Foreground**: `hsl(0, 0%, 98%)` - Main text

### Glassmorphic Effects
```css
.glass {
  @apply bg-white/10 backdrop-blur-xl border border-white/20;
}

.glass-sm {
  @apply bg-white/5 backdrop-blur-md border border-white/15;
}
```

### Custom Animations
- **float**: Smooth vertical floating motion
- **shimmer**: Light shimmer effect across cards
- **pulse-glow**: Glowing effect with pulsing intensity

## AI Integration

### System Prompt
The AI assistant is configured with a comprehensive system prompt that includes:
- Muhammad's professional background and expertise
- Technical skills across AI/ML, Backend, Frontend, Databases, DevOps
- Notable projects with descriptions
- Professional guidelines and tone requirements

### API Endpoint
**POST** `/api/chat`
- Request: `{ messages: Array<{ role: "user" | "assistant", content: string }> }`
- Response: Server-sent event stream of AI response text

### AI Model
Uses Vercel's AI Gateway with OpenAI GPT-4 Turbo as the default model.
- Zero configuration needed
- Automatic routing to fastest provider
- Fallback to alternate models if needed

## Setup & Development

### Prerequisites
- Node.js 20+
- pnpm (or npm/yarn)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd haaris_portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Environment Variables
No API keys required by default! The AI Gateway handles authentication.

For custom AI providers, set in `.env.local`:
```env
# Optional: Custom AI Gateway API key (if needed)
# AI_GATEWAY_API_KEY=your-key-here
```

## Customization

### Modifying the System Prompt
Edit `/app/api/chat/route.ts` to change how the AI assistant behaves:
```typescript
const systemPrompt = `Your custom prompt here...`;
```

### Updating Resume Data
Modify `/data/resume.json` to update:
- Personal information
- Experience entries
- Technical skills
- Statistics

### Changing Colors
Edit `/styles/globals.css` to customize the color tokens:
```css
:root {
  --primary: 217.2 91.2% 59.8%;
  --background: 0 0% 5.5%;
  /* ... other colors ... */
}
```

### Adding New Rich Components
1. Create component in `/components/chat/`
2. Import and use in ChatInterface or mention in system prompt
3. Follow the existing component patterns for consistency

## Performance Optimization

### Already Implemented
- ✓ Image lazy loading
- ✓ CSS code splitting
- ✓ Component code splitting
- ✓ Streaming responses for perceived performance
- ✓ Optimized animations with `will-change`

### Recommended Optimizations for Production
1. **Image Optimization**: Replace emoji URLs with optimized images
2. **Caching**: Implement Redis for chat history
3. **Analytics**: Add Vercel Web Analytics
4. **Error Tracking**: Integrate Sentry for monitoring

## Deployment

### Deploy to Vercel
```bash
# Push to GitHub
git push

# Deploy via Vercel Dashboard
# Connected repos auto-deploy on push
```

### Environment Variables (Production)
No special setup needed! The AI Gateway is already configured.

### Monitoring
- Check Vercel Analytics for performance metrics
- Monitor function execution in Vercel Dashboard
- Use Sentry for error tracking (optional)

## Troubleshooting

### Chat not responding
1. Check API endpoint: `POST /api/chat`
2. Verify network tab for streaming responses
3. Check browser console for errors

### Styling issues
1. Clear `.next` directory: `rm -rf .next`
2. Rebuild: `pnpm build`
3. Restart dev server: `pnpm dev`

### Messages not rendering
1. Check ChatMessage component markdown parsing
2. Verify message format: `{ role: "user" | "assistant", content: string }`
3. Check browser DevTools for React errors

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 13+, Android Chrome 88+

## Technology Stack
- **Framework**: Next.js 15.2
- **AI**: AI SDK 6, Vercel AI Gateway
- **UI**: shadcn/ui, Tailwind CSS 3.4
- **Animation**: Framer Motion 12
- **Language**: TypeScript 5.9
- **Icons**: Lucide React

## Future Enhancements
- Chat history persistence with localStorage/database
- Dark/light theme toggle
- Voice input support
- Downloadable resume PDF
- Integration with GitHub stats
- Real-time project updates

## License
MIT

## Support
For issues or questions, contact Muhammad Haaris via GitHub or email.

---

Built with Next.js, AI SDK, and Vercel
