"use client"
import { useSidebar } from "@/store/sidebarStore";
import { Follow, User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./user-item";

type Props = {
  data: (Follow & { 
    following: (User & {
      stream: { isLive: boolean } | null
    })
  })[];
};

function FollowingProfiles({ data }: Props) {
  const { collapsed } = useSidebar((state) => state);
  if (!data.length) {
    return null;
  }
  return (
    <div>
      {!collapsed && (
        <div className="pl-4 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
            isLive={!!follow.following.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
}

export default FollowingProfiles;

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
