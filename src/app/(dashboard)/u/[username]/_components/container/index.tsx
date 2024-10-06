"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/creator-sidebarStore";

interface ContainerProps {
  children: React.ReactNode;
};

export const Container = ({
  children,
}: ContainerProps) => {
  const {
    collapsed,
    onCollapse,
    onExpand,
  } = useCreatorSidebar((state) => state);
  const matches = useMediaQuery(`(max-width: 768px)`);
  
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[90px]" : "md:ml-60")}
    >
      {children}
    </div>
  );
};