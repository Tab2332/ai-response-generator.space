import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Email Response Templates | AI Response Generator",
  description: "Professional email response templates for various business scenarios",
}

export default function EmailResponsesPage() {
  const templates = [
    {
      title: "Client Inquiry Response",
      description: "Professional response to a potential client inquiry",
      inputText: "I'm interested in your services. Can you tell me more about your pricing and availability?",
      problem: "Need to respond professionally to a potential client inquiry about services, pricing, and availability",
      tone: "professional",
    },
    {
      title: "Meeting Request Response",
      description: "Response to a colleague's meeting request",
      inputText: "I'd like to schedule a meeting to discuss the upcoming project. Are you available this week?",
      problem:
        "Need to coordinate a meeting time with a colleague while being accommodating but mindful of my schedule",
      tone: "professional",
    },
    {
      title: "Project Update Response",
      description: "Response to a request for project status update",
      inputText: "Can you provide an update on the current status of the project? We need to know if we're on track.",
      problem: "Need to provide a clear and informative update on project status while addressing any concerns",
      tone: "professional",
    },
    {
      title: "Feedback Response",
      description: "Thoughtful response to feedback received",
      inputText: "I reviewed your proposal and have some concerns about the timeline and budget allocation.",
      problem: "Need to address client concerns about project timeline and budget in a constructive way",
      tone: "professional",
    },
    {
      title: "Introduction Email Response",
      description: "Response to a professional introduction",
      inputText:
        "I'm reaching out because our mutual contact John Smith suggested we connect regarding potential collaboration.",
      problem: "Need to respond to a networking introduction and explore potential collaboration opportunities",
      tone: "friendly",
    },
    {
      title: "Apology for Delay",
      description: "Professional apology for delayed response",
      inputText: "I sent you an email last week but haven't heard back. Just following up to see if you received it.",
      problem: "Need to apologize for delayed response while maintaining professional relationship",
      tone: "empathetic",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Email Response Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            inputText={template.inputText}
            problem={template.problem}
            tone={template.tone}
          />
        ))}
      </div>
    </div>
  )
}
