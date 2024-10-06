import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

type Props = {};

async function Actions({}: Props) {
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <Button
        size="default"
        variant="ghost"
        className="px-4 border-[2.5px] rounded-full border-rose-400/90 font-semibold text-muted-foreground hover:text-primary"
        asChild
      >
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" />
          Exit
        </Link>
      </Button>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-8 h-8 outline outline-[3px] outline-gray-300",
          },
        }}
      />
    </div>
  );
}

export default Actions;
