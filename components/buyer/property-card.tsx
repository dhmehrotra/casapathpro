"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import type { Property } from "@/lib/types"
import { Bookmark, Edit, Check } from "lucide-react"

interface PropertyCardProps {
  property: Property
  isSaved: boolean
  onSave: () => void
  notes?: string | null
}

export function PropertyCard({ property, isSaved, onSave, notes }: PropertyCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [noteText, setNoteText] = useState(notes || "")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleSaveNotes = () => {
    // In a real app, this would save to the database
    setIsEditing(false)
    // For now, we'll just log to console
    console.log("Saving notes for property", property.id, noteText)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={property.image_url || "/placeholder.svg?height=300&width=500&query=house"}
          alt={property.address}
          fill
          className="object-cover"
        />
        <Button
          variant={isSaved ? "default" : "outline"}
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={onSave}
        >
          <Bookmark className={isSaved ? "fill-current" : ""} />
          <span className="sr-only">{isSaved ? "Unsave" : "Save"} property</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{property.address}</h3>
        <p className="text-muted-foreground text-sm">
          {property.city}, {property.state} {property.zip_code}
        </p>
        <p className="font-bold text-lg mt-2">{formatPrice(property.price)}</p>
        <div className="flex gap-4 mt-1 text-sm">
          <span>{property.beds} bd</span>
          <span>{property.baths} ba</span>
          <span>{property.sq_ft.toLocaleString()} sqft</span>
        </div>
        <p className="text-sm mt-2">{property.property_type}</p>

        {isSaved && (
          <div className="mt-4 border-t pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Notes</h4>
              {isEditing ? (
                <Button size="sm" variant="ghost" onClick={handleSaveNotes}>
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
              ) : (
                <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              )}
            </div>
            {isEditing ? (
              <Textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add notes about this property..."
                className="mt-2 text-sm"
              />
            ) : (
              <p className="text-sm mt-2 text-muted-foreground">
                {noteText || "No notes yet. Click Edit to add notes."}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
