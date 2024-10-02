import { db } from "./db";
import { getUserDetails } from "./auth-service";

export const getRecommended = async () => {
  let userId;

  try {
    const user = await getUserDetails();
    userId = user.id;
  } catch (error) {
    userId = null;
  }

  let allUsers = [];

  if (userId) {
    allUsers = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
  } else {
    allUsers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return allUsers;
};
