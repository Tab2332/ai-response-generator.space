import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, MessageCircle, Sliders, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Customization Options | AI Response Generator FAQ",
  description: "Learn about the various ways you can customize your AI-generated responses",
}

export default function CustomizationOptionsPage() {
  const toneExamples = [
    {
      tone: "Professional",
      example:
        "I appreciate your inquiry regarding our services. We would be delighted to schedule a consultation to discuss how we can meet your specific needs.",
      bestFor: "Business communications, formal emails, client interactions",
    },
    {
      tone: "Friendly",
      example:
        "Thanks so much for reaching out! I'd be happy to chat about how we can help you with your project. How does your schedule look next week?",
      bestFor: "Colleagues, acquaintances, warm business relationships",
    },
    {
      tone: "Casual",
      example:
        "Hey there! Thanks for the message. I'd love to grab coffee and talk more about this. Let me know what works for you!",
      bestFor: "Friends, informal communications, social media",
    },
    {
      tone: "Formal",
      example:
        "Thank you for your correspondence dated May 3rd. We hereby acknowledge receipt of your request and will process it according to our established protocols.",
      bestFor: "Legal communications, official documents, academic contexts",
    },
    {
      tone: "Enthusiastic",
      example:
        "Wow! I'm absolutely thrilled to hear from you! This opportunity sounds amazing, and I can't wait to dive in and explore it further!",
      bestFor: "Exciting announcements, positive news, celebrations",
    },
    {
      tone: "Empathetic",
      example:
        "I understand how challenging this situation must be for you. I want you to know that your concerns are valid, and we're here to support you through this.",
      bestFor: "Customer support, addressing concerns, sensitive situations",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">Can I customize the tone of the responses?</h2>
          <p className="text-lg mb-4">
            Our AI Response Generator offers extensive customization options to ensure your responses match your
            communication style and the context of your conversation. Tone customization is just the beginning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tone Selection</h3>
                <p>
                  Choose from multiple tones including professional, friendly, casual, formal, enthusiastic, empathetic,
                  and assertive to match your audience and purpose.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Length Adjustment</h3>
                <p>
                  Control the length of your response from concise replies to comprehensive messages, depending on your
                  communication needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Sliders className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Context Specification</h3>
                <p>
                  Provide context about the problem you're trying to solve to help the AI generate more relevant and
                  targeted responses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Templates</h3>
                <p>
                  Start with pre-defined templates for common scenarios like customer support, email responses, or job
                  applications, then customize as needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Tone Examples</h3>
        <p className="mb-4">Here are examples of how the same message can be expressed in different tones:</p>

        <div className="space-y-6 mt-6">
          {toneExamples.map((example, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <h4 className="font-semibold text-lg">{example.tone}</h4>
              <p className="italic my-2">"{example.example}"</p>
              <p className="text-sm text-muted-foreground">Best for: {example.bestFor}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Advanced Customization</h3>
        <p className="mb-4">
          For users who need even more control, our premium plans offer advanced customization options including brand
          voice alignment, industry-specific terminology, and the ability to save your preferred settings for future
          use.
        </p>
        <p className="italic text-muted-foreground">
          "The tone customization feature has been a game-changer for our team. We can now quickly generate responses
          that perfectly match our brand voice across different channels and audiences." - Emily R., Communications
          Director
        </p>
      </div>
    </div>
  )
}
