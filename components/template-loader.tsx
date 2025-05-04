"use client"

import { useEffect } from "react"

interface TemplateLoaderProps {
  onTemplateLoad: (data: {
    inputText: string
    problem: string
    tone: string
  }) => void
}

export default function TemplateLoader({ onTemplateLoad }: TemplateLoaderProps) {
  useEffect(() => {
    const templateData = localStorage.getItem("templateData")

    if (templateData) {
      const data = JSON.parse(templateData)
      onTemplateLoad(data)
      localStorage.removeItem("templateData") // Clear after use
    }
  }, [onTemplateLoad])

  return null // This component doesn't render anything
}
