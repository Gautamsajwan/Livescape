'use client'
import React, { useTransition } from "react";
import { onFollow, onUnfollow } from "@/actions/follow-actions"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block-actions";

type Props = {
    isFollowing: boolean,
    userId: string
}

export const Actions = ({ isFollowing, userId }: Props) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = ()  => {
        startTransition(() => {
            onFollow(userId)
                .then(data => toast.success(`You just followed ${data.following.username}`))
                .catch(() => toast.error("Failed to Follow"))
        })
    }

    const handleUnfollow = ()  => {
        startTransition(() => {
            onUnfollow(userId)
                .then(data => toast.success(`You just unfollowed ${data.following.username}`))
                .catch(() => toast.error("Failed to unFollow"))
        })
    }

    const handleBlock = () => {
        startTransition(() => {
            onBlock(userId)
                .then(data => toast.success(`You just blocked ${data.blocked.username}`))
                .catch(() => toast.error('Failed to block'))
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
        <>
            <Button disabled={isPending} onClick={onClick} className="bg-indigo-500 text-white hover:text-black transition-colors ease-in-out">
                {isFollowing ? "UnFollow" : "Follow"}
            </Button>
            <Button disabled={isPending} onClick={handleBlock}>
                Block
            </Button>
        </>
    )
}