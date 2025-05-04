"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ResponseTemplateProps {
  onSelect: (template: string) => void
}

export function ResponseTemplates({ onSelect }: ResponseTemplateProps) {
  const templates = [
    {
      title: "Thank You",
      description: "Express gratitude for something",
      template:
        "Thank you for reaching out about this matter. I appreciate your thoughtful message and the time you took to share your perspective.",
    },
    {
      title: "Apology",
      description: "Apologize for an issue or mistake",
      template:
        "I sincerely apologize for the inconvenience this has caused. I understand your frustration and take full responsibility for the situation.",
    },
    {
      title: "Congratulations",
      description: "Celebrate an achievement",
      template:
        "Congratulations on your impressive achievement! Your hard work and dedication have clearly paid off, and this success is well-deserved.",
    },
    {
      title: "Request Information",
      description: "Ask for more details",
      template:
        "I'd like to request some additional information to better understand the situation. Could you please provide more details about the specific circumstances?",
    },
    {
      title: "Follow-up",
      description: "Check in after a previous interaction",
      template:
        "I'm following up on our previous conversation about this matter. I wanted to check if there have been any developments or if you need any further assistance.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Templates</CardTitle>
        <CardDescription>Select a template to get started quickly</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {templates.map((template, index) => (
              <Card key={index} className="cursor-pointer hover:bg-accent/50">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">{template.template}</p>
                  <Button variant="ghost" size="sm" className="mt-2" onClick={() => onSelect(template.template)}>
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
