import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const getUserDetails = async () => {
    const user_clerk = await currentUser();

    if(!user_clerk || !user_clerk.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {
            externalUserId: user_clerk.id
        }
    });

    if(!user) {
        throw new Error("User not found");
    }

    return user;
}