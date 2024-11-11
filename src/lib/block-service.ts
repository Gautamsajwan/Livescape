import { getPersonalDetails } from "./auth-service";
import { db } from "./db";

export const isBlockedByUser = async (id: string) => {
  try {
    const personalProfile = await getPersonalDetails();

    const targetUser = await db.user.findUnique({
      where: { id },
    });

    if (!targetUser) throw new Error("User not found");

    if (targetUser.id === personalProfile.id) return false;

    const isBlocked = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: targetUser.id,
          blockedId: personalProfile.id,
        },
      },
    });

    return !!isBlocked;
  } catch (error) {
    return false;
  }
};

export const blockUser = async (id: string) => {
  const personalProfile = await getPersonalDetails();

  const targetUser = await db.user.findUnique({
    where: { id },
  });

  if (!targetUser) throw new Error("User not found");

  if (targetUser.id === personalProfile.id)
    throw new Error("cannot block/unblock yourself");

  const alreadyBlocked = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: personalProfile.id,
        blockedId: targetUser.id,
      },
    },
  });

  if (!!alreadyBlocked) throw new Error("User already blocked");

  const block = await db.block.create({
    data: {
      blockerId: personalProfile.id,
      blockedId: targetUser.id,
    },
    include: {
      blocked: true,
    },
  });

  return block;
};

export const unBlockUser = async (id: string) => {
  const personalProfile = await getPersonalDetails();

  const targetUser = await db.user.findUnique({
    where: { id },
  });

  if (!targetUser) throw new Error("User not found");

  if (targetUser.id === personalProfile.id)
    throw new Error("cant block/unblock yourself");

  const alreadyBlocked = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: personalProfile.id,
        blockedId: targetUser.id,
      },
    },
  });

  if (!alreadyBlocked) throw new Error("User is already unblocked");

  const unblock = await db.block.delete({
    where: {
      id: alreadyBlocked.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblock;
};

export const getBlockedUsers = async () => {
  const self = await getPersonalDetails();
  const blockedUsers = await db.block.findMany({
    where: {
      blockerId: self.id,
    },
    include: {
      blocked: true,
    },
  });
  return blockedUsers;
};
