import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Shield, Sliders, CheckCircle, Briefcase, Infinity } from "lucide-react"

export default function FAQIndexPage() {
  const faqs = [
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      question: "How does the AI Response Generator work?",
      snippet:
        "Our AI Response Generator uses advanced natural language processing to create human-like responses based on your input...",
      slug: "how-it-works",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      question: "Is my data secure when using this tool?",
      snippet:
        "We take data security seriously. Your inputs are not stored permanently and are only used to generate your response...",
      slug: "data-security",
    },
    {
      icon: <Sliders className="h-8 w-8 text-primary" />,
      question: "Can I customize the tone of the responses?",
      snippet:
        "You can choose from multiple tones including professional, friendly, casual, formal, and enthusiastic...",
      slug: "customization-options",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      question: "How accurate are the generated responses?",
      snippet:
        "Our AI generates high-quality, contextually appropriate responses. However, we recommend reviewing the generated content...",
      slug: "response-accuracy",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      question: "Can I use this for business communications?",
      snippet:
        "Yes, many professionals use our tool for business emails, customer service responses, and other professional communications...",
      slug: "business-use",
    },
    {
      icon: <Infinity className="h-8 w-8 text-primary" />,
      question: "Is there a limit to how many responses I can generate?",
      snippet:
        "Our basic plan allows for a generous number of responses per day. For users with higher volume needs...",
      slug: "usage-limits",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faqs.map((faq, index) => (
        <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2">{faq.icon}</div>
            <CardTitle className="text-xl">{faq.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{faq.snippet}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/faq/${faq.slug}`}>Read Full Answer</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
