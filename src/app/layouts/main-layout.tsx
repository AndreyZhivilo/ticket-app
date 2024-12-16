import { ReactNode } from "react"
import { cn } from "@/shared/lib/utils"

function MainLayout({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('container mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-y-4 lg:gap-x-4', className)}>
      {children}
    </div>
  )
}

function Sidebar({
  children,
}: {
  children: ReactNode
}) {
  return (
    <aside>
      {children}
    </aside>)
}

function Main({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}

MainLayout.Sidebar = Sidebar
MainLayout.Main = Main

export { MainLayout }