import { db } from "./db";
import { getPersonalDetails } from "./auth-service";

export const getRecommended = async () => {
  let userId;

  try {
    const user = await getPersonalDetails();
    userId = user.id;
  } catch (error) {
    userId = null;
  }

  let allUsers = [];

  if (userId) {
    allUsers = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: userId
            }
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId
                }
              }
            }
          },
          {
            NOT: {
              blocked: {
                some: {
                  blockedId: userId
                }
              }
            }
          }
        ]
      },
      include: {
        stream: {
          select: {
            isLive: true
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
  } else {
    allUsers = await db.user.findMany({
      include: {
        stream: {
          select: {
            isLive: true
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return allUsers;
};
