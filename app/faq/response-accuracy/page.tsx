import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Target, BarChart, Edit, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Response Accuracy | AI Response Generator FAQ",
  description: "Learn about the accuracy of our AI-generated responses and best practices for using them",
}

export default function ResponseAccuracyPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">How accurate are the generated responses?</h2>
          <p className="text-lg mb-4">
            Our AI generates high-quality, contextually appropriate responses that are designed to be helpful in a wide
            range of communication scenarios. However, understanding the capabilities and limitations of AI-generated
            content is important for getting the best results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contextual Understanding</h3>
                <p>
                  Our AI excels at understanding the context of your input and generating responses that address the
                  specific situation you've described.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Factors</h3>
                <p>
                  The accuracy of responses depends on several factors, including the clarity of your input, the
                  specificity of the problem description, and the complexity of the situation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Edit className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Human Review</h3>
                <p>
                  We recommend reviewing and potentially editing AI-generated responses before using them, especially
                  for important communications or specialized contexts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Limitations</h3>
                <p>
                  While highly capable, our AI may not have specific knowledge about your organization, personal
                  relationships, or highly specialized industry terms unless you provide that context.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-black text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Accuracy Comparison</h3>
        <div className="relative w-full h-12 bg-black rounded-full overflow-hidden mb-6">
          <div className="absolute top-0 left-0 h-full bg-primary/70 w-[95%]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
            Grammar & Spelling: 95% Accuracy
          </div>
        </div>
        <div className="relative w-full h-12 bg-black rounded-full overflow-hidden mb-6">
          <div className="absolute top-0 left-0 h-full bg-primary/70 w-[90%]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
            Tone Consistency: 90% Accuracy
          </div>
        </div>
        <div className="relative w-full h-12 bg-black rounded-full overflow-hidden mb-6">
          <div className="absolute top-0 left-0 h-full bg-primary/70 w-[85%]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
            Contextual Relevance: 85% Accuracy
          </div>
        </div>
        <div className="relative w-full h-12 bg-black rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-primary/70 w-[80%]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
            Industry-Specific Knowledge: 80% Accuracy
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Best Practices for Optimal Accuracy</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be specific in your problem description and provide relevant context</li>
          <li>Review and edit generated responses before sending them</li>
          <li>Use the appropriate tone setting for your communication context</li>
          <li>Provide examples or specific phrases you want included when necessary</li>
          <li>For specialized industries, add key terminology in your input</li>
        </ul>
        <p className="italic text-muted-foreground mt-4">
          "I've found that the more specific I am about the context and problem I'm trying to solve, the more accurate
          and useful the AI responses are. It's like having a communication assistant that learns from my input." - Alex
          T., Small Business Owner
        </p>
      </div>
    </div>
  )
}
