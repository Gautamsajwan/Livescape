import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const getPersonalDetails = async () => {
  const user_clerk = await currentUser();

  if (!user_clerk || !user_clerk.username) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      externalUserId: user_clerk.id,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
};

export const getSelfByUsername = async (username: string) => {
  const user_clerk = await currentUser();

  if (!user_clerk || !user_clerk.username) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { username },
  });

  if (!user) throw new Error("User not found");

  if (user_clerk.username !== user.username) throw new Error("Unauthorized");

  return user;
};