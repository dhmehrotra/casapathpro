"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"

export function StepOneForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    preApproved: "no",
    creditScore: "700-749",
    annualIncome: "",
    downPayment: 20,
    loanType: "conventional",
    monthlyDebt: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log to console (simulating backend sync)
      console.log("Step 1 completed:", formData)

      toast({
        title: "Progress Saved",
        description: "Your financial information has been saved.",
      })

      // Navigate to next step
      router.push("/buyer/step/2")
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
          <CardTitle>Financial Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Are you pre-approved for a mortgage?</Label>
            <RadioGroup
              value={formData.preApproved}
              onValueChange={(value) => setFormData({ ...formData, preApproved: value })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="pre-approved-yes" />
                <Label htmlFor="pre-approved-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="pre-approved-no" />
                <Label htmlFor="pre-approved-no">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-progress" id="pre-approved-in-progress" />
                <Label htmlFor="pre-approved-in-progress">In Progress</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="creditScore">Credit Score Range</Label>
            <Select
              value={formData.creditScore}
              onValueChange={(value) => setFormData({ ...formData, creditScore: value })}
            >
              <SelectTrigger id="creditScore">
                <SelectValue placeholder="Select credit score range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="750+">Excellent (750+)</SelectItem>
                <SelectItem value="700-749">Good (700-749)</SelectItem>
                <SelectItem value="650-699">Fair (650-699)</SelectItem>
                <SelectItem value="600-649">Poor (600-649)</SelectItem>
                <SelectItem value="below-600">Very Poor (below 600)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="annualIncome">Annual Household Income</Label>
            <Input
              id="annualIncome"
              placeholder="$"
              value={formData.annualIncome}
              onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="downPayment">Down Payment Percentage</Label>
              <span>{formData.downPayment}%</span>
            </div>
            <Slider
              id="downPayment"
              min={0}
              max={100}
              step={1}
              value={[formData.downPayment]}
              onValueChange={(value) => setFormData({ ...formData, downPayment: value[0] })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanType">Preferred Loan Type</Label>
            <Select value={formData.loanType} onValueChange={(value) => setFormData({ ...formData, loanType: value })}>
              <SelectTrigger id="loanType">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conventional">Conventional</SelectItem>
                <SelectItem value="fha">FHA</SelectItem>
                <SelectItem value="va">VA</SelectItem>
                <SelectItem value="usda">USDA</SelectItem>
                <SelectItem value="jumbo">Jumbo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyDebt">Monthly Debt Payments</Label>
            <Input
              id="monthlyDebt"
              placeholder="$"
              value={formData.monthlyDebt}
              onChange={(e) => setFormData({ ...formData, monthlyDebt: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">Include car payments, student loans, credit cards, etc.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save & Continue"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
