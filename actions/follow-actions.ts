'use server'
// these are server actions
import { followUser, unfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (userId: string) => {
    try {
        const followedUser = await followUser(userId);

        revalidatePath('/')

        if(followedUser) {
            revalidatePath(`/${followedUser.following.username}`)
        }

        return followedUser
    } catch (error) {
        throw new Error("Failed to follow user");
    }
}

export const onUnfollow = async (userId: string) => {
    try {
        const unfollowedUser = await unfollowUser(userId);

        revalidatePath('/')

        if(unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following.username}`)
        }

        return unfollowedUser
    } catch (error) {
        throw new Error("Failed to unfollow user");
    }
}