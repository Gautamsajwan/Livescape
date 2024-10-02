"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import { ReactNode } from "react";
import { ToggleSkeleton } from "./toggle";
import { SuggestedSkeleton } from "./suggested-profiles";
import { useIsClient } from "usehooks-ts";

function Wrapper({ children }: {children: ReactNode}) {
  const isClient = useIsClient()
  const { collapsed } = useSidebar((state) => state)
  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        {/* <FollowingSkeleton/> */}
        <SuggestedSkeleton />
      </aside>
    )
  }
  return (
    <aside
      className={cn(
        "fixed left-0 top-20 flex flex-col w-60 h-full bg-[rgb(37,39,41)] border-r border-[#2D2E35] z-50",
        collapsed && "w-[90px]"
      )}
    >
      {children}
    </aside>
  );
}

export default Wrapper;
