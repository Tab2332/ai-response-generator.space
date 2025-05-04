import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Job Application Templates | AI Response Generator",
  description: "Professional templates for job applications and interview communications",
}

export default function JobApplicationsPage() {
  const templates = [
    {
      title: "Interview Follow-Up",
      description: "Professional follow-up after a job interview",
      inputText: "Thank you for the opportunity to interview for the Marketing Manager position yesterday.",
      problem: "Need to send a follow-up email after a job interview that expresses gratitude and reinforces interest",
      tone: "professional",
    },
    {
      title: "Job Offer Response",
      description: "Response to a job offer",
      inputText:
        "We are pleased to offer you the position of Senior Developer at our company with a starting salary of $95,000.",
      problem: "Need to respond to a job offer with enthusiasm while negotiating some terms",
      tone: "professional",
    },
    {
      title: "Application Status Inquiry",
      description: "Polite inquiry about application status",
      inputText:
        "I submitted my application for the Project Manager position two weeks ago and wanted to check on its status.",
      problem: "Need to inquire about application status without seeming impatient",
      tone: "professional",
    },
    {
      title: "Networking Follow-Up",
      description: "Follow-up after a networking event",
      inputText:
        "It was great meeting you at the industry conference yesterday and discussing the challenges in digital transformation.",
      problem: "Need to follow up after meeting a potential employer at a networking event",
      tone: "friendly",
    },
    {
      title: "Rejection Response",
      description: "Professional response to a job rejection",
      inputText:
        "After careful consideration, we have decided to proceed with another candidate who better matches our current needs.",
      problem: "Need to respond gracefully to a job rejection while maintaining the relationship",
      tone: "professional",
    },
    {
      title: "Salary Negotiation",
      description: "Professional salary negotiation response",
      inputText: "We can offer a starting salary of $75,000 for the Senior Designer position.",
      problem: "Need to negotiate a higher salary based on experience and market rates",
      tone: "assertive",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Job Application Templates</h2>
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
