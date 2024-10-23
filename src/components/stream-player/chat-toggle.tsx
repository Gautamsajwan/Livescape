"use client";

import { Button } from "@/components/ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { Hint } from "../utils/hint";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

export const ChatToggle = () => {
  const {
    collapsed,
    onExpand,
    onCollapse,
  } = useChatSidebar((state) => state);

  const Icon = collapsed ? PanelRightOpen : PanelRightClose;

  const onToggle = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
      >
        <Icon className="h-6 w-6" />
      </Button>
    </Hint>
  );
};