import React from "react";
import Wrapper from "./wrapper";
import Toggle, { ToggleSkeleton } from "./toggle";
import SuggestedProfiles, { SuggestedSkeleton } from "./suggested-profiles";
import { getRecommended } from "@/lib/recommended-service";

type Props = {};

async function Sidebar({}: Props) {
  const suggestedData = await getRecommended()
  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4">
        <SuggestedProfiles data={suggestedData}/>
      </div>
    </Wrapper>
  );
}

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 top-20 p-2 flex flex-col w-[90px] md:w-60 h-full bg-[rgb(37,39,41)] border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      {/* <FollowingSkeleton /> */}
      <SuggestedSkeleton />
    </aside>
  )
}

export default Sidebar;
