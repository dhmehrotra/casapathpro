import { ClientList } from "@/components/realtor/client-list"

export default function ClientsPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold">Clients</h1>
      <ClientList />
    </div>
  )
}
