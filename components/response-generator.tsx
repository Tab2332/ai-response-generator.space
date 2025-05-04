"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Copy, Loader2, AlertCircle } from "lucide-react"
import { generateResponse } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import TemplateLoader from "./template-loader"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ResponseGenerator() {
  const [input, setInput] = useState("")
  const [problem, setProblem] = useState("")
  const [response, setResponse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tone, setTone] = useState("professional")
  const [length, setLength] = useState(150)
  const { toast } = useToast()

  const handleTemplateLoad = useCallback(
    (data: { inputText: string; problem: string; tone: string }) => {
      setProblem(data.inputText)
      setInput(data.problem)
      setTone(data.tone)

      toast({
        title: "Template loaded",
        description: "The template has been loaded into the generator. You can now customize it.",
      })
    },
    [toast],
  )

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a statement to generate a response.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setError(null)
    setResponse("")

    try {
      console.log("Generating response with:", { input, tone, length, problem })
      const result = await generateResponse(input, tone, length, problem)
      console.log("Response received:", result)
      setResponse(result)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to generate response. Please try again."
      console.error("Generation error:", errorMessage)
      setError(errorMessage)
      toast({
        title: "Generation failed",
        description: "There was an error generating your response. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(response)
    toast({
      title: "Copied to clipboard",
      description: "Response has been copied to clipboard.",
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-muted/30 p-6 rounded-xl">
      <TemplateLoader onTemplateLoad={handleTemplateLoad} />
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="problem" className="text-base font-medium">
                Input Text
              </Label>
              <Textarea
                id="problem"
                placeholder="Enter the text you received from the other person..."
                className="min-h-[120px] mt-2"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="input" className="text-base font-medium">
                Problem to Solve
              </Label>
              <Textarea
                id="input"
                placeholder="What problem are you trying to solve with this response?"
                className="min-h-[180px] mt-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tone" className="text-base font-medium">
                  Tone
                </Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger id="tone">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="empathetic">Empathetic</SelectItem>
                    <SelectItem value="assertive">Assertive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="length" className="text-base font-medium">
                    Length (words)
                  </Label>
                  <span className="text-sm text-muted-foreground">{length}</span>
                </div>
                <Slider
                  id="length"
                  min={50}
                  max={300}
                  step={10}
                  value={[length]}
                  onValueChange={(value) => setLength(value[0])}
                />
              </div>
            </div>

            <Button className="w-full" onClick={handleGenerate} disabled={isGenerating || !input.trim()}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Response"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">Generated Response</Label>
              {response && (
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              )}
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="mt-2 text-sm whitespace-pre-wrap">{error}</AlertDescription>
              </Alert>
            )}

            <div className="min-h-[280px] p-4 rounded-md border bg-muted/50">
              {isGenerating ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : response ? (
                <div className="whitespace-pre-wrap">{response}</div>
              ) : (
                <div className="text-muted-foreground text-center h-full flex items-center justify-center">
                  Your generated response will appear here
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
