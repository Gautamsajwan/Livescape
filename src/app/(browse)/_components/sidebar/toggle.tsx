"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Hint } from "@/components/utils/hint";
import { useSidebar } from "@/store/sidebarStore";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

type Props = {};

function Toggle({}: Props) {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className="p-3 hidden md:flex w-full items-center justify-center border-b-2 border-gray-600">
          <Hint label={label} asChild={true} side='right'>
          <Button
            className="px-1 py-1 pl-[6px]"
            variant="ghost"
            onClick={onExpand}
          >
            <PanelLeftOpen className="h-6 w-6" />
          </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="px-4 py-3 flex items-center w-full border-b-2 border-gray-600">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} asChild={true} side='right'>
          <Button
            className="px-1 py-1 pl-[6px] ml-auto"
            variant="ghost"
            onClick={onCollapse}
          >
            <PanelLeftClose className="h-6 w-6" />
          </Button>
          </Hint>
        </div>
      )}
    </>
  );
}

export default Toggle;

export const ToggleSkeleton = () => {
  return (
    <div className="mx-2 mb-2 hidden md:flex items-center justify-between">
      <Skeleton className="h-6 w-[120px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};
