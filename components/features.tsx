import { CheckCircle, MessageSquare, Clock, Sparkles, Palette, Share2 } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "AI Response Generator",
      description:
        "Our AI response generator creates responses tailored to your specific needs and communication style.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Multiple Response Tones",
      description:
        "This free AI response tool offers professional, friendly, casual, formal, or enthusiastic tones to match your audience.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Fast AI Response",
      description: "Create perfect AI responses in seconds instead of spending minutes crafting each message.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Advanced Response Generator",
      description:
        "Leverage our response generator technology to create human-like, contextually appropriate responses.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Error-Free AI Responses",
      description:
        "Ensure grammatically correct and professionally written responses every time with our AI response generator.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Easy Response Sharing",
      description: "Copy AI responses with one click to use in emails, messages, or any communication platform.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Our AI Response Generator offers powerful features to help you communicate effectively in any situation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
