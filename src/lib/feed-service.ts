import { db } from "@/lib/db"
import { getPersonalDetails } from "@/lib/auth-service"

export const getStreams = async () => {
  let userId;

  try {
    const self = await getPersonalDetails();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
    streams = await db.stream.findMany({
      where: {
        user: {
          NOT: {
            blocked: {
              some: {
                blockedId: userId,
              }
            }
          }
        }
      },
      select: {
        id: true,
        user: true,
        isLive: true,
        name: true,
        thumbnailUrl: true,
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        }
      ],
    });
  } else {
    streams = await db.stream.findMany({
      select: {
        id: true,
        user: true,
        isLive: true,
        name: true,
        thumbnailUrl: true,
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        }
      ]
    });
  }

  return streams;
};