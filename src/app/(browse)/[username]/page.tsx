import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUserName } from "@/lib/user-service";
import { SearchSlash } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

type Props = {
  params: {
    username: string;
  };
};

async function ProfilePage({ params }: Props) {
  const user = await getUserByUserName(params.username);

  if (!user) {
    return (
      <div className="w-full text-gray-400 font-semibold h-[calc(100vh-80px)] flex flex-col gap-4 justify-center items-center">
        <SearchSlash className="w-16 h-16 " />
        <p className="text-lg">User not found</p>
      </div>
    );
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if(isBlocked) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-2">
      <p>username = {user.username}</p>
      <p>userid = {user.id}</p>
      <p>clerk id = {user.externalUserId}</p>
      <p>isFollowing = {`${isFollowing}`}</p>
      <p>isBlocked by this user= {`${isBlocked}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}

export default ProfilePage;
