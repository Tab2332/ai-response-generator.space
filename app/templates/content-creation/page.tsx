import type { Metadata } from "next"
import TemplateCard from "@/components/template-card"

export const metadata: Metadata = {
  title: "Content Creation Templates | AI Response Generator",
  description: "Templates for creating engaging content for various platforms",
}

export default function ContentCreationPage() {
  const templates = [
    {
      title: "Blog Post Introduction",
      description: "Engaging introduction for a blog post",
      inputText: "Need to write an introduction for a blog post about remote work productivity tips.",
      problem:
        "Need to create an engaging blog post introduction that hooks readers and introduces the topic of remote work productivity",
      tone: "friendly",
    },
    {
      title: "Product Description",
      description: "Compelling product description for marketing",
      inputText: "Need to write a description for our new wireless headphones with noise cancellation features.",
      problem: "Need to create a compelling product description that highlights key features and benefits",
      tone: "enthusiastic",
    },
    {
      title: "Social Media Post",
      description: "Engaging social media content",
      inputText: "Need to announce our upcoming webinar on digital marketing trends for 2023.",
      problem: "Need to create an engaging social media post that drives registrations for our webinar",
      tone: "casual",
    },
    {
      title: "Newsletter Introduction",
      description: "Welcoming introduction for an email newsletter",
      inputText:
        "Need to write the opening paragraph for our monthly newsletter highlighting recent company achievements.",
      problem: "Need to create a welcoming newsletter introduction that engages subscribers and highlights key content",
      tone: "friendly",
    },
    {
      title: "Press Release",
      description: "Professional press release announcement",
      inputText: "Need to announce our company's new partnership with a major industry player.",
      problem: "Need to create a professional press release that effectively communicates the partnership news",
      tone: "formal",
    },
    {
      title: "Video Script Introduction",
      description: "Engaging opening for a video script",
      inputText: "Need to write the first 30 seconds of a script for a tutorial video on using our software.",
      problem: "Need to create an engaging video introduction that captures viewer attention and sets up the tutorial",
      tone: "enthusiastic",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Content Creation Templates</h2>
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
