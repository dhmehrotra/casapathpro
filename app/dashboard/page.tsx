import { ClientList } from "@/components/realtor/client-list"
import { ClientProgress } from "@/components/realtor/client-progress"
import { RecentActivity } from "@/components/realtor/recent-activity"
import { QuickActions } from "@/components/realtor/quick-actions"

export default function RealtorDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-2xl font-bold">Welcome, John Doe</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientProgress />
        <QuickActions />
      </div>

      <RecentActivity />

      <ClientList />
    </div>
  )
}
