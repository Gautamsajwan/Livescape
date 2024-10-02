"use client";
import React, { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  const matches = useMediaQuery("(max-width: 768px)");
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

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
}

export default Container;
