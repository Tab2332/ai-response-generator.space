import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, MessageSquare, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | AI Response Generator FAQ",
  description: "Learn how our AI Response Generator creates human-like responses based on your input",
}

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">How does the AI Response Generator work?</h2>
          <p className="text-lg mb-4">
            Our AI Response Generator uses advanced natural language processing technology to create human-like
            responses tailored to your specific needs. The process is simple yet powerful:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Input Analysis</h3>
                <p>
                  When you provide input text and specify a problem to solve, our AI analyzes the context, intent, and
                  key elements of your situation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Processing</h3>
                <p>
                  The AI processes your requirements, considering your selected tone, desired length, and the specific
                  problem you're trying to solve.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Response Generation</h3>
                <p>
                  Using sophisticated language models, the AI crafts a response that addresses your specific needs while
                  maintaining the appropriate tone and style.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Refinement</h3>
                <p>
                  The response is refined to ensure natural language flow, correct grammar, and appropriate formatting
                  before being presented to you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">The Technology Behind It</h3>
        <p className="mb-4">
          Our AI Response Generator is powered by state-of-the-art large language models that have been trained on
          diverse datasets of human communication. These models understand context, nuance, and can generate text that's
          often indistinguishable from human-written content.
        </p>
        <p>
          We've fine-tuned our models specifically for response generation across various communication scenarios,
          ensuring they produce relevant, helpful, and appropriate responses for your specific needs.
        </p>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
        <p className="mb-4">
          The best way to understand how our AI Response Generator works is to try it yourself. Head back to our
          generator, input a message you've received, specify the problem you're trying to solve, select your preferred
          tone, and let our AI craft the perfect response for you.
        </p>
        <p className="italic text-muted-foreground">
          "I was skeptical at first, but after using the AI Response Generator for a week, I'm amazed at how well it
          understands context and creates appropriate responses for my business communications." - Sarah K., Marketing
          Director
        </p>
      </div>
    </div>
  )
}
