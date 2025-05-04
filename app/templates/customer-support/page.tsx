import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Customer Support Templates | AI Response Generator",
  description: "Helpful templates for customer support and service inquiries",
}

export default function CustomerSupportPage() {
  const templates = [
    {
      title: "Product Issue Resolution",
      description: "Helpful response to a customer reporting a product issue",
      inputText:
        "I purchased your product last week and it's not working as described. The battery drains too quickly.",
      problem: "Need to address a customer's product issue while providing helpful troubleshooting steps",
      tone: "empathetic",
    },
    {
      title: "Refund Request Response",
      description: "Professional response to a refund request",
      inputText: "I'm not satisfied with my purchase and would like a refund according to your return policy.",
      problem: "Need to handle a refund request professionally while following company policy",
      tone: "professional",
    },
    {
      title: "Service Delay Explanation",
      description: "Explanation for a service delay",
      inputText: "My order was supposed to arrive yesterday but I still haven't received it. What's going on?",
      problem: "Need to explain a service delay while maintaining customer satisfaction",
      tone: "empathetic",
    },
    {
      title: "Feature Request Acknowledgment",
      description: "Response to a customer feature request",
      inputText: "I think your product would be much better if it had the ability to export data in CSV format.",
      problem: "Need to acknowledge a feature request and explain the product roadmap process",
      tone: "friendly",
    },
    {
      title: "Technical Support Response",
      description: "Technical troubleshooting guidance",
      inputText:
        "I can't log into my account. I keep getting an 'invalid credentials' error even though I know my password is correct.",
      problem: "Need to provide technical troubleshooting steps for a login issue",
      tone: "helpful",
    },
    {
      title: "Service Upgrade Information",
      description: "Information about service upgrade options",
      inputText: "I'm currently on the basic plan but need more features. What are my upgrade options?",
      problem: "Need to explain service upgrade options clearly while encouraging the customer to upgrade",
      tone: "enthusiastic",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Customer Support Templates</h2>
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
