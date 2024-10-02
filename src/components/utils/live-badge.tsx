import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import React from "react";

type Props = {
  className?: string;
};

function LiveBadge({ className }: Props) {
  const { collapsed } = useSidebar(state => state)
  return (
    <div
      className={cn(
        "border-[3px] border-rose-400 bg-background rounded-sm text-center py-[0.3px] px-4 -skew-y-[10deg] uppercase text-[10px] font-semibold tracking-wide",
        className
      )}
    >
      Live
    </div>
  );
}

export default LiveBadge;
