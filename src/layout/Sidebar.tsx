import type { User } from "../types/user";
import { SidebarAuthenticated } from "./private/sidebar/SidebarAuthenticated";
import { SidebarGuest } from "./public/sidebar/SidebarGuest";

export const Sidebar = ({ user }: { user: User }) => {
  return (
    <aside className="min-w-0 bg-panel rounded-l-2xl border-r border-border">
      {
        user 
          ? <SidebarAuthenticated/>
          : <SidebarGuest />
      }
    </aside>
  )
}