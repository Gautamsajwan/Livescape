"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/utils/hint";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useCreatorSidebar } from "@/store/creator-sidebarStore";

type Props = {};

const Toggle = ({}: Props) => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state,
  )
  const label = collapsed ? 'Expand' : 'Collapse'
  return (
    <>
      {collapsed && (
        <div className="p-3 hidden md:flex w-full items-center justify-center border-b-[3px] border-gray-600 border-dashed">
          <Hint label={label} asChild={true} side="right">
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
        <div className="px-4 py-2 flex items-center w-full border-b-[3px] border-gray-600 border-dashed">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} asChild={true} side="right">
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
