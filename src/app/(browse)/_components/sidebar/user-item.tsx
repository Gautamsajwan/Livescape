"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/sidebarStore";
import Link from "next/link";
import UserAvatar from "@/components/utils/user-avatar";
import LiveBadge from "@/components/utils/live-badge";

type Props = {
  username: string;
  imageUrl: string;
  isLive: boolean;
};

function UserItem({ username, imageUrl, isLive }: Props) {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);

  const redirectTo = `${username}`;
  const isActive = pathname === redirectTo;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "h-14 rounded-full px-[14px] hover:bg-gray-600",
        collapsed ? "justify-center" : "w-full justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={redirectTo}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} showBadge={collapsed} />
          {!collapsed && <p className="truncate">{username}</p>}
          {!collapsed && isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
}

export default UserItem

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  )
}
