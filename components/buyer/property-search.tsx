"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyCard } from "@/components/buyer/property-card"
import { MOCK_PROPERTIES, type Property, type SavedProperty } from "@/lib/types"
import { toast } from "@/components/ui/use-toast"

export function PropertySearch() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"new" | "saved">("new")
  const [filters, setFilters] = useState({
    zipCode: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
    propertyType: "",
  })
  const [properties] = useState<Property[]>(MOCK_PROPERTIES)
  const [savedProperties, setSavedProperties] = useState<SavedProperty[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveProperty = (property: Property) => {
    const isSaved = savedProperties.some((saved) => saved.property_id === property.id)

    if (isSaved) {
      // Remove from saved
      setSavedProperties(savedProperties.filter((saved) => saved.property_id !== property.id))
      toast({
        title: "Property Removed",
        description: "Property has been removed from your saved list.",
      })
    } else {
      // Add to saved
      const newSavedProperty: SavedProperty = {
        id: Date.now().toString(),
        buyer_id: "current-user", // This would be the actual user ID
        property_id: property.id,
        notes: null,
        property,
      }
      setSavedProperties([...savedProperties, newSavedProperty])
      toast({
        title: "Property Saved",
        description: "Property has been added to your saved list.",
      })
    }
  }

  const handleContinue = async () => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log to console (simulating backend sync)
      console.log("Step 3 completed, saved properties:", savedProperties)

      toast({
        title: "Progress Saved",
        description: "Your saved properties have been recorded.",
      })

      // Navigate to next step
      router.push("/buyer/step/4")
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

  // Filter properties based on user filters
  const filteredProperties = properties.filter((property) => {
    if (filters.zipCode && property.zip_code !== filters.zipCode) return false
    if (filters.minPrice && property.price < Number.parseInt(filters.minPrice)) return false
    if (filters.maxPrice && property.price > Number.parseInt(filters.maxPrice)) return false
    if (filters.beds && property.beds < Number.parseInt(filters.beds)) return false
    if (filters.baths && property.baths < Number.parseFloat(filters.baths)) return false
    if (filters.propertyType && property.property_type !== filters.propertyType) return false
    return true
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Property Search Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                placeholder="e.g., 78701"
                value={filters.zipCode}
                onChange={(e) => setFilters({ ...filters, zipCode: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minPrice">Min Price</Label>
              <Input
                id="minPrice"
                placeholder="$"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxPrice">Max Price</Label>
              <Input
                id="maxPrice"
                placeholder="$"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="beds">Beds</Label>
              <Select value={filters.beds} onValueChange={(value) => setFilters({ ...filters, beds: value })}>
                <SelectTrigger id="beds">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="baths">Baths</Label>
              <Select value={filters.baths} onValueChange={(value) => setFilters({ ...filters, baths: value })}>
                <SelectTrigger id="baths">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="1.5">1.5+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="2.5">2.5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select
                value={filters.propertyType}
                onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
              >
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="Single Family">Single Family</SelectItem>
                  <SelectItem value="Condo">Condo</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "new" | "saved")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new">New Listings</TabsTrigger>
          <TabsTrigger value="saved">Saved Listings</TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isSaved={savedProperties.some((saved) => saved.property_id === property.id)}
                onSave={() => handleSaveProperty(property)}
              />
            ))}
            {filteredProperties.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No properties match your search criteria.</p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedProperties.map((saved) => (
              <PropertyCard
                key={saved.id}
                property={saved.property!}
                isSaved={true}
                onSave={() => handleSaveProperty(saved.property!)}
                notes={saved.notes}
              />
            ))}
            {savedProperties.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">You haven't saved any properties yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardFooter className="flex justify-end">
          <Button onClick={handleContinue} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save & Continue"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
