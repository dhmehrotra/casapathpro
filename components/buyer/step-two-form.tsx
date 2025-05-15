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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export function StepTwoForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    propertyType: "single-family",
    bedrooms: "3",
    bathrooms: "2",
    minSquareFeet: "",
    maxPrice: "",
    locations: "",
    mustHaveFeatures: ["garage"],
    niceToHaveFeatures: [],
    timeline: "within-3-months",
    additionalNotes: "",
  })

  const mustHaveOptions = [
    { id: "garage", label: "Garage" },
    { id: "yard", label: "Yard/Outdoor Space" },
    { id: "basement", label: "Basement" },
    { id: "open-floor-plan", label: "Open Floor Plan" },
    { id: "updated-kitchen", label: "Updated Kitchen" },
    { id: "master-suite", label: "Master Suite" },
  ]

  const niceToHaveOptions = [
    { id: "pool", label: "Pool" },
    { id: "fireplace", label: "Fireplace" },
    { id: "home-office", label: "Home Office" },
    { id: "smart-home", label: "Smart Home Features" },
    { id: "energy-efficient", label: "Energy Efficient" },
    { id: "view", label: "View (Mountain, Water, etc.)" },
  ]

  const handleMustHaveChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      mustHaveFeatures: checked ? [...prev.mustHaveFeatures, id] : prev.mustHaveFeatures.filter((item) => item !== id),
    }))
  }

  const handleNiceToHaveChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      niceToHaveFeatures: checked
        ? [...prev.niceToHaveFeatures, id]
        : prev.niceToHaveFeatures.filter((item) => item !== id),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log to console (simulating backend sync)
      console.log("Step 2 completed:", formData)

      toast({
        title: "Progress Saved",
        description: "Your home preferences have been saved.",
      })

      // Navigate to next step
      router.push("/buyer/step/3")
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
          <CardTitle>Home Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type</Label>
            <Select
              value={formData.propertyType}
              onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
            >
              <SelectTrigger id="propertyType">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single-family">Single Family Home</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="condo">Condominium</SelectItem>
                <SelectItem value="multi-family">Multi-Family</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Select
                value={formData.bedrooms}
                onValueChange={(value) => setFormData({ ...formData, bedrooms: value })}
              >
                <SelectTrigger id="bedrooms">
                  <SelectValue placeholder="Select number of bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Select
                value={formData.bathrooms}
                onValueChange={(value) => setFormData({ ...formData, bathrooms: value })}
              >
                <SelectTrigger id="bathrooms">
                  <SelectValue placeholder="Select number of bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="1.5">1.5+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="2.5">2.5+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="3.5">3.5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minSquareFeet">Minimum Square Feet</Label>
              <Input
                id="minSquareFeet"
                placeholder="e.g., 1500"
                value={formData.minSquareFeet}
                onChange={(e) => setFormData({ ...formData, minSquareFeet: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxPrice">Maximum Price</Label>
              <Input
                id="maxPrice"
                placeholder="$"
                value={formData.maxPrice}
                onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="locations">Preferred Locations</Label>
            <Textarea
              id="locations"
              placeholder="Enter neighborhoods, zip codes, or areas"
              value={formData.locations}
              onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Must-Have Features</Label>
            <div className="grid grid-cols-2 gap-2">
              {mustHaveOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`must-have-${option.id}`}
                    checked={formData.mustHaveFeatures.includes(option.id)}
                    onCheckedChange={(checked) => handleMustHaveChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={`must-have-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Nice-to-Have Features</Label>
            <div className="grid grid-cols-2 gap-2">
              {niceToHaveOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`nice-to-have-${option.id}`}
                    checked={formData.niceToHaveFeatures.includes(option.id)}
                    onCheckedChange={(checked) => handleNiceToHaveChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={`nice-to-have-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline to Purchase</Label>
            <RadioGroup
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="asap" id="timeline-asap" />
                <Label htmlFor="timeline-asap">As soon as possible</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="within-3-months" id="timeline-3-months" />
                <Label htmlFor="timeline-3-months">Within 3 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-6-months" id="timeline-3-6-months" />
                <Label htmlFor="timeline-3-6-months">3-6 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6-12-months" id="timeline-6-12-months" />
                <Label htmlFor="timeline-6-12-months">6-12 months</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any other preferences or requirements?"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            />
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
