'use client'
import { onFollow, onUnfollow } from "@/actions/follow"
import { Button } from "@/components/ui/button"
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
    isFollowing: boolean,
    userId: string
}

export const Actions = ({ isFollowing, userId }: Props) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = ()  => {
        startTransition(() => {
            onFollow(userId)
                .then((data) => toast.success(`You just followed ${data.following.username}`))
                .catch(() => toast.error("Failed to Follow"))
        })
    }

    const handleUnfollow = ()  => {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) => toast.success(`You just unfollowed ${data.following.username}`))
                .catch(() => toast.error("Failed to unFollow"))
        })
    }

    const onClick = () => {
        if(isFollowing) {
            handleUnfollow()
        } else {
            handleFollow()
        }
    }

    return (
        <Button disabled={isPending} onClick={onClick} className="bg-indigo-500 text-white hover:text-black transition-colors ease-in-out">
            {isFollowing ? "UnFollow" : "Follow"}
        </Button>
    )
}