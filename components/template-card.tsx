"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface TemplateCardProps {
  title: string
  description: string
  inputText: string
  problem: string
  tone?: string
}

export default function TemplateCard({
  title,
  description,
  inputText,
  problem,
  tone = "professional",
}: TemplateCardProps) {
  const { toast } = useToast()
  const router = useRouter()

  const handleUseTemplate = () => {
    // Store template data in localStorage to be used in the generator
    localStorage.setItem(
      "templateData",
      JSON.stringify({
        inputText,
        problem,
        tone,
      }),
    )

    toast({
      title: "Template selected",
      description: "The template has been loaded into the generator",
    })

    // Navigate to the generator section on the home page
    router.push("/#generator")
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-medium">Input Text:</h4>
            <p className="text-sm text-muted-foreground border-l-2 border-muted-foreground/20 pl-3 py-1 mt-1">
              {inputText}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Problem to Solve:</h4>
            <p className="text-sm text-muted-foreground border-l-2 border-muted-foreground/20 pl-3 py-1 mt-1">
              {problem}
            </p>
          </div>
          {tone && (
            <div>
              <h4 className="text-sm font-medium">Tone:</h4>
              <p className="text-sm text-muted-foreground">{tone}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleUseTemplate}>
          Use This Template
        </Button>
      </CardFooter>
    </Card>
  )
}
