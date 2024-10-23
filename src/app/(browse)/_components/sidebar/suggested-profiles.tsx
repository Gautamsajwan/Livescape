"use client";
import { useSidebar } from "@/store/sidebarStore";
import { User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./user-item";

type Props = {
  data: (User & {
    stream: { isLive: boolean } | null;
  })[];
};

function SuggestedProfiles({ data }: Props) {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-4 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 flex flex-col justify-center px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={!!user.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedProfiles;

export const SuggestedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
