"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function StepFourForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    inspectionPreference: "standard",
    offerStrategy: "at-asking",
    contingencies: ["financing", "inspection"],
    closingTimeframe: "30-days",
    additionalTerms: "",
    preApprovalLetter: false,
    proofOfFunds: false,
  })

  const contingencyOptions = [
    { id: "financing", label: "Financing Contingency" },
    { id: "inspection", label: "Inspection Contingency" },
    { id: "appraisal", label: "Appraisal Contingency" },
    { id: "sale", label: "Home Sale Contingency" },
  ]

  const handleContingencyChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contingencies: checked ? [...prev.contingencies, id] : prev.contingencies.filter((item) => item !== id),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log to console (simulating backend sync)
      console.log("Step 4 completed:", formData)

      toast({
        title: "Progress Saved",
        description: "Your diligence preferences have been saved.",
      })

      // Navigate to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Property Diligence & Offer Strategy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="inspectionPreference">Inspection Preference</Label>
            <Select
              value={formData.inspectionPreference}
              onValueChange={(value) => setFormData({ ...formData, inspectionPreference: value })}
            >
              <SelectTrigger id="inspectionPreference">
                <SelectValue placeholder="Select inspection preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Inspection</SelectItem>
                <SelectItem value="comprehensive">Comprehensive Inspection</SelectItem>
                <SelectItem value="specialized">Specialized Inspections</SelectItem>
                <SelectItem value="waived">Waived Inspection</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="offerStrategy">Offer Strategy</Label>
            <RadioGroup
              value={formData.offerStrategy}
              onValueChange={(value) => setFormData({ ...formData, offerStrategy: value })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="below-asking" id="below-asking" />
                <Label htmlFor="below-asking">Below Asking Price</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="at-asking" id="at-asking" />
                <Label htmlFor="at-asking">At Asking Price</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="above-asking" id="above-asking" />
                <Label htmlFor="above-asking">Above Asking Price</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="escalation" id="escalation" />
                <Label htmlFor="escalation">Escalation Clause</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Contingencies</Label>
            <div className="grid grid-cols-2 gap-2">
              {contingencyOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`contingency-${option.id}`}
                    checked={formData.contingencies.includes(option.id)}
                    onCheckedChange={(checked) => handleContingencyChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={`contingency-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="closingTimeframe">Preferred Closing Timeframe</Label>
            <Select
              value={formData.closingTimeframe}
              onValueChange={(value) => setFormData({ ...formData, closingTimeframe: value })}
            >
              <SelectTrigger id="closingTimeframe">
                <SelectValue placeholder="Select closing timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15-days">15 Days</SelectItem>
                <SelectItem value="30-days">30 Days</SelectItem>
                <SelectItem value="45-days">45 Days</SelectItem>
                <SelectItem value="60-days">60 Days</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalTerms">Additional Terms or Requests</Label>
            <Textarea
              id="additionalTerms"
              placeholder="Any other terms or requests for your offer?"
              value={formData.additionalTerms}
              onChange={(e) => setFormData({ ...formData, additionalTerms: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Documents Ready</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="preApprovalLetter"
                  checked={formData.preApprovalLetter}
                  onCheckedChange={(checked) => setFormData({ ...formData, preApprovalLetter: checked as boolean })}
                />
                <Label htmlFor="preApprovalLetter">Pre-Approval Letter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="proofOfFunds"
                  checked={formData.proofOfFunds}
                  onCheckedChange={(checked) => setFormData({ ...formData, proofOfFunds: checked as boolean })}
                />
                <Label htmlFor="proofOfFunds">Proof of Funds</Label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Complete Home Buying Journey"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
