import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOut, SquareArrowOutUpRight, TwitchIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

async function Actions({}: Props) {
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <Button
        size="default"
        className="px-4 rounded-full bg-slate-600 hover:bg-red-400 text-gray-200 hover:text-white"
        asChild
      >
        <Link href="/">
          <SquareArrowOutUpRight className="h-5 w-5 mr-2" />
          <p className="tracking-wide font-semibold">Exit</p>
        </Link>
      </Button>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-8 h-8 ",
          },
        }}
      />
    </div>
  );
}

export default Actions;
