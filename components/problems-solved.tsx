import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock, Brain, MessageSquare, Frown, CheckCircle } from "lucide-react"

export default function ProblemsSolved() {
  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      problem: "Time Wasted",
      solution: "Generate responses in seconds instead of minutes",
    },
    {
      icon: <Brain className="h-8 w-8 text-red-500" />,
      problem: "Writer's Block",
      solution: "Overcome creative blocks with AI-powered suggestions",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-red-500" />,
      problem: "Tone Inconsistency",
      solution: "Maintain consistent tone across all communications",
    },
    {
      icon: <Frown className="h-8 w-8 text-red-500" />,
      problem: "Communication Anxiety",
      solution: "Reduce stress with professionally crafted responses",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      problem: "Grammar Mistakes",
      solution: "Eliminate errors with perfect grammar and spelling",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      problem: "Approval Delays",
      solution: "Get responses approved faster with professional quality",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Problems We Solve</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Our AI Response Generator helps you overcome common communication challenges
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((item, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                {item.icon}
                <CardTitle className="text-xl">{item.problem}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.solution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
