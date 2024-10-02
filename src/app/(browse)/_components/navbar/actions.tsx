import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

type Props = {};

async function Actions({}: Props) {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="group hover:text-red-400 transition duration-200"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="w-7 h-7 lg:mr-2 text-gray-300 group-hover:text-inherit" />
              <span className="hidden text-sm lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "w-8 h-8 outline outline-[3px] outline-gray-300"
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Actions;
