import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Social Messaging Templates | AI Response Generator",
  description: "Templates for social media responses and messaging",
}

export default function SocialMessagingPage() {
  const templates = [
    {
      title: "Comment Response",
      description: "Professional response to social media comments",
      inputText: "Your product looks interesting, but is it worth the price? Seems expensive compared to competitors.",
      problem: "Need to respond to a price objection on social media while highlighting value",
      tone: "friendly",
    },
    {
      title: "Negative Review Response",
      description: "Tactful response to a negative review",
      inputText:
        "I had a terrible experience with your service. The staff was rude and the quality was poor. Would not recommend.",
      problem: "Need to address a negative review professionally while offering a solution",
      tone: "empathetic",
    },
    {
      title: "Influencer Outreach",
      description: "Professional message to a potential influencer partner",
      inputText:
        "I've been following your content for a while and love your style. Would you be interested in collaboration opportunities?",
      problem: "Need to respond to an influencer inquiry with partnership details",
      tone: "professional",
    },
    {
      title: "Engagement Response",
      description: "Engaging response to increase social interaction",
      inputText: "I love your latest post! How did you come up with this idea?",
      problem: "Need to respond to positive engagement in a way that encourages further interaction",
      tone: "enthusiastic",
    },
    {
      title: "Customer Question",
      description: "Helpful response to product questions on social media",
      inputText: "Does your product work with Android devices? The website doesn't specify compatibility.",
      problem: "Need to answer a product compatibility question clearly and helpfully",
      tone: "friendly",
    },
    {
      title: "Event Promotion",
      description: "Engaging response to questions about upcoming events",
      inputText: "Your upcoming workshop sounds interesting. Can you tell me more about what will be covered?",
      problem: "Need to provide event details while encouraging registration",
      tone: "enthusiastic",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Social Messaging Templates</h2>
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
