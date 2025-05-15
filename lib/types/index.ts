export type UserRole = "realtor" | "buyer"

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
}

export interface RealtorProfile {
  id: string
  company: string | null
  phone: string | null
  bio: string | null
  invite_code: string
}

export interface BuyerProfile {
  id: string
  phone: string | null
  current_step: number
  realtor_id: string | null
}

export interface StepProgress {
  id: string
  buyer_id: string
  step_number: number
  data: any
  completed: boolean
}

export interface Message {
  id: string
  sender_id: string
  recipient_id: string
  step_number: number | null
  content: string
  is_ai: boolean
  created_at: string
  sender_name?: string
}

export interface Property {
  id: string
  address: string
  city: string
  state: string
  zip_code: string
  price: number
  beds: number
  baths: number
  sq_ft: number
  property_type: string
  year_built: number | null
  description: string | null
  image_url: string | null
}

export interface SavedProperty {
  id: string
  buyer_id: string
  property_id: string
  notes: string | null
  property?: Property
}

export const STEPS = [
  {
    number: 1,
    title: "Pre-Qualification & Financial Readiness",
    description: "Understand your budget and get pre-approved for a mortgage.",
  },
  {
    number: 2,
    title: "Needs Assessment",
    description: "Define what you're looking for in your ideal home.",
  },
  {
    number: 3,
    title: "Property Search",
    description: "Browse available properties and save your favorites.",
  },
  {
    number: 4,
    title: "Property Diligence & Pre-Selection",
    description: "Evaluate properties in detail before making an offer.",
  },
]

// Mock properties data
export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    address: "123 Main St",
    city: "Austin",
    state: "TX",
    zip_code: "78701",
    price: 450000,
    beds: 3,
    baths: 2,
    sq_ft: 1800,
    property_type: "Single Family",
    year_built: 2010,
    description: "Beautiful home in downtown Austin",
    image_url: "/modern-house-exterior.png",
  },
  {
    id: "2",
    address: "456 Oak Ave",
    city: "Austin",
    state: "TX",
    zip_code: "78704",
    price: 550000,
    beds: 4,
    baths: 2.5,
    sq_ft: 2200,
    property_type: "Single Family",
    year_built: 2015,
    description: "Spacious family home with large backyard",
    image_url: "/placeholder-rcfpp.png",
  },
  {
    id: "3",
    address: "789 Pine Ln",
    city: "Austin",
    state: "TX",
    zip_code: "78745",
    price: 350000,
    beds: 2,
    baths: 2,
    sq_ft: 1200,
    property_type: "Condo",
    year_built: 2018,
    description: "Modern condo with great amenities",
    image_url: "/modern-condo.png",
  },
  {
    id: "4",
    address: "101 Cedar Rd",
    city: "Austin",
    state: "TX",
    zip_code: "78702",
    price: 650000,
    beds: 4,
    baths: 3,
    sq_ft: 2800,
    property_type: "Single Family",
    year_built: 2020,
    description: "Luxury home with pool",
    image_url: "/luxury-home-with-pool.png",
  },
  {
    id: "5",
    address: "202 Elm St",
    city: "Austin",
    state: "TX",
    zip_code: "78703",
    price: 400000,
    beds: 3,
    baths: 2,
    sq_ft: 1600,
    property_type: "Townhouse",
    year_built: 2012,
    description: "Charming townhouse in great location",
    image_url: "/modern-townhouse.png",
  },
]
