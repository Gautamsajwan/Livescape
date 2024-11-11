"use server";

import { RoomServiceClient } from "livekit-server-sdk";
import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { getPersonalDetails } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  const self = await getPersonalDetails();

  let blockedUser;

  try {
    blockedUser = await blockUser(id);
  } catch {
    // This means user is a guest
  }
  try {
    await roomService.removeParticipant(self.id, id);
  } catch {
    // This means user is not in the room
  }
  revalidatePath(`/u/${self.username}/community`);

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const self = await getPersonalDetails();
  const unblockedUser = await unBlockUser(id);

  revalidatePath(`/u/${self.username}/community`);
  return unblockedUser;
};
