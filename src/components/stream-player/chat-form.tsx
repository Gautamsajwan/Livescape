"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChatInfo } from "./chat-info";
import { SendHorizonal } from "lucide-react";
import { useChatSidebar } from "@/store/use-chat-sidebar";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
  isHidden: boolean;
  isFollowersOnly: boolean;
  isFollowing: boolean;
  isDelayed: boolean;
};

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  isHidden,
  isFollowersOnly,
  isFollowing,
  isDelayed,
}: ChatFormProps) => {
  const [isDelayBlocked, setIsDelayBlocked] = useState(false);
  const { collapsed } = useChatSidebar(state => state)

  const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
  const isDisabled = isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value || isDisabled) return;

    if (isDelayed && !isDelayBlocked) {
      setIsDelayBlocked(true);
      setTimeout(() => {
        setIsDelayBlocked(false);
        onSubmit();
      }, 3000);
    } else {
      onSubmit();
    }
  }

  if (isHidden) {
    return null;
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex gap-x-2 lg:flex-col items-center gap-y-4 p-3"
    >
      <div className="w-full">
        <div>
          <ChatInfo
            isDelayed={isDelayed}
            isFollowersOnly={isFollowersOnly}
          />
        </div>
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn(
            "border-[3px] border-blue-500 h-12 bg-[rgb(31,31,31)] rounded-xl ring-0",
            (isFollowersOnly || isDelayed) && "rounded-t-none border-t-0 border-gray-700"
          )}
        />
      </div>
      <div className="ml-auto">
        <Button
          type="submit"
          size="sm"
          disabled={isDisabled}
          className={cn(
            "-translate-y-[2px] bg-blue-500 hover:bg-blue-400 text-white rounded-full h-12 w-12 p-0",
            !collapsed && "rounded-lg"
          )}
        >
          <SendHorizonal className="text-blue-200"/>
        </Button>
      </div>
    </form>
  );
};

export const ChatFormSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-3">
      <Skeleton className="w-full h-10" />
      <div className="flex items-center gap-x-2 ml-auto">
        <Skeleton className="h-7 w-7" />
        <Skeleton className="h-7 w-12" />
      </div>
    </div>
  );
};