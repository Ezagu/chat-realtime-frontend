import { SidebarContent } from "./SidebarContent"
import { SidebarHeader } from "./SidebarHeader"

export const SidebarAuthenticated = () => {
  return (
    <div className="flex flex-col h-full">
      <SidebarHeader />
      <SidebarContent />
    </div>
  )
}