'use client'
import { cn } from '@/lib/utils'
import { useCreatorSidebar } from '@/store/creator-sidebarStore'

interface Props {
  children: React.ReactNode
}

export const Wrapper = ({ children }: Props) => {
  const { collapsed } = useCreatorSidebar((state) => state)
  return (
    <aside
      className={cn(
        'flex left-0 fixed flex-col w-[90px] md:w-60 h-full bg-background border-r border-[#2D2E35] z-50',
        collapsed && 'md:w-[90px]',
      )}
    >
      {children}
    </aside>
  )
}
