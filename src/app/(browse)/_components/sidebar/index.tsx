import React from "react";
import Wrapper from "./wrapper";
import Toggle, { ToggleSkeleton } from "./toggle";
import SuggestedProfiles, { SuggestedSkeleton } from "./suggested-profiles";
import FollowingProfiles, { FollowingSkeleton } from "./following-profiles";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";

type Props = {};

async function Sidebar({}: Props) {
  const suggestedProfiles = await getRecommended()
  const followingProfiles = await getFollowedUsers()

  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4">
        <FollowingProfiles data={followingProfiles}/>
        <SuggestedProfiles data={suggestedProfiles}/>
      </div>
    </Wrapper>
  );
}

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 top-20 p-2 flex flex-col w-[90px] md:w-60 h-full bg-[rgb(37,39,41)] border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <SuggestedSkeleton />
    </aside>
  )
}

export default Sidebar;
