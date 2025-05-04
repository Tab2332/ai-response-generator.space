import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Zap, Target, Award } from "lucide-react"

export default function InfoCards() {
  const cards = [
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Smart AI Responses",
      description:
        "Our AI response generator creates contextually appropriate responses that sound natural and professional.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Instant Response Generation",
      description: "Get perfectly crafted AI responses in seconds with our free AI response generator tool.",
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Customizable Response Tone",
      description:
        "Our response generator lets you choose from multiple tones to match your audience and communication needs.",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Professional AI Responses",
      description:
        "Ensure grammatically correct and professionally written responses with our AI response generator free tool.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="mb-4">{card.icon}</div>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{card.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
