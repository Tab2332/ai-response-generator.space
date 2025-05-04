"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, FileText, Users, Briefcase, HeartHandshake } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UseCaseCards() {
  const router = useRouter()

  const useCases = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Responses",
      description: "Generate professional email responses for clients, colleagues, and business partners.",
      action: "Email Template",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Customer Support",
      description: "Create helpful and friendly responses for customer inquiries and support tickets.",
      action: "Support Template",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description: "Draft blog posts, social media content, and marketing materials with ease.",
      action: "Content Template",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Social Messaging",
      description: "Craft perfect responses for social media comments and direct messages.",
      action: "Social Template",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Job Applications",
      description: "Create professional responses for job inquiries and interview follow-ups.",
      action: "Job Template",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Networking",
      description: "Generate engaging responses for networking events and professional connections.",
      action: "Networking Template",
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Popular Use Cases</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Our AI Response Generator is perfect for a wide range of communication needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-2">{useCase.icon}</div>
              <CardTitle>{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{useCase.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push(`/templates/${useCase.title.toLowerCase().replace(/\s+/g, "-")}`)}
              >
                {useCase.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
