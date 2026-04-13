import { useAuthContext } from "../hooks/useAuthContext";
import { SidebarAuthenticated } from "./private/sidebar/SidebarAuthenticated";
import { SidebarGuest } from "./public/sidebar/SidebarGuest";

export const Sidebar = () => {
  const {userIdentity} = useAuthContext()
  return (
    <aside className="min-w-0 bg-panel rounded-l-2xl border-r border-border min-h-0 overflow-hidden flex flex-col">
      {
        userIdentity 
          ? <SidebarAuthenticated/>
          : <SidebarGuest />
      }
    </aside>
  )
}