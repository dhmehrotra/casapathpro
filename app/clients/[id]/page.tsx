import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { STEPS } from "@/lib/types"
import { ArrowLeft } from "lucide-react"

// Mock client data
const mockClient = {
  id: "1",
  name: "John Smith",
  email: "john@example.com",
  phone: "(555) 123-4567",
  currentStep: 3,
  joinedDate: "2023-04-15T10:30:00Z",
  stepProgress: [
    { step: 1, completed: true, data: { preApproved: "yes", creditScore: "700-749", annualIncome: "120000" } },
    { step: 2, completed: true, data: { propertyType: "single-family", bedrooms: "3", bathrooms: "2" } },
    { step: 3, completed: false, data: {} },
    { step: 4, completed: false, data: {} },
  ],
  savedProperties: [
    {
      id: "1",
      address: "123 Main St",
      city: "Austin",
      state: "TX",
      price: 450000,
      beds: 3,
      baths: 2,
      image_url: "/modern-house-exterior.png",
    },
    {
      id: "3",
      address: "789 Pine Ln",
      city: "Austin",
      state: "TX",
      price: 350000,
      beds: 2,
      baths: 2,
      image_url: "/modern-condo.png",
    },
  ],
  messages: [
    {
      id: "1",
      step: 1,
      content: "Hi, I have a question about the pre-qualification process.",
      sender: "client",
      timestamp: "2023-05-10T14:30:00Z",
    },
    {
      id: "2",
      step: 1,
      content: "Sure, what would you like to know?",
      sender: "realtor",
      timestamp: "2023-05-10T14:35:00Z",
    },
    {
      id: "3",
      step: 2,
      content: "I've updated my preferences for the home search.",
      sender: "client",
      timestamp: "2023-05-11T09:15:00Z",
    },
    {
      id: "4",
      step: 3,
      content: "I really like the property at 123 Main St!",
      sender: "client",
      timestamp: "2023-05-12T11:20:00Z",
    },
  ],
}

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = mockClient // In a real app, we would fetch the client data based on the ID

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/clients">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">{client.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{client.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p>{client.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current Step</p>
              <Badge className="mt-1">
                Step {client.currentStep}:{" "}
                {STEPS.find((s) => s.number === client.currentStep)
                  ?.title.split("&")[0]
                  .trim()}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Joined</p>
              <p>{formatDate(client.joinedDate)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Client Journey</CardTitle>
            <CardDescription>Track progress through the home buying steps</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="1">
              <TabsList className="grid grid-cols-4">
                {STEPS.map((step) => (
                  <TabsTrigger key={step.number} value={step.number.toString()}>
                    Step {step.number}
                  </TabsTrigger>
                ))}
              </TabsList>
              {STEPS.map((step) => {
                const stepProgress = client.stepProgress.find((p) => p.step === step.number)

                return (
                  <TabsContent key={step.number} value={step.number.toString()} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <Badge variant={stepProgress?.completed ? "default" : "outline"}>
                        {stepProgress?.completed ? "Completed" : "In Progress"}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {/* Step data */}
                      {Object.keys(stepProgress?.data || {}).length > 0 ? (
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-sm">Client Input</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-2">
                              {Object.entries(stepProgress?.data || {}).map(([key, value]) => (
                                <div key={key}>
                                  <p className="text-xs font-medium text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </p>
                                  <p className="text-sm">{value as string}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <p className="text-muted-foreground">No data available for this step yet.</p>
                      )}

                      {/* Messages for this step */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-sm">Messages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {client.messages.filter((m) => m.step === step.number).length > 0 ? (
                            <div className="space-y-3">
                              {client.messages
                                .filter((m) => m.step === step.number)
                                .map((message) => (
                                  <div
                                    key={message.id}
                                    className={`flex ${message.sender === "client" ? "justify-start" : "justify-end"}`}
                                  >
                                    <div
                                      className={`rounded-lg px-3 py-2 max-w-[80%] ${
                                        message.sender === "client" ? "bg-muted" : "bg-primary text-primary-foreground"
                                      }`}
                                    >
                                      <div className="text-xs opacity-70 mb-1">
                                        {message.sender === "client" ? client.name : "You"} •{" "}
                                        {formatDate(message.timestamp)}
                                      </div>
                                      {message.content}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          ) : (
                            <p className="text-muted-foreground">No messages for this step yet.</p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Saved Properties */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Properties</CardTitle>
          <CardDescription>Properties this client has saved</CardDescription>
        </CardHeader>
        <CardContent>
          {client.savedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {client.savedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={property.image_url || "/placeholder.svg?height=300&width=500&query=house"}
                      alt={property.address}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg truncate">{property.address}</h3>
                    <p className="text-muted-foreground text-sm">
                      {property.city}, {property.state}
                    </p>
                    <p className="font-bold text-lg mt-2">{formatPrice(property.price)}</p>
                    <div className="flex gap-4 mt-1 text-sm">
                      <span>{property.beds} bd</span>
                      <span>{property.baths} ba</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">This client hasn't saved any properties yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
