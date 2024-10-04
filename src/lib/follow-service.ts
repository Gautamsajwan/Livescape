import { getPersonalDetails } from "./auth-service";
import { db } from "./db";

export const getFollowedUsers = async () => {
  try {
    const personalProfile = await getPersonalDetails() 
    
    const followedUsers =  db.follow.findMany({
      where: {
        followerId: personalProfile.id,
        following: {
          blocked: {
            none: {
              blockerId: personalProfile.id
            }
          }
        }
      },
      include: {
        following: true
      }
    })

    return followedUsers;
  } catch (error) {
    return [];
  }
}

export const isFollowingUser = async (id: string) => {
  try {
    const personalProfile = await getPersonalDetails();

    const followedProfile = await db.user.findUnique({
      where: { id },
    });

    if (!followedProfile) {
      throw new Error("User not found");
    }

    if (followedProfile.id === personalProfile.id) {
      return true;
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: personalProfile.id,
        followingId: followedProfile.id,
      },
    });

    return !!existingFollow; 
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const personalProfile = await getPersonalDetails();

  const targetProfile = await db.user.findUnique({
    where: { id },
  });

  if(!targetProfile) {
    throw new Error("User not found");
  }

  if (targetProfile.id === personalProfile.id) {
    throw new Error("You cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: { 
      followerId: personalProfile.id,
      followingId: targetProfile.id,
    },
  });

  if(existingFollow) {
    throw new Error("You are already following this user");
  }

  const follow = await db.follow.create({
    data: {
      followerId: personalProfile.id,
      followingId: targetProfile.id,
    },
    include: {
      following: true,
      follower: true,
    }
  });

  return follow;
}

export const unfollowUser = async (id: string) => {
  const personalProfile = await getPersonalDetails();

  const targetProfile = await db.user.findUnique({
    where: { id },
  });

  if(!targetProfile) {
    throw new Error("User not found");
  }

  if (targetProfile.id === personalProfile.id) {
    throw new Error("You cannot unfollow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: personalProfile.id,
      followingId: targetProfile.id,
    },
  });

  if(!existingFollow) {
    throw new Error("You are not following this user");
  }

  const unfollowedUser = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      following: true,
      follower: true,
    }
  });

  return unfollowedUser;
}