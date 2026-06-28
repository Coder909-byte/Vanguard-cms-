import { Calendar, Home, Inbox, NotebookPen, Pencil, Search, Settings, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: Inbox,
  },
  {
    title: "Draft",
    url: "/draft",
    icon: Pencil,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
]

const adminItems = [
  {
    title: "All Posts",
    url: "/admin/posts",
    icon: NotebookPen,
  },
  {
    title: "All Users",
    url: "/admin/users",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="w-full block font-retro uppercase text-center p-4 my-2 border-[4px] border-double border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-white hover:bg-zinc-800 text-[12px] rounded-none">
                      <item.icon />
                      <span className="font-retro uppercase tracking-widest text-[12px] block py-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="w-full block font-retro uppercase text-center p-4 my-2 border-[4px] border-double border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-white hover:bg-zinc-800 text-[12px] rounded-none">
                      <item.icon />
                      <span className="font-retro uppercase tracking-widest text-[12px] block py-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}