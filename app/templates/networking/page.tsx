import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Networking Templates | AI Response Generator",
  description: "Professional templates for networking and relationship building",
}

export default function NetworkingPage() {
  const templates = [
    {
      title: "LinkedIn Connection",
      description: "Professional response to a LinkedIn connection request",
      inputText:
        "I'd like to add you to my professional network on LinkedIn. We met at the Digital Marketing Conference last month.",
      problem: "Need to respond to a LinkedIn connection request and establish a professional relationship",
      tone: "professional",
    },
    {
      title: "Introduction Request",
      description: "Request for an introduction to a potential contact",
      inputText:
        "I noticed you're connected with Sarah Johnson at ABC Company. I'd be interested in speaking with her about potential collaboration.",
      problem: "Need to respond to an introduction request in a helpful way while respecting relationships",
      tone: "friendly",
    },
    {
      title: "Mentor Relationship",
      description: "Response to a mentorship request",
      inputText:
        "I've been following your career and would love to learn from your experience. Would you be open to a mentorship relationship?",
      problem: "Need to respond to a mentorship request while setting appropriate boundaries",
      tone: "friendly",
    },
    {
      title: "Conference Follow-Up",
      description: "Follow-up after meeting at a conference",
      inputText:
        "It was great meeting you at the Tech Innovation Summit. I enjoyed our conversation about AI implementation strategies.",
      problem: "Need to follow up after a conference meeting to establish a professional relationship",
      tone: "professional",
    },
    {
      title: "Collaboration Proposal",
      description: "Response to a collaboration proposal",
      inputText:
        "I think our companies could benefit from working together on the upcoming market expansion. Would you be interested in discussing a potential partnership?",
      problem: "Need to respond to a collaboration proposal with appropriate interest while gathering more information",
      tone: "professional",
    },
    {
      title: "Reconnection Message",
      description: "Message to reconnect with a former colleague",
      inputText: "It's been a while since we worked together at XYZ Corp. I hope you're doing well in your new role.",
      problem: "Need to reconnect with a former colleague in a natural and friendly way",
      tone: "friendly",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Networking Templates</h2>
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
