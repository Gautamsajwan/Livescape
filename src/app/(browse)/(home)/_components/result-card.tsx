import Link from "next/link";
import { User } from "@prisma/client";
import { Thumbnail, ThumbnailSkeleton } from "@/components/utils/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/utils/user-avatar";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  data: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
        <div
          className={cn(
            "py-3 px-4 flex gap-x-3 items-center bg-[#7b86eb] rounded-b-xl",
            data.isLive && "bg-rose-300"
          )}
        >
          <UserAvatar
            username={data.user.username}
            imageUrl={data.user.imageUrl}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-yellow-200">
              {data.name}
            </p>
            <p className="text-gray-950">{data.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
};
