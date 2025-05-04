"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AdvancedSettingsProps {
  creativity: number
  setCreativity: (value: number) => void
  includeEmojis: boolean
  setIncludeEmojis: (value: boolean) => void
  formatBulletPoints: boolean
  setFormatBulletPoints: (value: boolean) => void
}

export function AdvancedSettings({
  creativity,
  setCreativity,
  includeEmojis,
  setIncludeEmojis,
  formatBulletPoints,
  setFormatBulletPoints,
}: AdvancedSettingsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="flex w-full justify-between p-0">
          <span>Advanced Settings</span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="creativity" className="text-sm">
              Creativity
            </Label>
            <span className="text-sm text-muted-foreground">{creativity}</span>
          </div>
          <Slider
            id="creativity"
            min={0}
            max={100}
            step={1}
            value={[creativity]}
            onValueChange={(value) => setCreativity(value[0])}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="include-emojis" className="text-sm">
            Include Emojis
          </Label>
          <Switch id="include-emojis" checked={includeEmojis} onCheckedChange={setIncludeEmojis} />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="format-bullet-points" className="text-sm">
            Format with Bullet Points
          </Label>
          <Switch id="format-bullet-points" checked={formatBulletPoints} onCheckedChange={setFormatBulletPoints} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
